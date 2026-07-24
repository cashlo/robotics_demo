/**
 * 2-DOF Planar Robot Manipulator Kinematics & Jacobian Engine
 */

export const L1 = 1.0;
export const L2 = 1.0;

/**
 * Computes forward kinematics, Jacobian matrix, determinant, and end-effector velocity
 * @param {number} theta1_deg - Joint 1 angle in degrees
 * @param {number} theta2_deg - Joint 2 angle in degrees
 * @param {number} dtheta1 - Joint 1 velocity in rad/s
 * @param {number} dtheta2 - Joint 2 velocity in rad/s
 */
export function computePlanar2DOF(theta1_deg, theta2_deg, dtheta1, dtheta2) {
  const t1 = (theta1_deg * Math.PI) / 180;
  const t2 = (theta2_deg * Math.PI) / 180;

  // 1. Forward Kinematics
  const x0 = 0.0;
  const y0 = 0.0;
  const x1 = L1 * Math.cos(t1);
  const y1 = L1 * Math.sin(t1);
  const x2 = x1 + L2 * Math.cos(t1 + t2);
  const y2 = y1 + L2 * Math.sin(t1 + t2);

  // 2. Jacobian Matrix Calculation J(q)
  const J11 = -L1 * Math.sin(t1) - L2 * Math.sin(t1 + t2);
  const J12 = -L2 * Math.sin(t1 + t2);
  const J21 = L1 * Math.cos(t1) + L2 * Math.cos(t1 + t2);
  const J22 = L2 * Math.cos(t1 + t2);

  const J = [
    [J11, J12],
    [J21, J22]
  ];

  // Determinant det(J)
  const det_J = J11 * J22 - J12 * J21;
  const isSingular = Math.abs(det_J) < 0.001;

  // 3. Differential Kinematics (v = J * q_dot)
  const vx = J11 * dtheta1 + J12 * dtheta2;
  const vy = J21 * dtheta1 + J22 * dtheta2;
  const speed = Math.hypot(vx, vy);

  return {
    theta1_deg,
    theta2_deg,
    dtheta1,
    dtheta2,
    t1,
    t2,
    j0: [x0, y0],
    j1: [x1, y1],
    j2: [x2, y2], // End-effector
    J,
    det_J,
    isSingular,
    v: [vx, vy],
    speed
  };
}

/**
 * Formats a 2x2 matrix as a clean string block matching Python np.set_printoptions(float: {: 7.3f})
 * @param {number[][]} mat 
 * @returns {string}
 */
export function formatMatrix2x2Text(mat) {
  return mat
    .map((row) =>
      '[' + row.map((val) => {
        const str = val.toFixed(3);
        const cleaned = str === '-0.000' ? '0.000' : str;
        return cleaned.padStart(7, ' ');
      }).join('  ') + ']'
    )
    .join('\n');
}
