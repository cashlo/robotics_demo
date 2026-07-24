import katex from 'katex';
import { formatMatrixText } from './math/so3.js';
import { formatMatrix4x4Text } from './math/se3.js';
import { formatMatrix2x2Text } from './math/planar2dof.js';
import { formatMatrix2x3Text, formatMatrix3x3Text } from './math/nullspace.js';

export class UIController {
  /**
   * @param {Object} options 
   * @param {Function} options.onModeChange
   * @param {Function} options.onParameterChange
   * @param {Function} options.onPlayStateChange
   * @param {Function} options.onResetTime
   * @param {Function} options.onResetCamera
   */
  constructor(options) {
    this.options = options;
    this.mode = 'SE3';
    this.isPlaying = false;

    // DOM Elements
    this.tabButtons = document.querySelectorAll('.tab-btn');
    this.headerSubtitle = document.getElementById('header-subtitle');
    this.viewportTitleText = document.getElementById('viewport-title-text');

    this.sliderT = document.getElementById('slider-t');
    this.sliderWx = document.getElementById('slider-wx');
    this.sliderWy = document.getElementById('slider-wy');
    this.sliderWz = document.getElementById('slider-wz');

    this.sliderVx = document.getElementById('slider-vx');
    this.sliderVy = document.getElementById('slider-vy');
    this.sliderVz = document.getElementById('slider-vz');

    this.valT = document.getElementById('val-t');
    this.valWx = document.getElementById('val-wx');
    this.valWy = document.getElementById('val-wy');
    this.valWz = document.getElementById('val-wz');

    this.valVx = document.getElementById('val-vx');
    this.valVy = document.getElementById('val-vy');
    this.valVz = document.getElementById('val-vz');

    this.sec1Title = document.getElementById('sec1-title');
    this.sec2Title = document.getElementById('sec2-title');

    this.labelWx = document.getElementById('label-wx');
    this.labelWy = document.getElementById('label-wy');
    this.labelWz = document.getElementById('label-wz');
    this.labelVx = document.getElementById('label-vx');
    this.labelVy = document.getElementById('label-vy');
    this.labelVz = document.getElementById('label-vz');

    this.rowWz = document.getElementById('row-wz');
    this.rowVx = document.getElementById('row-vx');
    this.rowVy = document.getElementById('row-vy');
    this.rowVz = document.getElementById('row-vz');

    this.btnPlay = document.getElementById('btn-play');
    this.btnReset = document.getElementById('btn-reset');
    this.btnRecenter = document.getElementById('btn-recenter');
    this.playText = document.getElementById('play-text');
    this.playIcon = document.getElementById('play-icon');

    this.presetsContainer = document.getElementById('presets-container');

    this.ikMethodContainer = document.getElementById('ik-method-container');
    this.selectIkMethod = document.getElementById('select-ik-method');

    this.outM1 = document.getElementById('out-m1');
    this.outM2 = document.getElementById('out-m2');
    this.outM3 = document.getElementById('out-m3');
    this.outM4 = document.getElementById('out-m4');

    this.titleM1 = document.getElementById('title-m1');
    this.titleM2 = document.getElementById('title-m2');
    this.titleM3 = document.getElementById('title-m3');
    this.titleM4 = document.getElementById('title-m4');

    this.formulaM1 = document.getElementById('formula-m1');
    this.formulaM2 = document.getElementById('formula-m2');
    this.formulaM3 = document.getElementById('formula-m3');
    this.formulaM4 = document.getElementById('formula-m4');

    this.overlayTime = document.getElementById('overlay-time');
    this.overlayStep = document.getElementById('overlay-step');
    this.overlayOrigin = document.getElementById('overlay-origin');
    this.chipPos = document.getElementById('chip-pos');
    this.chipSingular = document.getElementById('chip-singular');

    this.initKaTeX();
    this.attachEventListeners();
    this.setupHashRouting();
  }

  initKaTeX() {
    document.querySelectorAll('.katex-formula').forEach((el) => {
      const formula = el.getAttribute('data-formula');
      if (formula) {
        katex.render(formula, el, { displayMode: false, throwOnError: false });
      }
    });

    document.querySelectorAll('.katex-block').forEach((el) => {
      const formula = el.getAttribute('data-formula');
      if (formula) {
        katex.render(formula, el, { displayMode: true, throwOnError: false });
      }
    });
  }

