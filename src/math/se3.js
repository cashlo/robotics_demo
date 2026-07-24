import { skew, matMul3x3, transpose3x3 } from './so3.js';

/**
 * Converts angular velocity w and linear velocity v into a 4x4 se(3) Lie Algebra matrix
 * @param {number[]} w - [wx, wy, wz]
 * @param {number[]} v - [vx, vy, vz]
 * @returns {number[][]} 4x4 matrix
 */
export function createSE3(w, v) {
  const w_cross = skew(w);
  return [
    [w_cross[0][0], w_cross[0][1], w_cross[0][2], v[0]],
    [w_cross[1][0], w_cross[1][1], w_cross[1][2], v[1]],
    [w_cross[2][0], w_cross[2][1], w_cross[2][2], v[2]],
    [0, 0, 0, 0]
  ];
}

/**
 * Matrix multiplication for 4x4 matrices: C = A * B
 * @param {number[][]} A 
 * @param {number[][]} B 
 * @returns {number[][]}
 */
export function matMul4x4(A, B) {
  const C = Array.from({ length: 4 }, () => [0, 0, 0, 0]);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        sum += A[i][k] * B[k][j];
      }
      C[i][j] = sum;
    }
  }
  return C;
}

/**
 * Computes inverse of SE(3) pose matrix H = [R, p; 0, 1]
 * H^-1 = [R^T, -R^T * p; 0, 1]
 * @param {number[][]} H 
 * @returns {number[][]}
 */
export function invSE3(H) {
  const R = [
    [H[0][0], H[0][1], H[0][2]],
    [H[1][0], H[1][1], H[1][2]],
    [H[2][0], H[2][1], H[2][2]]
  ];
  const p = [H[0][3], H[1][3], H[2][3]];

  const Rt = transpose3x3(R);
  // -R^T * p
  const negRt_p = [
    -(Rt[0][0] * p[0] + Rt[0][1] * p[1] + Rt[0][2] * p[2]),
    -(Rt[1][0] * p[0] + Rt[1][1] * p[1] + Rt[1][2] * p[2]),
    -(Rt[2][0] * p[0] + Rt[2][1] * p[1] + Rt[2][2] * p[2])
  ];

  return [
    [Rt[0][0], Rt[0][1], Rt[0][2], negRt_p[0]],
    [Rt[1][0], Rt[1][1], Rt[1][2], negRt_p[1]],
    [Rt[2][0], Rt[2][1], Rt[2][2], negRt_p[2]],
    [0, 0, 0, 1]
  ];
}

/**
 * Closed-form Matrix Exponential for se(3) -> SE(3)
 * H(t) = exp(se(3) * t)
 * @param {number[]} w - Angular velocity [wx, wy, wz]
 * @param {number[]} v - Linear velocity [vx, vy, vz]
 * @param {number} t - Time parameter
 * @returns {number[][]} 4x4 Pose matrix H
 */
export function expmSE3(w, v, t) {
  const wx = w[0], wy = w[1], wz = w[2];
  const vx = v[0], vy = v[1], vz = v[2];

  const theta = Math.hypot(wx * t, wy * t, wz * t);

  if (theta < 1e-7) {
    // Pure translation or near-zero rotation
    return [
      [1, 0, 0, vx * t],
      [0, 1, 0, vy * t],
      [0, 0, 1, vz * t],
      [0, 0, 0, 1]
    ];
  }

  const wNorm = Math.hypot(wx, wy, wz);
  const ux = wx / wNorm;
  const uy = wy / wNorm;
  const uz = wz / wNorm;

  const K = skew([ux, uy, uz]);
  const K2 = matMul3x3(K, K);

  const sinT = Math.sin(theta);
  const cosT = Math.cos(theta);

  // Rotation R(t) = I + sin(theta)*K + (1-cos(theta))*K^2
  const R = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      R[i][j] += sinT * K[i][j] + (1 - cosT) * K2[i][j];
    }
  }

  // Left Jacobian V(theta) = I + (1-cos(theta))/theta * K + (theta - sin(theta))/theta * K^2
  const V = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  const coeff1 = (1 - cosT) / theta;
  const coeff2 = (theta - sinT) / theta;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      V[i][j] += coeff1 * K[i][j] + coeff2 * K2[i][j];
    }
  }

  // Translation p(t) = V(theta) * v * t
  const vt = [vx * t, vy * t, vz * t];
  const p = [
    V[0][0] * vt[0] + V[0][1] * vt[1] + V[0][2] * vt[2],
    V[1][0] * vt[0] + V[1][1] * vt[1] + V[1][2] * vt[2],
    V[2][0] * vt[0] + V[2][1] * vt[1] + V[2][2] * vt[2]
  ];

  return [
    [R[0][0], R[0][1], R[0][2], p[0]],
    [R[1][0], R[1][1], R[1][2], p[1]],
    [R[2][0], R[2][1], R[2][2], p[2]],
    [0, 0, 0, 1]
  ];
}

/**
 * Computes SE(3) pose & twist kinematics
 * @param {number} tStep 
 * @param {number} wx 
 * @param {number} wy 
 * @param {number} wz 
 * @param {number} vx 
 * @param {number} vy 
 * @param {number} vz 
 */
export function computeSE3Kinematics(tStep, wx, wy, wz, vx, vy, vz) {
  const t = tStep * 0.05;
  const w = [wx, wy, wz];
  const v = [vx, vy, vz];

  const se3_local = createSE3(w, v);
  const H = expmSE3(w, v, t);
  const H_dot = matMul4x4(H, se3_local);
  const H_inv = invSE3(H);
  const se3_global = matMul4x4(H_dot, H_inv);

  return {
    t,
    w,
    v,
    se3_local,
    H,
    H_dot,
    H_inv,
    se3_global,
    origin: [H[0][3], H[1][3], H[2][3]]
  };
}

/**
 * Formats a 4x4 matrix as a clean string block matching Python np.set_printoptions(float: {: 0.2f})
 * @param {number[][]} mat 
 * @param {number} digits 
 * @returns {string}
 */
export function formatMatrix4x4Text(mat, digits = 2) {
  return mat
    .map((row) =>
      '[' + row.map((val) => {
        const str = val.toFixed(digits);
        const cleaned = (str === '-0.00' || str === '-0.000') ? '0.00' : str;
        return cleaned.padStart(7, ' ');
      }).join('  ') + ']'
    )
    .join('\n');
}
