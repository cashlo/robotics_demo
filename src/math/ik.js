/**
 * Math Engine for 3-DOF Spatial Arm Numerical IK Solvers
 * Newton-Raphson, Gradient (Steepest), Gauss-Newton, and Levenberg-Marquardt
 */

export const L1 = 1.0; // Base height
export const L2 = 1.0; // Upper arm length
export const L3 = 1.0; // Forearm length

/**
 * Forward Kinematics for 3-DOF Spatial Yaw-Pitch-Pitch Arm
 * @param {number[]} q - Joint angles in radians [q1 (yaw), q2 (shoulder pitch), q3 (elbow pitch)]
 * @returns {Object} { p_k: [x,y,z], pts: [[0,0,0], [x1,y1,z1], [x2,y2,z2], [x3,y3,z3]] }
 */
export function getFK_IK(q) {
  const [q1, q2, q3] = q;

  const r2 = L2 * Math.cos(q2);
  const r3 = L2 * Math.cos(q2) + L3 * Math.cos(q2 + q3);

  // Joint 0 (Origin)
  const x0 = 0.0, y0 = 0.0, z0 = 0.0;

  // Joint 1 (Base Yaw top)
  const x1 = 0.0, y1 = 0.0, z1 = L1;

  // Joint 2 (Shoulder Pitch)
  const x2 = Math.cos(q1) * r2;
  const y2 = Math.sin(q1) * r2;
  const z2 = L1 + L2 * Math.sin(q2);

  // Joint 3 (End-Effector)
  const x3 = Math.cos(q1) * r3;
  const y3 = Math.sin(q1) * r3;
  const z3 = L1 + L2 * Math.sin(q2) + L3 * Math.sin(q2 + q3);

  const p_k = [x3, y3, z3];
  const pts = [
    [x0, y0, z0],
    [x1, y1, z1],
    [x2, y2, z2],
    [x3, y3, z3]
  ];

  return { p_k, pts };
}

/**
 * Calculates 3x3 Jacobian Matrix for 3-DOF Spatial Arm
 * @param {number[]} q - Joint angles in radians [q1, q2, q3]
 * @returns {number[][]} 3x3 Jacobian matrix
 */
export function getJ_IK(q) {
  const [q1, q2, q3] = q;

  const r = L2 * Math.cos(q2) + L3 * Math.cos(q2 + q3);
  const dr_dq2 = -L2 * Math.sin(q2) - L3 * Math.sin(q2 + q3);
  const dr_dq3 = -L3 * Math.sin(q2 + q3);

  const J11 = -Math.sin(q1) * r;
  const J12 = Math.cos(q1) * dr_dq2;
  const J13 = Math.cos(q1) * dr_dq3;

  const J21 = Math.cos(q1) * r;
  const J22 = Math.sin(q1) * dr_dq2;
  const J23 = Math.sin(q1) * dr_dq3;

  const J31 = 0.0;
  const J32 = L2 * Math.cos(q2) + L3 * Math.cos(q2 + q3);
  const J33 = L3 * Math.cos(q2 + q3);

  return [
    [J11, J12, J13],
    [J21, J22, J23],
    [J31, J32, J33]
  ];
}

/**
 * Calculates determinant of 3x3 matrix
 */
export function det3x3(m) {
  return (
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
  );
}

/**
 * Calculates inverse of 3x3 matrix
 */
export function inv3x3(m) {
  const det = det3x3(m);
  if (Math.abs(det) < 1e-9) {
    throw new Error('Singular matrix');
  }

  const invdet = 1.0 / det;
  return [
    [
      (m[1][1] * m[2][2] - m[1][2] * m[2][1]) * invdet,
      (m[0][2] * m[2][1] - m[0][1] * m[2][2]) * invdet,
      (m[0][1] * m[1][2] - m[0][2] * m[1][1]) * invdet
    ],
    [
      (m[1][2] * m[2][0] - m[1][0] * m[2][2]) * invdet,
      (m[0][0] * m[2][2] - m[0][2] * m[2][0]) * invdet,
      (m[0][2] * m[1][0] - m[0][0] * m[1][2]) * invdet
    ],
    [
      (m[1][0] * m[2][1] - m[1][1] * m[2][0]) * invdet,
      (m[0][1] * m[2][0] - m[0][0] * m[2][1]) * invdet,
      (m[0][0] * m[1][1] - m[0][1] * m[1][0]) * invdet
    ]
  ];
}

/**
 * Transpose of 3x3 matrix
 */
export function transpose3x3(m) {
  return [
    [m[0][0], m[1][0], m[2][0]],
    [m[0][1], m[1][1], m[2][1]],
    [m[0][2], m[1][2], m[2][2]]
  ];
}

/**
 * 3x3 Matrix multiplication A * B
 */
export function matMul3x3(A, B) {
  const C = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      C[r][c] = A[r][0] * B[0][c] + A[r][1] * B[1][c] + A[r][2] * B[2][c];
    }
  }
  return C;
}

/**
 * 3x3 Matrix-Vector multiplication M * v
 */
export function mat3x3VecMul(M, v) {
  return [
    M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
    M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
    M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]
  ];
}

