/**
 * Math Engine for 3-DOF Planar Manipulator Null-Space Motion
 * Kinematics, Jacobian, Pseudo-Inverse, and Null-Space Projection N = I - J# @ J
 */

const L1 = 1.0;
const L2 = 1.0;
const L3 = 1.0;

/**
 * Forward Kinematics for 3-DOF Planar Arm
 * @param {number[]} q - Joint angles in radians [q1, q2, q3]
 * @returns {number[][]} Array of joint positions [[x0,y0], [x1,y1], [x2,y2], [x3,y3]]
 */
export function getFK3DOF(q) {
  const [q1, q2, q3] = q;
  const x0 = 0.0, y0 = 0.0;
  const x1 = L1 * Math.cos(q1);
  const y1 = L1 * Math.sin(q1);
  const x2 = x1 + L2 * Math.cos(q1 + q2);
  const y2 = y1 + L2 * Math.sin(q1 + q2);
  const x3 = x2 + L3 * Math.cos(q1 + q2 + q3);
  const y3 = y2 + L3 * Math.sin(q1 + q2 + q3);

  return [
    [x0, y0],
    [x1, y1],
    [x2, y2],
    [x3, y3]
  ];
}

/**
 * Calculates 2x3 Jacobian matrix for 3-DOF planar arm
 * @param {number[]} q - Joint angles in radians [q1, q2, q3]
 * @returns {number[][]} 2x3 Jacobian matrix
 */
export function getJ3DOF(q) {
  const [q1, q2, q3] = q;
  const q12 = q1 + q2;
  const q123 = q1 + q2 + q3;

  const J11 = -L1 * Math.sin(q1) - L2 * Math.sin(q12) - L3 * Math.sin(q123);
  const J12 = -L2 * Math.sin(q12) - L3 * Math.sin(q123);
  const J13 = -L3 * Math.sin(q123);

  const J21 = L1 * Math.cos(q1) + L2 * Math.cos(q12) + L3 * Math.cos(q123);
  const J22 = L2 * Math.cos(q12) + L3 * Math.cos(q123);
  const J23 = L3 * Math.cos(q123);

  return [
    [J11, J12, J13],
    [J21, J22, J23]
  ];
}

/**
 * Computes 3x2 Moore-Penrose Pseudo-Inverse J# = J^T * (J * J^T)^-1
 * @param {number[][]} J - 2x3 matrix
 * @returns {number[][]} 3x2 matrix
 */
export function pinv2x3(J) {
  // JJT = J * J^T (2x2 matrix)
  const JJT = [
    [
      J[0][0] * J[0][0] + J[0][1] * J[0][1] + J[0][2] * J[0][2],
      J[0][0] * J[1][0] + J[0][1] * J[1][1] + J[0][2] * J[1][2]
    ],
    [
      J[1][0] * J[0][0] + J[1][1] * J[0][1] + J[1][2] * J[0][2],
      J[1][0] * J[1][0] + J[1][1] * J[1][1] + J[1][2] * J[1][2]
    ]
  ];

  const det = JJT[0][0] * JJT[1][1] - JJT[0][1] * JJT[1][0];
  if (Math.abs(det) < 1e-7) {
    // Near singularity: return damped transpose fallback
    return [
      [J[0][0], J[1][0]],
      [J[0][1], J[1][1]],
      [J[0][2], J[1][2]]
    ];
  }

  // Inverse of 2x2 JJT
  const invJJT = [
    [ JJT[1][1] / det, -JJT[0][1] / det],
    [-JJT[1][0] / det,  JJT[0][0] / det]
  ];

  // J# = J^T * invJJT (3x2)
  const J_pinv = [
    [
      J[0][0] * invJJT[0][0] + J[1][0] * invJJT[1][0],
      J[0][0] * invJJT[0][1] + J[1][0] * invJJT[1][1]
    ],
    [
      J[0][1] * invJJT[0][0] + J[1][1] * invJJT[1][0],
      J[0][1] * invJJT[0][1] + J[1][1] * invJJT[1][1]
    ],
    [
      J[0][2] * invJJT[0][0] + J[1][2] * invJJT[1][0],
      J[0][2] * invJJT[0][1] + J[1][2] * invJJT[1][1]
    ]
  ];

  return J_pinv;
}

/**
 * Computes 3x3 Null-Space Projector Matrix N = I_3 - J# * J
 * @param {number[][]} J - 2x3 matrix
 * @returns {Object} { N: 3x3 matrix, J_pinv: 3x2 matrix }
 */
