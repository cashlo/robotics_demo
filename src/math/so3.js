/**
 * SO(3) Lie Algebra & 3D Kinematics Math Library
 */

/**
 * Converts a 3D angular velocity vector into an so(3) skew-symmetric matrix.
 * @param {number[]} w - [wx, wy, wz]
 * @returns {number[][]} 3x3 skew-symmetric matrix
 */
export function skew(w) {
  const [wx, wy, wz] = w;
  return [
    [0, -wz, wy],
    [wz, 0, -wx],
    [-wy, wx, 0]
  ];
}

/**
 * Matrix multiplication for 3x3 matrices: C = A * B
 * @param {number[][]} A 
 * @param {number[][]} B 
 * @returns {number[][]}
 */
export function matMul3x3(A, B) {
  const C = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      C[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j] + A[i][2] * B[2][j];
    }
  }
  return C;
}

/**
 * Transpose of a 3x3 matrix
 * @param {number[][]} A 
 * @returns {number[][]}
 */
export function transpose3x3(A) {
  return [
    [A[0][0], A[1][0], A[2][0]],
    [A[0][1], A[1][1], A[2][1]],
    [A[0][2], A[1][2], A[2][2]]
  ];
}

/**
 * Matrix exponential for so(3) -> SO(3) using Rodrigues' Rotation Formula
 * R(t) = exp([w x] * t)
 * @param {number[]} w - Angular velocity vector [wx, wy, wz]
 * @param {number} t - Time step
 * @returns {number[][]} 3x3 Rotation matrix R in SO(3)
 */
export function expmSO3(w, t) {
  const vx = w[0] * t;
  const vy = w[1] * t;
  const vz = w[2] * t;
  
  const theta = Math.hypot(vx, vy, vz);

  if (theta < 1e-7) {
    // First-order Taylor approximation near origin
    const K = skew([vx, vy, vz]);
    return [
      [1 + K[0][0], K[0][1], K[0][2]],
      [K[1][0], 1 + K[1][1], K[1][2]],
      [K[2][0], K[2][1], 1 + K[2][2]]
    ];
  }

  const ux = vx / theta;
  const uy = vy / theta;
  const uz = vz / theta;

  const K = skew([ux, uy, uz]);
  const K2 = matMul3x3(K, K);

  const sinT = Math.sin(theta);
  const cosT = Math.cos(theta);
  const oneMinusCosT = 1 - cosT;

  const R = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      R[i][j] += sinT * K[i][j] + oneMinusCosT * K2[i][j];
    }
  }

  return R;
}

/**
 * Computes determinant of 3x3 matrix
 * @param {number[][]} A 
 * @returns {number}
 */
export function det3x3(A) {
  return (
    A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) -
    A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) +
    A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0])
  );
}

/**
 * Computes state of SO(3) rotational kinematics
 * @param {number} tStep 
 * @param {number} wx 
 * @param {number} wy 
 * @param {number} wz 
 */
export function computeKinematics(tStep, wx, wy, wz) {
  const t = tStep * 0.02;
  const w = [wx, wy, wz];
  const w_cross = skew(w);
  const R = expmSO3(w, t);
  const R_dot = matMul3x3(w_cross, R);
  const w_hat_cross = matMul3x3(transpose3x3(R), R_dot);
  const spatial_w_cross = matMul3x3(R_dot, transpose3x3(R));
  const detR = det3x3(R);

  return {
    t,
    w,
    w_cross,
    R,
    R_dot,
    w_hat_cross,
    spatial_w_cross,
    detR
  };
}

/**
 * Formats a 3x3 matrix as a clean string block matching Python np.set_printoptions
 * @param {number[][]} mat 
 * @param {number} digits 
 * @returns {string}
 */
export function formatMatrixText(mat, digits = 3) {
  return mat
    .map((row) =>
      '[' + row.map((val) => {
        const str = val.toFixed(digits);
        // Handle negative zero formatting
        const cleaned = str === '-0.000' ? '0.000' : str;
        return cleaned.padStart(7, ' ');
      }).join('  ') + ']'
    )
    .join('\n');
}
