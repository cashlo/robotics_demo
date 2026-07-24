import { Viewport3D } from './src/viewport3d.js';
import { UIController } from './src/ui.js';
import { computeKinematics } from './src/math/so3.js';
import { computeSE3Kinematics } from './src/math/se3.js';
import { computePlanar2DOF } from './src/math/planar2dof.js';
import { computeNullSpaceKinematics } from './src/math/nullspace.js';
import { computeIKState } from './src/math/ik.js';

class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.viewport = new Viewport3D(this.container);

    this.mode = 'SE3';
    this.isPlaying = false;
    this.lastFrameTime = performance.now();
    this.accumulatedTime = 0;

    // Initialize UI Controller
    this.ui = new UIController({
      onModeChange: (mode) => this.onModeChange(mode),
      onParameterChange: (params) => this.onParameterChange(params),
      onPlayStateChange: (playing) => this.onPlayStateChange(playing),
      onResetTime: () => this.onResetTime(),
      onResetCamera: () => this.onResetCamera()
    });

    // Handle initial mode setup
    this.mode = this.ui.mode;
    this.viewport.setMode(this.mode);

    // Bind animation loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    // Initial state calculation
    this.updateState(true);
  }

  onModeChange(mode) {
    this.mode = mode;
    this.viewport.setMode(mode);
    this.updateState(true);
  }

  onParameterChange(params) {
    this.updateState(false);
  }

  onPlayStateChange(playing) {
    this.isPlaying = playing;
  }

  onResetTime() {
    this.ui.setTimeStep(0);
    this.updateState(true);
  }

  onResetCamera() {
    this.viewport.resetCamera();
  }

  updateState(clearTrail = false) {
    if (!this.ui) return;
    const params = this.ui.getParams();

    if (this.mode === 'IK') {
      const p_ref = [params.wx, params.wy, params.wz];
      const state = computeIKState(
        params.ikMethod || 'Newton-Raphson',
        p_ref,
        params.tStep,
        100
      );

      this.viewport.updateIK(state);
      this.ui.renderState(state);
    } else if (this.mode === 'NULLSPACE') {
      const q_start = [
        params.wx * Math.PI / 180,
        params.wy * Math.PI / 180,
        params.wz * Math.PI / 180
      ];
      const q0_dot = [params.vx, params.vy, params.vz];

      const state = computeNullSpaceKinematics(
        q_start,
        q0_dot,
        params.tStep,
        0.04
      );

      this.viewport.updateNullSpace(state, clearTrail);
      this.ui.renderState(state);
    } else if (this.mode === 'PLANAR2DOF') {
      // Single-instant calculation for static joint configuration q = [theta1, theta2]^T
      const state = computePlanar2DOF(
        params.wx, // theta1 (deg)
        params.wy, // theta2 (deg)
        params.vx, // dtheta1 (rad/s)
        params.vy  // dtheta2 (rad/s)
      );
      state.t = 0;

      this.viewport.updatePlanar2DOF(state, clearTrail);
      this.ui.renderState(state);
    } else if (this.mode === 'SE3') {
      const state = computeSE3Kinematics(
        params.tStep,
        params.wx, params.wy, params.wz,
        params.vx, params.vy, params.vz
      );
      this.viewport.updateSE3(state.H, state.w, state.v, clearTrail);
      this.ui.renderState(state);
    } else { // SO3
      const state = computeKinematics(
        params.tStep,
        params.wx, params.wy, params.wz
      );
      this.viewport.updateSO3(state.R, state.w, clearTrail);
      this.ui.renderState(state);
    }
  }

  animate(now) {
    requestAnimationFrame(this.animate);

    const dt = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;

    if (this.isPlaying) {
      this.accumulatedTime += dt;
      if (this.accumulatedTime >= 0.04) {
        this.accumulatedTime = 0;
        let currentStep = parseInt(this.ui.sliderT.value, 10);
        const maxSteps = (this.mode === 'IK') ? 101 : 501;
        currentStep = (currentStep + 1) % maxSteps;
        this.ui.setTimeStep(currentStep);
        this.updateState(false);
      }
    }

    this.viewport.render();
  }
}

// Instantiate app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