export function computeNullSpaceProjector(J) {
  const J_pinv = pinv2x3(J);

  // J_pinv * J = (3x2) * (2x3) = 3x3 matrix
  const Jpinv_J = [
    [
      J_pinv[0][0] * J[0][0] + J_pinv[0][1] * J[1][0],
      J_pinv[0][0] * J[0][1] + J_pinv[0][1] * J[1][1],
      J_pinv[0][0] * J[0][2] + J_pinv[0][1] * J[1][2]
    ],
    [
      J_pinv[1][0] * J[0][0] + J_pinv[1][1] * J[1][0],
      J_pinv[1][0] * J[0][1] + J_pinv[1][1] * J[1][1],
      J_pinv[1][0] * J[0][2] + J_pinv[1][1] * J[1][2]
    ],
    [
      J_pinv[2][0] * J[0][0] + J_pinv[2][1] * J[1][0],
      J_pinv[2][0] * J[0][1] + J_pinv[2][1] * J[1][1],
      J_pinv[2][0] * J[0][2] + J_pinv[2][1] * J[1][2]
    ]
  ];

  // N = I_3 - J_pinv * J
  const N = [
    [1 - Jpinv_J[0][0], -Jpinv_J[0][1], -Jpinv_J[0][2]],
    [-Jpinv_J[1][0], 1 - Jpinv_J[1][1], -Jpinv_J[1][2]],
    [-Jpinv_J[2][0], -Jpinv_J[2][1], 1 - Jpinv_J[2][2]]
  ];

  return { N, J_pinv };
}

/**
 * Computes Null-Space Motion State
 * @param {number[]} q_start - Initial joint angles in radians [q1, q2, q3]
 * @param {number[]} q0_dot - Arbitrary internal joint velocity vector [y1, y2, y3]
 * @param {number} tStep - Current time step index
 * @param {number} dt - Integration step size
 */
export function computeNullSpaceKinematics(q_start, q0_dot, tStep, dt = 0.04) {
  let q = [...q_start];
  let q_dot = [0, 0, 0];
  let J = getJ3DOF(q);
  let { N, J_pinv } = computeNullSpaceProjector(J);

  // Integrate null-space motion: q_dot = N * q0_dot
  for (let i = 0; i < tStep; i++) {
    J = getJ3DOF(q);
    const proj = computeNullSpaceProjector(J);
    N = proj.N;
    J_pinv = proj.J_pinv;

    // q_dot = N * q0_dot
    q_dot = [
      N[0][0] * q0_dot[0] + N[0][1] * q0_dot[1] + N[0][2] * q0_dot[2],
      N[1][0] * q0_dot[0] + N[1][1] * q0_dot[1] + N[1][2] * q0_dot[2],
      N[2][0] * q0_dot[0] + N[2][1] * q0_dot[1] + N[2][2] * q0_dot[2]
    ];

    q[0] += q_dot[0] * dt;
    q[1] += q_dot[1] * dt;
    q[2] += q_dot[2] * dt;
  }

  // Re-evaluate state at final step
  J = getJ3DOF(q);
  const proj = computeNullSpaceProjector(J);
  N = proj.N;
  J_pinv = proj.J_pinv;

  q_dot = [
    N[0][0] * q0_dot[0] + N[0][1] * q0_dot[1] + N[0][2] * q0_dot[2],
    N[1][0] * q0_dot[0] + N[1][1] * q0_dot[1] + N[1][2] * q0_dot[2],
    N[2][0] * q0_dot[0] + N[2][1] * q0_dot[1] + N[2][2] * q0_dot[2]
  ];

  // End-effector velocity v = J * q_dot
  const v = [
    J[0][0] * q_dot[0] + J[0][1] * q_dot[1] + J[0][2] * q_dot[2],
    J[1][0] * q_dot[0] + J[1][1] * q_dot[1] + J[1][2] * q_dot[2]
  ];

  const joints = getFK3DOF(q);
  const endEffectorSpeed = Math.hypot(v[0], v[1]);

  return {
    q,
    q_deg: [q[0] * 180 / Math.PI, q[1] * 180 / Math.PI, q[2] * 180 / Math.PI],
    q0_dot,
    q_dot,
    J,
    J_pinv,
    N,
    v,
    endEffectorSpeed,
    j0: joints[0],
    j1: joints[1],
    j2: joints[2],
    j3: joints[3]
  };
}

/**
 * Formats a 2x3 matrix as a string block
 */
export function formatMatrix2x3Text(mat, digits = 3) {
  return mat
    .map((row) =>
      '[' + row.map((val) => {
        const str = val.toFixed(digits);
        const cleaned = (str === '-0.000') ? '0.000' : str;
        return cleaned.padStart(7, ' ');
      }).join('  ') + ']'
    )
    .join('\n');
}

/**
 * Formats a 3x3 matrix as a string block
 */
export function formatMatrix3x3Text(mat, digits = 3) {
  return mat
    .map((row) =>
      '[' + row.map((val) => {
        const str = val.toFixed(digits);
        const cleaned = (str === '-0.000') ? '0.000' : str;
        return cleaned.padStart(7, ' ');
      }).join('  ') + ']'
    )
    .join('\n');
}