/**
 * Solves Numerical IK for 3-DOF Spatial Arm
 * @param {string} method - 'Newton-Raphson' | 'Gradient (Steepest)' | 'Gauss-Newton' | 'Levenberg-Marquardt'
 * @param {number[]} p_ref - Target position [target_x, target_y, target_z]
 * @param {number} max_iter - Maximum iterations (default 100)
 */
export function solveIK(method, p_ref, max_iter = 100) {
  // Initial guess (Slightly bent to avoid starting at a singularity)
  let q = [Math.PI / 4, Math.PI / 4, -Math.PI / 4];
  const history_q = [[...q]];

  const alpha = 0.2; // Learning rate for Gradient method
  const w = 0.1;     // Damping factor for Levenberg-Marquardt
  let converged_at = null;

  for (let i = 0; i < max_iter; i++) {
    const { p_k } = getFK_IK(q);
    const err = [p_ref[0] - p_k[0], p_ref[1] - p_k[1], p_ref[2] - p_k[2]];
    const errNorm = Math.hypot(err[0], err[1], err[2]);

    if (errNorm < 1e-3) {
      if (converged_at === null) {
        converged_at = i;
      }
      break;
    }

    const J = getJ_IK(q);
    let dq = [0, 0, 0];

    try {
      if (method === 'Newton-Raphson') {
        // dq = J^-1 * err
        const invJ = inv3x3(J);
        dq = mat3x3VecMul(invJ, err);
      } else if (method === 'Gradient (Steepest)') {
        // dq = alpha * (J^T * err)
        const JT = transpose3x3(J);
        const JT_err = mat3x3VecMul(JT, err);
        dq = [alpha * JT_err[0], alpha * JT_err[1], alpha * JT_err[2]];
      } else if (method === 'Gauss-Newton') {
        // dq = (J^T * J)^-1 * J^T * err
        const JT = transpose3x3(J);
        const JT_J = matMul3x3(JT, J);
        const inv_JT_J = inv3x3(JT_J);
        const J_pinv = matMul3x3(inv_JT_J, JT);
        dq = mat3x3VecMul(J_pinv, err);
      } else if (method === 'Levenberg-Marquardt') {
        // dq = (J^T * J + w*E)^-1 * J^T * err
        const JT = transpose3x3(J);
        const JT_J = matMul3x3(JT, J);
        const JT_J_wE = [
          [JT_J[0][0] + w, JT_J[0][1], JT_J[0][2]],
          [JT_J[1][0], JT_J[1][1] + w, JT_J[1][2]],
          [JT_J[2][0], JT_J[2][1], JT_J[2][2] + w]
        ];
        const inv_JT_J_wE = inv3x3(JT_J_wE);
        const J_sr = matMul3x3(inv_JT_J_wE, JT);
        dq = mat3x3VecMul(J_sr, err);
      }
    } catch (e) {
      // Matrix is singular and cannot be inverted
      break;
    }

    // Limit massive jumps caused by near-singularities
    const dqNorm = Math.hypot(dq[0], dq[1], dq[2]);
    if (dqNorm > Math.PI) {
      dq = [
        (dq[0] / dqNorm) * Math.PI,
        (dq[1] / dqNorm) * Math.PI,
        (dq[2] / dqNorm) * Math.PI
      ];
    }

    q = [q[0] + dq[0], q[1] + dq[1], q[2] + dq[2]];
    history_q.push([...q]);
  }

  return { history_q, converged_at };
}

/**
 * Computes full state output for a specific iteration
 */
export function computeIKState(method, p_ref, currentIter, max_iter = 100) {
  const { history_q, converged_at } = solveIK(method, p_ref, max_iter);
  const total_iters = history_q.length - 1;
  const iter = Math.min(currentIter, total_iters);
  const q_current = history_q[iter];

  const { p_k, pts } = getFK_IK(q_current);
  const J = getJ_IK(q_current);
  const det_J = det3x3(J);

  const err = [p_ref[0] - p_k[0], p_ref[1] - p_k[1], p_ref[2] - p_k[2]];
  const errorNorm = Math.hypot(err[0], err[1], err[2]);

  let status = '';
  let isConverged = false;
  let isFailed = false;

  if (converged_at !== null) {
    status = `Converged in ${converged_at} iterations.`;
    isConverged = true;
  } else if (iter === total_iters && errorNorm > 1e-3) {
    status = 'Failed / Stuck (Check Singularity)';
    isFailed = true;
  } else {
    status = 'Searching...';
  }

  // Generate trail of past end-effector positions up to current iteration
  const trail = [];
  for (let i = 0; i <= iter; i++) {
    const { p_k: pk_hist } = getFK_IK(history_q[i]);
    trail.push(pk_hist);
  }

  return {
    method,
    p_ref,
    currentIter: iter,
    maxIter: total_iters,
    q: q_current,
    q_deg: [q_current[0] * 180 / Math.PI, q_current[1] * 180 / Math.PI, q_current[2] * 180 / Math.PI],
    p_k,
    pts,
    J,
    det_J,
    errorNorm,
    converged_at,
    status,
    isConverged,
    isFailed,
    trail
  };
}