  setupHashRouting() {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      let targetMode = 'SE3';
      if (hash.includes('ik')) {
        targetMode = 'IK';
      } else if (hash.includes('null')) {
        targetMode = 'NULLSPACE';
      } else if (hash.includes('so3')) {
        targetMode = 'SO3';
      } else if (hash.includes('jacobian') || hash.includes('planar') || hash.includes('2dof')) {
        targetMode = 'PLANAR2DOF';
      }

      this.tabButtons.forEach((btn) => {
        const mode = btn.getAttribute('data-mode');
        if (mode === targetMode) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      if (this.mode !== targetMode) {
        this.switchMode(targetMode);
      }
    };

    window.addEventListener('hashchange', handleHash);
    // Initial check on page load
    handleHash();
  }

  attachEventListeners() {
    const updateHandler = () => {
      this.syncSliderLabels();
      this.options.onParameterChange(this.getParams());
    };

    [
      this.sliderT,
      this.sliderWx, this.sliderWy, this.sliderWz,
      this.sliderVx, this.sliderVy, this.sliderVz
    ].forEach((input) => {
      input.addEventListener('input', updateHandler);
    });

    this.selectIkMethod.addEventListener('change', updateHandler);

    this.btnPlay.addEventListener('click', () => {
      this.isPlaying = !this.isPlaying;
      this.updatePlayButtonUI();
      this.options.onPlayStateChange(this.isPlaying);
    });

    this.btnReset.addEventListener('click', () => {
      this.setTimeStep(0);
      this.options.onResetTime();
    });

    this.btnRecenter.addEventListener('click', () => {
      this.options.onResetCamera();
    });
  }

  switchMode(mode) {
    this.mode = mode;
    this.renderPresets();

    if (mode === 'IK') {
      this.viewportTitleText.textContent = '3D Numerical IK Solvers Viewport';
      katex.render('\\text{Numerical Inverse Kinematics Solvers for 3-DOF Arm}', this.headerSubtitle, { throwOnError: false });

      document.querySelector('.transport-bar').style.display = 'flex';
      this.sliderT.closest('.slider-row').style.display = 'flex';
      this.ikMethodContainer.style.display = 'block';

      this.sec1Title.textContent = 'Target Position p_ref (m)';
      this.sec1Title.style.color = 'var(--accent-gold)';

      this.sec2Title.style.display = 'none';

      this.labelWx.innerHTML = `<span class="legend-x">●</span> Target X (x<sub>ref</sub>)`;
      this.labelWy.innerHTML = `<span class="legend-y">●</span> Target Y (y<sub>ref</sub>)`;
      this.labelWz.innerHTML = `<span class="legend-z">●</span> Target Z (z<sub>ref</sub>)`;

      this.rowWz.style.display = 'flex';
      this.rowVx.style.display = 'none';
      this.rowVy.style.display = 'none';
      this.rowVz.style.display = 'none';

      this.chipPos.style.display = 'none';
      this.chipSingular.style.display = 'none';

      // Set ranges for IK sliders
      this.sliderT.max = 100; this.sliderT.value = 0;
      this.sliderWx.min = -2.5; this.sliderWx.max = 2.5; this.sliderWx.step = 0.1; this.sliderWx.value = 1.2;
      this.sliderWy.min = -2.5; this.sliderWy.max = 2.5; this.sliderWy.step = 0.1; this.sliderWy.value = -0.2;
      this.sliderWz.min = 0.0; this.sliderWz.max = 3.0; this.sliderWz.step = 0.1; this.sliderWz.value = 1.5;

      this.titleM1.textContent = '1. Solver Iteration & Error';
      this.titleM2.textContent = '2. Jacobian Matrix J(q)';
      this.titleM3.textContent = '3. Determinant det(J)';
      this.titleM4.textContent = '4. Joint Angles (q)';

      katex.render('\\mathbf{e} = \\mathbf{p}_{\\text{ref}} - \\mathbf{p}_k', this.formulaM1, { throwOnError: false });
      katex.render('J(\\mathbf{q}) \\in \\mathbb{R}^{3 \\times 3}', this.formulaM2, { throwOnError: false });
      katex.render('\\text{det}(J) = \\text{det3x3}(J)', this.formulaM3, { throwOnError: false });
      katex.render('\\mathbf{q} = [q_1, q_2, q_3]^T', this.formulaM4, { throwOnError: false });

    } else if (mode === 'NULLSPACE') {
      this.ikMethodContainer.style.display = 'none';
      this.sliderT.max = 500;
      this.viewportTitleText.textContent = '3-DOF Null-Space Motion & Self-Reconfiguration Viewport';
      katex.render('\\text{Null-Space Projection \\& Self-Motion Kinematics } N = I - J^\\dagger J', this.headerSubtitle, { throwOnError: false });

      document.querySelector('.transport-bar').style.display = 'flex';
      this.sliderT.closest('.slider-row').style.display = 'flex';

      this.sec1Title.textContent = 'Initial Joint Angles q (deg)';
      this.sec1Title.style.color = 'var(--accent-gold)';

      this.sec2Title.textContent = 'Internal Joint Velocity Drive q0_dot (rad/s)';
      this.sec2Title.style.color = 'var(--accent-cyan)';
      this.sec2Title.style.display = 'block';

      this.labelWx.innerHTML = `<span class="legend-x">●</span> Joint 1 (q<sub>1</sub>)`;
      this.labelWy.innerHTML = `<span class="legend-y">●</span> Joint 2 (q<sub>2</sub>)`;
      this.labelWz.innerHTML = `<span class="legend-z">●</span> Joint 3 (q<sub>3</sub>)`;

      this.labelVx.innerHTML = `<span class="legend-x">●</span> Drive 1 (y<sub>1</sub>)`;
      this.labelVy.innerHTML = `<span class="legend-y">●</span> Drive 2 (y<sub>2</sub>)`;
      this.labelVz.innerHTML = `<span class="legend-z">●</span> Drive 3 (y<sub>3</sub>)`;

      this.rowWz.style.display = 'flex';
      this.rowVx.style.display = 'flex';
      this.rowVy.style.display = 'flex';
      this.rowVz.style.display = 'flex';

      this.chipPos.style.display = 'none';
      this.chipSingular.style.display = 'none';

      // Set ranges for NULLSPACE sliders
      this.sliderWx.min = -180; this.sliderWx.max = 180; this.sliderWx.step = 1; this.sliderWx.value = 45;
      this.sliderWy.min = -180; this.sliderWy.max = 180; this.sliderWy.step = 1; this.sliderWy.value = -90;
      this.sliderWz.min = -180; this.sliderWz.max = 180; this.sliderWz.step = 1; this.sliderWz.value = -45;

      this.sliderVx.min = -5.0; this.sliderVx.max = 5.0; this.sliderVx.step = 0.1; this.sliderVx.value = 0.0;
      this.sliderVy.min = -5.0; this.sliderVy.max = 5.0; this.sliderVy.step = 0.1; this.sliderVy.value = 3.0;
      this.sliderVz.min = -5.0; this.sliderVz.max = 5.0; this.sliderVz.step = 0.1; this.sliderVz.value = 0.0;

      this.titleM1.textContent = '1. Joint State q & Null Drive';
      this.titleM2.textContent = '2. Jacobian Matrix J(q)';
      this.titleM3.textContent = '3. Null-Space Projector (N)';
      this.titleM4.textContent = '4. Null Velocity & End-Effector Speed';

      katex.render('\\mathbf{q} = [q_1, q_2, q_3]^T', this.formulaM1, { throwOnError: false });
      katex.render('J(\\mathbf{q}) \\in \\mathbb{R}^{2 \\times 3}', this.formulaM2, { throwOnError: false });
      katex.render('N = I - J^\\dagger J', this.formulaM3, { throwOnError: false });
      katex.render('\\dot{\\mathbf{q}}_{\\text{null}} = N \\dot{\\mathbf{q}}_0 \\implies \\mathbf{v} = \\mathbf{0}', this.formulaM4, { throwOnError: false });

    } else if (mode === 'PLANAR2DOF') {
      this.ikMethodContainer.style.display = 'none';
      this.sliderT.max = 500;
      this.viewportTitleText.textContent = 'Jacobian Matrix & 2-DOF Planar Viewport';
      katex.render('\\text{2-DOF Planar Arm Jacobian Matrix } J(\\mathbf{q})', this.headerSubtitle, { throwOnError: false });

      // Hide animation transport and time step slider for instantaneous analysis
      document.querySelector('.transport-bar').style.display = 'none';
      this.sliderT.closest('.slider-row').style.display = 'none';

      this.sec1Title.textContent = 'Joint Position Angles q (deg)';
      this.sec1Title.style.color = 'var(--accent-gold)';

      this.sec2Title.textContent = 'Joint Angular Velocities q_dot (rad/s)';
      this.sec2Title.style.color = 'var(--accent-cyan)';
      this.sec2Title.style.display = 'block';

      this.labelWx.innerHTML = `<span class="legend-x">●</span> Theta 1 (&theta;<sub>1</sub>)`;
      this.labelWy.innerHTML = `<span class="legend-y">●</span> Theta 2 (&theta;<sub>2</sub>)`;

      this.labelVx.innerHTML = `<span class="legend-x">●</span> dTheta 1 (d&theta;<sub>1</sub>)`;
      this.labelVy.innerHTML = `<span class="legend-y">●</span> dTheta 2 (d&theta;<sub>2</sub>)`;

      this.rowWz.style.display = 'none';
      this.rowVx.style.display = 'flex';
      this.rowVy.style.display = 'flex';
      this.rowVz.style.display = 'none';

      this.chipPos.style.display = 'none';

      // Set ranges for Planar 2DOF sliders
      this.sliderWx.min = -180; this.sliderWx.max = 180; this.sliderWx.step = 1; this.sliderWx.value = 30;
      this.sliderWy.min = -180; this.sliderWy.max = 180; this.sliderWy.step = 1; this.sliderWy.value = 45;

      this.sliderVx.min = -2.0; this.sliderVx.max = 2.0; this.sliderVx.step = 0.1; this.sliderVx.value = 0.0;
      this.sliderVy.min = -2.0; this.sliderVy.max = 2.0; this.sliderVy.step = 0.1; this.sliderVy.value = 1.0;

      this.titleM1.textContent = '1. Joint State q & q_dot';
      this.titleM2.textContent = '2. Jacobian Matrix J(q)';
      this.titleM3.textContent = '3. Determinant det(J)';
      this.titleM4.textContent = '4. End-Effector Velocity v';

      katex.render('\\mathbf{q} = [\\theta_1, \\theta_2]^T', this.formulaM1, { throwOnError: false });
      katex.render('J(\\mathbf{q}) = \\partial f / \\partial \\mathbf{q}', this.formulaM2, { throwOnError: false });
      katex.render('\\text{det}(J) = L_1 L_2 \\sin\\theta_2', this.formulaM3, { throwOnError: false });
      katex.render('\\mathbf{v} = J(\\mathbf{q}) \\dot{\\mathbf{q}}', this.formulaM4, { throwOnError: false });

    } else if (mode === 'SE3') {
      this.ikMethodContainer.style.display = 'none';
      this.sliderT.max = 500;
      this.viewportTitleText.textContent = 'SE(3) 3D Pose & Twist Viewport';
      katex.render('\\text{SE}(3) \\text{ Rigid Body Pose \\& Twist Kinematics}', this.headerSubtitle, { throwOnError: false });

      document.querySelector('.transport-bar').style.display = 'flex';
      this.sliderT.closest('.slider-row').style.display = 'flex';

      this.sec1Title.textContent = 'Angular Velocity \u03C9 (rad/s)';
      this.sec1Title.style.color = 'var(--accent-gold)';

      this.sec2Title.textContent = 'Linear Velocity v (m/s)';
      this.sec2Title.style.color = 'var(--accent-cyan)';
      this.sec2Title.style.display = 'block';

      this.labelWx.innerHTML = `<span class="legend-x">●</span> Omega X (&omega;<sub>x</sub>)`;
      this.labelWy.innerHTML = `<span class="legend-y">●</span> Omega Y (&omega;<sub>y</sub>)`;
      this.labelWz.innerHTML = `<span class="legend-z">●</span> Omega Z (&omega;<sub>z</sub>)`;

      this.labelVx.innerHTML = `<span class="legend-x">●</span> Vel X (v<sub>x</sub>)`;
      this.labelVy.innerHTML = `<span class="legend-y">●</span> Vel Y (v<sub>y</sub>)`;
      this.labelVz.innerHTML = `<span class="legend-z">●</span> Vel Z (v<sub>z</sub>)`;

      this.rowWz.style.display = 'flex';
      this.rowVx.style.display = 'flex';
      this.rowVy.style.display = 'flex';
      this.rowVz.style.display = 'flex';
      this.chipPos.style.display = 'block';
      this.chipSingular.style.display = 'none';

      // Set ranges for SE3 sliders
      this.sliderWx.min = -3.0; this.sliderWx.max = 3.0; this.sliderWx.step = 0.1; this.sliderWx.value = 0.0;
      this.sliderWy.min = -3.0; this.sliderWy.max = 3.0; this.sliderWy.step = 0.1; this.sliderWy.value = 0.0;
      this.sliderWz.min = -3.0; this.sliderWz.max = 3.0; this.sliderWz.step = 0.1; this.sliderWz.value = 1.0;

      this.sliderVx.min = -3.0; this.sliderVx.max = 3.0; this.sliderVx.step = 0.1; this.sliderVx.value = 1.0;
      this.sliderVy.min = -3.0; this.sliderVy.max = 3.0; this.sliderVy.step = 0.1; this.sliderVy.value = 0.0;
      this.sliderVz.min = -3.0; this.sliderVz.max = 3.0; this.sliderVz.step = 0.1; this.sliderVz.value = 0.0;

      this.titleM1.textContent = '1. Pose Matrix (H)';
      this.titleM2.textContent = '2. Rate of Change (\u0307H)';
      this.titleM3.textContent = '3. Local se(3) Twist (H\u207B\u00B9 \u0307H)';
      this.titleM4.textContent = '4. Global se(3) Twist (\u0307H H\u207B\u00B9)';

      katex.render('H(t) = \\exp(\\mathcal{S} t)', this.formulaM1, { throwOnError: false });
      katex.render('\\dot{H} = H \\mathcal{S}_{\\text{local}}', this.formulaM2, { throwOnError: false });
      katex.render('\\mathcal{S}_{\\text{local}} = H^{-1} \\dot{H}', this.formulaM3, { throwOnError: false });
      katex.render('\\mathcal{S}_{\\text{global}} = \\dot{H} H^{-1}', this.formulaM4, { throwOnError: false });

    } else { // SO3
      this.ikMethodContainer.style.display = 'none';
      this.sliderT.max = 500;
      this.viewportTitleText.textContent = 'SO(3) 3D Kinematics Viewport';
      katex.render('\\text{SO}(3) \\text{ Lie Algebra \\& 3D Rotation Kinematics}', this.headerSubtitle, { throwOnError: false });

      document.querySelector('.transport-bar').style.display = 'flex';
      this.sliderT.closest('.slider-row').style.display = 'flex';

      this.sec1Title.textContent = 'Angular Velocity \u03C9 (rad/s)';
      this.sec1Title.style.color = 'var(--accent-gold)';

      this.sec2Title.style.display = 'none';

      this.labelWx.innerHTML = `<span class="legend-x">●</span> Omega X (&omega;<sub>x</sub>)`;
      this.labelWy.innerHTML = `<span class="legend-y">●</span> Omega Y (&omega;<sub>y</sub>)`;
      this.labelWz.innerHTML = `<span class="legend-z">●</span> Omega Z (&omega;<sub>z</sub>)`;

      this.rowWz.style.display = 'flex';
      this.rowVx.style.display = 'none';
      this.rowVy.style.display = 'none';
      this.rowVz.style.display = 'none';
      this.chipPos.style.display = 'none';
      this.chipSingular.style.display = 'none';

      // Set ranges for SO3 sliders
      this.sliderWx.min = -3.0; this.sliderWx.max = 3.0; this.sliderWx.step = 0.1; this.sliderWx.value = 1.0;
      this.sliderWy.min = -3.0; this.sliderWy.max = 3.0; this.sliderWy.step = 0.1; this.sliderWy.value = 0.0;
      this.sliderWz.min = -3.0; this.sliderWz.max = 3.0; this.sliderWz.step = 0.1; this.sliderWz.value = 0.0;

      this.titleM1.textContent = '1. Rotation Matrix (R)';
      this.titleM2.textContent = '2. Rate of Change (\u0307R)';
      this.titleM3.textContent = '3. Spatial Velocity [\u03C9]\u2093';
      this.titleM4.textContent = '4. Body Velocity [\u03C9\u0302]\u2093';

      katex.render('R(t) = \\exp([\\boldsymbol{\\omega}]_\\times t)', this.formulaM1, { throwOnError: false });
      katex.render('\\dot{R} = [\\boldsymbol{\\omega}]_\\times R', this.formulaM2, { throwOnError: false });
      katex.render('[\\boldsymbol{\\omega}]_\\times = \\dot{R} R^T', this.formulaM3, { throwOnError: false });
      katex.render('[\\hat{\\boldsymbol{\\omega}}]_\\times = R^T \\dot{R}', this.formulaM4, { throwOnError: false });
    }

    this.syncSliderLabels();
    this.options.onModeChange(mode);
    this.options.onParameterChange(this.getParams());
  }

  renderPresets() {
    let presets = [];
    if (this.mode === 'IK') {
      presets = [
        { name: 'Reachable (1.2, -0.2, 1.5)', wx: 1.2, wy: -0.2, wz: 1.5 },
        { name: 'High Reach (0.5, 0.5, 2.2)', wx: 0.5, wy: 0.5, wz: 2.2 },
        { name: 'Near Singularity (0.0, 0.0, 2.8)', wx: 0.0, wy: 0.0, wz: 2.8 },
        { name: 'Out of Reach (2.5, 2.5, 3.0)', wx: 2.5, wy: 2.5, wz: 3.0 }
      ];
    } else if (this.mode === 'NULLSPACE') {
      presets = [
        { name: 'Joint 2 Drive (y=[0, 3, 0])', wx: 45, wy: -90, wz: -45, vx: 0.0, vy: 3.0, vz: 0.0 },
        { name: 'Joint 1 Drive (y=[3, 0, 0])', wx: 45, wy: -90, wz: -45, vx: 3.0, vy: 0.0, vz: 0.0 },
        { name: 'Joint 3 Drive (y=[0, 0, 3])', wx: 45, wy: -90, wz: -45, vx: 0.0, vy: 0.0, vz: 3.0 },
        { name: 'Symmetric Drive (y=[2, -4, 2])', wx: 30, wy: -60, wz: -30, vx: 2.0, vy: -4.0, vz: 2.0 }
      ];
    } else if (this.mode === 'PLANAR2DOF') {
      presets = [
        { name: 'Default Pose', t1: 30, t2: 45, dt1: 0.0, dt2: 1.0 },
        { name: 'Fully Extended (Singular)', t1: 0, t2: 0, dt1: 0.5, dt2: 0.0 },
        { name: 'Folded Back (Singular)', t1: 45, t2: 180, dt1: 0.0, dt2: 0.5 },
        { name: 'Right-Angle Elbow', t1: 0, t2: 90, dt1: 1.0, dt2: -1.0 },
        { name: 'Dual Joint Drive', t1: -45, t2: 60, dt1: 1.0, dt2: 1.5 }
      ];
    } else if (this.mode === 'SE3') {
      presets = [
        { name: 'Forward Screw', wx: 0.0, wy: 0.0, wz: 1.0, vx: 1.0, vy: 0.0, vz: 0.0 },
        { name: 'Helical Ascent', wx: 0.0, wy: 0.0, wz: 1.5, vx: 0.5, vy: 0.0, vz: 1.0 },
        { name: 'Pure Linear', wx: 0.0, wy: 0.0, wz: 0.0, vx: 1.5, vy: 0.0, vz: 0.0 },
        { name: '3D Spiral Drive', wx: 0.5, wy: 1.0, wz: 1.5, vx: 1.0, vy: 0.5, vz: 1.0 },
        { name: 'Static (Zero)', wx: 0.0, wy: 0.0, wz: 0.0, vx: 0.0, vy: 0.0, vz: 0.0 }
      ];
    } else {
      presets = [
        { name: 'Pure X Roll', wx: 1.0, wy: 0.0, wz: 0.0, vx: 0, vy: 0, vz: 0 },
        { name: 'Pure Y Pitch', wx: 0.0, wy: 1.0, wz: 0.0, vx: 0, vy: 0, vz: 0 },
        { name: 'Pure Z Yaw', wx: 0.0, wy: 0.0, wz: 1.0, vx: 0, vy: 0, vz: 0 },
        { name: 'Coupled Precession', wx: 1.0, wy: 1.5, wz: 2.0, vx: 0, vy: 0, vz: 0 },
        { name: 'Static (Zero)', wx: 0.0, wy: 0.0, wz: 0.0, vx: 0, vy: 0, vz: 0 }
      ];
    }

    this.presetsContainer.innerHTML = '';
    presets.forEach((p, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn btn-preset ${idx === 0 ? 'active' : ''}`;
      btn.textContent = p.name;
      btn.addEventListener('click', () => {
        this.presetsContainer.querySelectorAll('.btn-preset').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        if (this.mode === 'IK') {
          this.sliderWx.value = p.wx;
          this.sliderWy.value = p.wy;
          this.sliderWz.value = p.wz;
        } else if (this.mode === 'NULLSPACE') {
          this.sliderWx.value = p.wx;
          this.sliderWy.value = p.wy;
          this.sliderWz.value = p.wz;
          this.sliderVx.value = p.vx;
          this.sliderVy.value = p.vy;
          this.sliderVz.value = p.vz;
        } else if (this.mode === 'PLANAR2DOF') {
          this.sliderWx.value = p.t1;
          this.sliderWy.value = p.t2;
          this.sliderVx.value = p.dt1;
          this.sliderVy.value = p.dt2;
        } else {
          this.sliderWx.value = p.wx;
          this.sliderWy.value = p.wy;
          this.sliderWz.value = p.wz;
          this.sliderVx.value = p.vx;
          this.sliderVy.value = p.vy;
          this.sliderVz.value = p.vz;
        }

        this.syncSliderLabels();
        this.options.onParameterChange(this.getParams());
      });
      this.presetsContainer.appendChild(btn);
    });
  }

  syncSliderLabels() {
    this.valT.textContent = this.sliderT.value;

    if (this.mode === 'IK') {
      this.valWx.textContent = `${parseFloat(this.sliderWx.value).toFixed(2)} m`;
      this.valWy.textContent = `${parseFloat(this.sliderWy.value).toFixed(2)} m`;
      this.valWz.textContent = `${parseFloat(this.sliderWz.value).toFixed(2)} m`;
    } else if (this.mode === 'NULLSPACE') {
      this.valWx.textContent = `${parseInt(this.sliderWx.value, 10)}°`;
      this.valWy.textContent = `${parseInt(this.sliderWy.value, 10)}°`;
      this.valWz.textContent = `${parseInt(this.sliderWz.value, 10)}°`;

      this.valVx.textContent = `${parseFloat(this.sliderVx.value).toFixed(1)} rad/s`;
      this.valVy.textContent = `${parseFloat(this.sliderVy.value).toFixed(1)} rad/s`;
      this.valVz.textContent = `${parseFloat(this.sliderVz.value).toFixed(1)} rad/s`;
    } else if (this.mode === 'PLANAR2DOF') {
      this.valWx.textContent = `${parseInt(this.sliderWx.value, 10)}°`;
      this.valWy.textContent = `${parseInt(this.sliderWy.value, 10)}°`;
      this.valVx.textContent = `${parseFloat(this.sliderVx.value).toFixed(2)} rad/s`;
      this.valVy.textContent = `${parseFloat(this.sliderVy.value).toFixed(2)} rad/s`;
    } else {
      this.valWx.textContent = `${parseFloat(this.sliderWx.value).toFixed(1)} rad/s`;
      this.valWy.textContent = `${parseFloat(this.sliderWy.value).toFixed(1)} rad/s`;
      this.valWz.textContent = `${parseFloat(this.sliderWz.value).toFixed(1)} rad/s`;

      this.valVx.textContent = `${parseFloat(this.sliderVx.value).toFixed(1)} m/s`;
      this.valVy.textContent = `${parseFloat(this.sliderVy.value).toFixed(1)} m/s`;
      this.valVz.textContent = `${parseFloat(this.sliderVz.value).toFixed(1)} m/s`;
    }
  }

  updatePlayButtonUI() {
    if (this.isPlaying) {
      this.playText.textContent = 'Pause';
      this.playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
      this.btnPlay.classList.add('active');
    } else {
      this.playText.textContent = 'Play';
      this.playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
      this.btnPlay.classList.remove('active');
    }
  }

  getParams() {
    return {
      tStep: parseInt(this.sliderT.value, 10),
      ikMethod: this.selectIkMethod ? this.selectIkMethod.value : 'Newton-Raphson',
      wx: parseFloat(this.sliderWx.value),
      wy: parseFloat(this.sliderWy.value),
      wz: parseFloat(this.sliderWz.value),
      vx: parseFloat(this.sliderVx.value),
      vy: parseFloat(this.sliderVy.value),
      vz: parseFloat(this.sliderVz.value)
    };
  }

  setTimeStep(val) {
    this.sliderT.value = val;
    this.valT.textContent = val;
  }

  /**
   * Render state output matching active demo mode
   */
  renderState(state) {
    this.overlayTime.textContent = state.t ? state.t.toFixed(2) : (parseInt(this.sliderT.value, 10) * 0.05).toFixed(2);
    this.overlayStep.textContent = this.sliderT.value;

    if (this.mode === 'IK') {
      const { p_ref, currentIter, maxIter, errorNorm, p_k, J, det_J, q_deg, status, isFailed } = state;

      this.chipSingular.style.display = isFailed ? 'block' : 'none';
      if (isFailed) {
        this.chipSingular.textContent = '⚠️ SOLVER STUCK / SINGULAR';
      }

      this.outM1.textContent =
        `Iteration Step: ${currentIter} / ${maxIter}\n` +
        `Target p_ref: [${p_ref[0].toFixed(2)}, ${p_ref[1].toFixed(2)}, ${p_ref[2].toFixed(2)}]\n` +
        `Current p_k:  [${p_k[0].toFixed(2)}, ${p_k[1].toFixed(2)}, ${p_k[2].toFixed(2)}]\n` +
        `Error Norm:   ${errorNorm.toFixed(4)}`;

      this.outM2.textContent = formatMatrix3x3Text(J);

      this.outM3.textContent =
        `det(J(q)): ${det_J.toFixed(5)}\n\n` +
        `Status:\n${status}`;

      this.outM4.textContent =
        `Joint Angles (q):\n` +
        `  q1 (Yaw):   ${q_deg[0].toFixed(1)}°\n` +
        `  q2 (Pitch): ${q_deg[1].toFixed(1)}°\n` +
        `  q3 (Elbow): ${q_deg[2].toFixed(1)}°`;

    } else if (this.mode === 'NULLSPACE') {
      const { q_deg, q0_dot, q_dot, J, N, v, endEffectorSpeed } = state;

      this.outM1.textContent =
        `Joint Angles (q):   [${q_deg[0].toFixed(1)}°, ${q_deg[1].toFixed(1)}°, ${q_deg[2].toFixed(1)}°]\n` +
        `Internal Drive (y): [${q0_dot[0].toFixed(1)}, ${q0_dot[1].toFixed(1)}, ${q0_dot[2].toFixed(1)}] rad/s`;

      this.outM2.textContent = formatMatrix2x3Text(J);
      this.outM3.textContent = formatMatrix3x3Text(N);

      this.outM4.textContent =
        `q_dot_null = [${q_dot[0].toFixed(3)}, ${q_dot[1].toFixed(3)}, ${q_dot[2].toFixed(3)}]\n` +
        `v = J @ q_dot = [${v[0].toFixed(4)}, ${v[1].toFixed(4)}]\n` +
        `Speed = ${endEffectorSpeed.toFixed(4)} m/s (FROZEN!)`;

    } else if (this.mode === 'PLANAR2DOF') {
      const { theta1_deg, theta2_deg, dtheta1, dtheta2, J, det_J, isSingular, v, j2 } = state;

      if (isSingular) {
        this.chipSingular.style.display = 'block';
      } else {
        this.chipSingular.style.display = 'none';
      }

      this.outM1.textContent =
        `Joint Angles (q):   [${theta1_deg}°, ${theta2_deg}°]\n` +
        `Joint Vels (q_dot): [${dtheta1.toFixed(2)}, ${dtheta2.toFixed(2)}] rad/s\n` +
        `End-Effector (p_E): [${j2[0].toFixed(2)}, ${j2[1].toFixed(2)}] m`;

      this.outM2.textContent = formatMatrix2x2Text(J);

      this.outM3.textContent =
        `det(J(q)): ${det_J.toFixed(3)}\n` +
        `Status: ${isSingular ? '⚠️ SINGULAR CONFIG' : 'Normal Configuration'}`;

      this.outM4.textContent =
        `v_x = ${v[0].toFixed(3)} m/s\n` +
        `v_y = ${v[1].toFixed(3)} m/s\n` +
        `Speed = ${state.speed.toFixed(3)} m/s`;

    } else if (this.mode === 'SE3') {
      const [ox, oy, oz] = state.origin;
      this.overlayOrigin.textContent = `[${ox.toFixed(2)}, ${oy.toFixed(2)}, ${oz.toFixed(2)}]`;

      this.outM1.textContent = formatMatrix4x4Text(state.H);
      this.outM2.textContent = formatMatrix4x4Text(state.H_dot);
      this.outM3.textContent = formatMatrix4x4Text(state.se3_local);
      this.outM4.textContent = formatMatrix4x4Text(state.se3_global);
    } else { // SO3
      this.outM1.textContent = formatMatrixText(state.R);
      this.outM2.textContent = formatMatrixText(state.R_dot);
      this.outM3.textContent = formatMatrixText(state.w_cross);
      this.outM4.textContent = formatMatrixText(state.w_hat_cross);
    }
  }
}
