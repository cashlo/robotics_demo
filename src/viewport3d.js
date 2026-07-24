import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Viewport3D {
  /**
   * @param {HTMLElement} container 
   */
  constructor(container) {
    this.container = container;
    this.mode = 'SE3'; // 'SE3', 'SO3', or 'PLANAR2DOF'

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0e14);

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 0, 5.5); // Top-down / 2D perspective default for planar

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.target.set(0, 0, 0);

    // Lighting
    this.setupLighting();

    // Scene Grid & Floor
    this.setupEnvironment();

    // Visual Elements for SO(3) & SE(3)
    this.setupGlobalAxes();
    this.setupLocalAxes();
    this.setupVelocityVectors();
    this.setupRigidBody();
    this.setupPositionLine();
    this.setupTrajectoryTrail();

    // Visual Elements for 2-DOF Planar Manipulator, 3-DOF Null-Space Motion & 3-DOF Spatial IK Arm
    this.setupPlanarManipulator();
    this.setupNullSpaceManipulator();
    this.setupIKManipulator();

    // Resize Handler
    this.onWindowResize = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.onWindowResize);

    // Initial render
    this.render();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    this.scene.add(dirLight);

    const bluePointLight = new THREE.PointLight(0x00d2ff, 1.2, 15);
    bluePointLight.position.set(-5, -3, 5);
    this.scene.add(bluePointLight);
  }

  setupEnvironment() {
    this.grid = new THREE.GridHelper(10, 20, 0x1f293d, 0x131a29);
    this.grid.position.z = -0.05;
    this.grid.rotation.x = Math.PI / 2; // Flat on XY plane for 2D/3D planar
    this.scene.add(this.grid);
  }

  setupGlobalAxes() {
    this.globalAxesGroup = new THREE.Group();
    const origin = new THREE.Vector3(0, 0, 0);
    const length = 1.5;

    const xAxis = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, length, 0xff4757, 0.2, 0.1);
    const yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, length, 0x2ed573, 0.2, 0.1);
    const zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, length, 0x1e90ff, 0.2, 0.1);

    [xAxis, yAxis, zAxis].forEach((axis) => {
      axis.line.material.transparent = true;
      axis.line.material.opacity = 0.35;
      axis.cone.material.transparent = true;
      axis.cone.material.opacity = 0.35;
    });

    this.globalAxesGroup.add(xAxis, yAxis, zAxis);
    this.scene.add(this.globalAxesGroup);
  }

  setupLocalAxes() {
    this.localAxesGroup = new THREE.Group();

    const origin = new THREE.Vector3(0, 0, 0);
    const length = 1.2;

    this.localX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, length, 0xff4757, 0.2, 0.1);
    this.localY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, length, 0x2ed573, 0.2, 0.1);
    this.localZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, length, 0x1e90ff, 0.2, 0.1);

    this.localAxesGroup.add(this.localX, this.localY, this.localZ);
    this.scene.add(this.localAxesGroup);
  }

  setupVelocityVectors() {
    // Angular Velocity w arrow (Gold)
    this.omegaArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      1,
      0xffd700,
      0.18,
      0.09
    );
    this.omegaArrow.visible = false;
    this.scene.add(this.omegaArrow);

    // Linear Velocity v arrow (Cyan)
    this.velArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      1,
      0x00f2fe,
      0.18,
      0.09
    );
    this.velArrow.visible = false;
    this.scene.add(this.velArrow);
  }

  setupRigidBody() {
    const geometry = new THREE.BoxGeometry(0.8, 0.5, 1.2);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.85,
      thickness: 0.5,
      transparent: true,
      opacity: 0.45
    });
    this.rigidBodyMesh = new THREE.Mesh(geometry, material);

    const edges = new THREE.EdgesGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00f2fe, linewidth: 2 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    this.rigidBodyMesh.add(wireframe);

    this.scene.add(this.rigidBodyMesh);
  }

  setupPositionLine() {
    const geom = new THREE.BufferGeometry();
    const mat = new THREE.LineDashedMaterial({
      color: 0x94a3b8,
      dashSize: 0.15,
      gapSize: 0.1,
      transparent: true,
      opacity: 0.6
    });
    this.positionLine = new THREE.Line(geom, mat);
    this.positionLine.visible = false;
    this.scene.add(this.positionLine);
  }

  setupTrajectoryTrail() {
    this.trailPoints = [];
    this.maxTrailLength = 500;
    const trailGeometry = new THREE.BufferGeometry();
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85
    });
    this.trailLine = new THREE.Line(trailGeometry, trailMaterial);
    this.scene.add(this.trailLine);
  }

  setupPlanarManipulator() {
    this.planarGroup = new THREE.Group();

    // Link 1 Mesh (Thick bright cyan capsule/cylinder)
    const link1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.4
    });
    this.link1Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1, 32), link1Mat);

    // Link 2 Mesh (Thick bright purple capsule/cylinder)
    const link2Mat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.4
    });
    this.link2Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.10, 1, 32), link2Mat);

    // Base Hub (J0)
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.8 });
    this.joint0Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.2, 32), baseMat);
    this.joint0Mesh.rotation.x = Math.PI / 2;

    // Elbow Joint (J1)
    const joint1Mat = new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.7 });
    this.joint1Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 32, 32), joint1Mat);

    // End-Effector Joint (J2)
    const joint2Mat = new THREE.MeshStandardMaterial({ color: 0xff4757, emissive: 0x991b1b, emissiveIntensity: 0.6 });
    this.joint2Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.18, 32, 32), joint2Mat);

    // End-Effector Velocity Vector Arrow (Red)
    this.endVelArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      1,
      0xff4757,
      0.25,
      0.14
    );

    // Workspace Outer Reach Limit Ring (Radius R = L1 + L2 = 2.0)
    const ringGeom = new THREE.RingGeometry(1.98, 2.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    this.workspaceRing = new THREE.Mesh(ringGeom, ringMat);

    this.planarGroup.add(
      this.link1Mesh,
      this.link2Mesh,
      this.joint0Mesh,
      this.joint1Mesh,
      this.joint2Mesh,
      this.endVelArrow,
      this.workspaceRing
    );

    this.planarGroup.visible = false;
    this.scene.add(this.planarGroup);
  }

  setupNullSpaceManipulator() {
    this.nullSpaceGroup = new THREE.Group();

    // Link 1 (Cyan)
    const link1Mat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.4 });
    this.nsLink1Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 1, 32), link1Mat);

    // Link 2 (Purple)
    const link2Mat = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0x7e22ce, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.4 });
    this.nsLink2Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1, 32), link2Mat);

    // Link 3 (Gold)
    const link3Mat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.4 });
    this.nsLink3Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1, 32), link3Mat);

    // Joints (J0, J1, J2, J3)
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.8 });
    this.nsJoint0Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.2, 32), baseMat);
    this.nsJoint0Mesh.rotation.x = Math.PI / 2;

    this.nsJoint1Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 32, 32), new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.7 }));
    this.nsJoint2Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 32), new THREE.MeshStandardMaterial({ color: 0xc084fc, roughness: 0.2, metalness: 0.7 }));
    this.nsJoint3Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff4757, emissive: 0x991b1b, emissiveIntensity: 0.6 }));

    // Stationary End-Effector Lock Target Ring (Green)
    const targetGeom = new THREE.RingGeometry(0.22, 0.26, 32);
    const targetMat = new THREE.MeshBasicMaterial({ color: 0x2ed573, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    this.nsLockRing = new THREE.Mesh(targetGeom, targetMat);

    // Workspace Outer Reach Limit Ring (Radius R = L1 + L2 + L3 = 3.0)
    const ringGeom = new THREE.RingGeometry(2.98, 3.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
    this.nsWorkspaceRing = new THREE.Mesh(ringGeom, ringMat);

    this.nullSpaceGroup.add(
      this.nsLink1Mesh,
      this.nsLink2Mesh,
      this.nsLink3Mesh,
      this.nsJoint0Mesh,
      this.nsJoint1Mesh,
      this.nsJoint2Mesh,
      this.nsJoint3Mesh,
      this.nsLockRing,
      this.nsWorkspaceRing
    );

    this.nullSpaceGroup.visible = false;
    this.scene.add(this.nullSpaceGroup);
  }

  setupIKManipulator() {
    this.ikGroup = new THREE.Group();

    // Base Post (Link 0: (0,0,0) to (0,0,L1))
    const basePostMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.3, metalness: 0.8 });
    this.ikBasePostMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1, 32), basePostMat);

    // Upper Arm (Link 1: Cyan)
    const link1Mat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.5 });
    this.ikLink1Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 32), link1Mat);

    // Forearm (Link 2: Purple)
    const link2Mat = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0x7e22ce, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.5 });
    this.ikLink2Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1, 32), link2Mat);

    // Joints (J0, J1, J2, J3)
    this.ikJoint0Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32), basePostMat);
    this.ikJoint1Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 32, 32), new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.7 }));
    this.ikJoint2Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 32), new THREE.MeshStandardMaterial({ color: 0xc084fc, roughness: 0.2, metalness: 0.7 }));
    this.ikJoint3Mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 32, 32), new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.5 }));

    // Target Marker Star / Sphere (Magenta)
    const targetGeom = new THREE.OctahedronGeometry(0.18, 0);
    const targetMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0xe11d48, emissiveIntensity: 0.8, roughness: 0.1, metalness: 0.8 });
    this.ikTargetMarker = new THREE.Mesh(targetGeom, targetMat);

    // Target Wireframe Ring around Target
    const ringGeom = new THREE.RingGeometry(0.22, 0.26, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    this.ikTargetRing = new THREE.Mesh(ringGeom, ringMat);
    this.ikTargetRing.rotation.x = Math.PI / 2;

    this.ikGroup.add(
      this.ikBasePostMesh,
      this.ikLink1Mesh,
      this.ikLink2Mesh,
      this.ikJoint0Mesh,
      this.ikJoint1Mesh,
      this.ikJoint2Mesh,
      this.ikJoint3Mesh,
      this.ikTargetMarker,
      this.ikTargetRing
    );

    this.ikGroup.visible = false;
    this.scene.add(this.ikGroup);
  }

  setMode(mode) {
    this.mode = mode;
    this.trailPoints = [];
    this.trailLine.geometry.setFromPoints([]);

    if (mode === 'IK') {
      this.rigidBodyMesh.visible = false;
      this.localAxesGroup.visible = false;
      this.globalAxesGroup.visible = true;
      this.positionLine.visible = false;
      this.velArrow.visible = false;
      this.omegaArrow.visible = false;
      this.planarGroup.visible = false;
      this.nullSpaceGroup.visible = false;
      this.ikGroup.visible = true;

      // 3D Spatial perspective
      this.camera.position.set(3.5, 3.5, 3.5);
      this.grid.rotation.x = 0;
      this.grid.position.z = 0;
      this.controls.target.set(0, 0, 1.0);
    } else if (mode === 'NULLSPACE') {
      this.rigidBodyMesh.visible = false;
      this.localAxesGroup.visible = false;
      this.globalAxesGroup.visible = true;
      this.positionLine.visible = false;
      this.velArrow.visible = false;
      this.omegaArrow.visible = false;
      this.planarGroup.visible = false;
      this.nullSpaceGroup.visible = true;
      this.ikGroup.visible = false;

      // 3D/2D perspective for 3-DOF null space arm
      this.camera.position.set(0, 0, 5.8);
      this.grid.rotation.x = Math.PI / 2;
      this.grid.position.z = -0.05;
      this.controls.target.set(0.5, 0.5, 0);
    } else if (mode === 'PLANAR2DOF') {
      this.rigidBodyMesh.visible = false;
      this.localAxesGroup.visible = false;
      this.globalAxesGroup.visible = true;
      this.positionLine.visible = false;
      this.velArrow.visible = false;
      this.omegaArrow.visible = false;
      this.planarGroup.visible = true;
      this.nullSpaceGroup.visible = false;
      this.ikGroup.visible = false;

      // 2D orthographic top-down feel
      this.camera.position.set(0, 0, 4.8);
      this.grid.rotation.x = Math.PI / 2;
      this.grid.position.z = -0.05;
      this.controls.target.set(0, 0, 0);
    } else if (mode === 'SO3') {
      this.rigidBodyMesh.visible = true;
      this.localAxesGroup.visible = true;
      this.globalAxesGroup.visible = true;
      this.positionLine.visible = false;
      this.velArrow.visible = false;
      this.planarGroup.visible = false;
      this.nullSpaceGroup.visible = false;
      this.ikGroup.visible = false;

      this.camera.position.set(3.2, 2.4, 3.8);
      this.grid.rotation.x = 0;
      this.grid.position.y = -1.5;
      this.controls.target.set(0, 0, 0);
    } else { // SE3
      this.rigidBodyMesh.visible = true;
      this.localAxesGroup.visible = true;
      this.globalAxesGroup.visible = true;
      this.positionLine.visible = true;
      this.planarGroup.visible = false;
      this.nullSpaceGroup.visible = false;

      this.camera.position.set(5.5, 4.2, 7.5);
      this.grid.rotation.x = 0;
      this.grid.position.y = -2.5;
      this.controls.target.set(0, 0, 0);
    }
    this.controls.update();
  }

  /**
   * SO(3) Mode Visual Update
   */
  updateSO3(R, w, clearTrail = false) {
    const origin = new THREE.Vector3(0, 0, 0);
    const m = new THREE.Matrix4();
    m.set(
      R[0][0], R[0][1], R[0][2], 0,
      R[1][0], R[1][1], R[1][2], 0,
      R[2][0], R[2][1], R[2][2], 0,
      0,       0,       0,       1
    );

    this.rigidBodyMesh.position.set(0, 0, 0);
    this.rigidBodyMesh.setRotationFromMatrix(m);

    const vX = new THREE.Vector3(R[0][0], R[1][0], R[2][0]);
    const vY = new THREE.Vector3(R[0][1], R[1][1], R[2][1]);
    const vZ = new THREE.Vector3(R[0][2], R[1][2], R[2][2]);

    this.localX.position.copy(origin);
    this.localY.position.copy(origin);
    this.localZ.position.copy(origin);

    this.localX.setDirection(vX.clone().normalize());
    this.localY.setDirection(vY.clone().normalize());
    this.localZ.setDirection(vZ.clone().normalize());

    const wVec = new THREE.Vector3(w[0], w[1], w[2]);
    const wNorm = wVec.length();
    if (wNorm > 1e-4) {
      this.omegaArrow.position.copy(origin);
      this.omegaArrow.setDirection(wVec.clone().normalize());
      this.omegaArrow.setLength(Math.min(wNorm * 0.4 + 0.3, 1.8), 0.18, 0.09);
      this.omegaArrow.visible = true;
    } else {
      this.omegaArrow.visible = false;
    }

    if (clearTrail) this.trailPoints = [];
    this.trailPoints.push(vX.clone());
    if (this.trailPoints.length > this.maxTrailLength) this.trailPoints.shift();
    this.trailLine.geometry.setFromPoints(this.trailPoints);
  }

  /**
   * SE(3) Mode Visual Update
   */
  updateSE3(H, w, v, clearTrail = false) {
    const origin = new THREE.Vector3(H[0][3], H[1][3], H[2][3]);
    const m = new THREE.Matrix4();
    m.set(
      H[0][0], H[0][1], H[0][2], H[0][3],
      H[1][0], H[1][1], H[1][2], H[1][3],
      H[2][0], H[2][1], H[2][2], H[2][3],
      0,       0,       0,       1
    );

    this.rigidBodyMesh.position.copy(origin);
    this.rigidBodyMesh.setRotationFromMatrix(m);

    const vX = new THREE.Vector3(H[0][0], H[1][0], H[2][0]);
    const vY = new THREE.Vector3(H[0][1], H[1][0], H[2][0]);
    const vZ = new THREE.Vector3(H[0][2], H[1][2], H[2][2]);

    this.localX.position.copy(origin);
    this.localY.position.copy(origin);
    this.localZ.position.copy(origin);

    this.localX.setDirection(vX.clone().normalize());
    this.localY.setDirection(vY.clone().normalize());
    this.localZ.setDirection(vZ.clone().normalize());

    const points = [new THREE.Vector3(0, 0, 0), origin];
    this.positionLine.geometry.setFromPoints(points);
    this.positionLine.computeLineDistances();
    this.positionLine.visible = true;

    const wVec = new THREE.Vector3(w[0], w[1], w[2]);
    if (wVec.length() > 1e-4) {
      this.omegaArrow.position.copy(origin);
      this.omegaArrow.setDirection(wVec.clone().normalize());
      this.omegaArrow.setLength(Math.min(wVec.length() * 0.4 + 0.3, 1.8), 0.18, 0.09);
      this.omegaArrow.visible = true;
    } else {
      this.omegaArrow.visible = false;
    }

    const vVec = new THREE.Vector3(v[0], v[1], v[2]);
    if (vVec.length() > 1e-4) {
      this.velArrow.position.copy(origin);
      this.velArrow.setDirection(vVec.clone().normalize());
      this.velArrow.setLength(Math.min(vVec.length() * 0.4 + 0.3, 1.8), 0.18, 0.09);
      this.velArrow.visible = true;
    } else {
      this.velArrow.visible = false;
    }

    if (clearTrail) this.trailPoints = [];
    this.trailPoints.push(origin.clone());
    if (this.trailPoints.length > this.maxTrailLength) this.trailPoints.shift();
    this.trailLine.geometry.setFromPoints(this.trailPoints);
  }

  /**
   * 2-DOF Planar Mode Visual Update
   */
  updatePlanar2DOF(state, clearTrail = false) {
    const { j0, j1, j2, v, speed } = state;

    const p0 = new THREE.Vector3(j0[0], j0[1], 0);
    const p1 = new THREE.Vector3(j1[0], j1[1], 0);
    const p2 = new THREE.Vector3(j2[0], j2[1], 0);

    // Update Link 1 Mesh (Cylinder connecting p0 to p1)
    const dir1 = new THREE.Vector3().subVectors(p1, p0);
    const len1 = dir1.length();
    const mid1 = new THREE.Vector3().addVectors(p0, p1).multiplyScalar(0.5);

    this.link1Mesh.position.copy(mid1);
    this.link1Mesh.scale.set(1, len1, 1);
    this.link1Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir1.clone().normalize());

    // Update Link 2 Mesh (Cylinder connecting p1 to p2)
    const dir2 = new THREE.Vector3().subVectors(p2, p1);
    const len2 = dir2.length();
    const mid2 = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

    this.link2Mesh.position.copy(mid2);
    this.link2Mesh.scale.set(1, len2, 1);
    this.link2Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir2.clone().normalize());

    // Update Joint Positions
    this.joint0Mesh.position.copy(p0);
    this.joint1Mesh.position.copy(p1);
    this.joint2Mesh.position.copy(p2);

    // Update End-Effector Velocity Vector Arrow (v_x, v_y)
    if (speed > 0.01) {
      const vDir = new THREE.Vector3(v[0], v[1], 0);
      this.endVelArrow.position.copy(p2);
      this.endVelArrow.setDirection(vDir.clone().normalize());
      this.endVelArrow.setLength(Math.min(speed * 0.4 + 0.2, 1.8), 0.18, 0.09);
      this.endVelArrow.visible = true;
    } else {
      this.endVelArrow.visible = false;
    }

    // Trajectory Trail for End-Effector (p2)
    if (clearTrail) this.trailPoints = [];
    this.trailPoints.push(p2.clone());
    if (this.trailPoints.length > this.maxTrailLength) this.trailPoints.shift();
    this.trailLine.geometry.setFromPoints(this.trailPoints);
  }

  /**
   * 3-DOF Null-Space Mode Visual Update
   */
  updateNullSpace(state, clearTrail = false) {
    const { j0, j1, j2, j3 } = state;

    const p0 = new THREE.Vector3(j0[0], j0[1], 0);
    const p1 = new THREE.Vector3(j1[0], j1[1], 0);
    const p2 = new THREE.Vector3(j2[0], j2[1], 0);
    const p3 = new THREE.Vector3(j3[0], j3[1], 0);

    // Update Link 1
    const dir1 = new THREE.Vector3().subVectors(p1, p0);
    const len1 = dir1.length();
    const mid1 = new THREE.Vector3().addVectors(p0, p1).multiplyScalar(0.5);
    this.nsLink1Mesh.position.copy(mid1);
    this.nsLink1Mesh.scale.set(1, len1, 1);
    this.nsLink1Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir1.clone().normalize());

    // Update Link 2
    const dir2 = new THREE.Vector3().subVectors(p2, p1);
    const len2 = dir2.length();
    const mid2 = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    this.nsLink2Mesh.position.copy(mid2);
    this.nsLink2Mesh.scale.set(1, len2, 1);
    this.nsLink2Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir2.clone().normalize());

    // Update Link 3
    const dir3 = new THREE.Vector3().subVectors(p3, p2);
    const len3 = dir3.length();
    const mid3 = new THREE.Vector3().addVectors(p2, p3).multiplyScalar(0.5);
    this.nsLink3Mesh.position.copy(mid3);
    this.nsLink3Mesh.scale.set(1, len3, 1);
    this.nsLink3Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir3.clone().normalize());

    // Update Joint Positions
    this.nsJoint0Mesh.position.copy(p0);
    this.nsJoint1Mesh.position.copy(p1);
    this.nsJoint2Mesh.position.copy(p2);
    this.nsJoint3Mesh.position.copy(p3);

    // Position Lock Target Ring at End-Effector (p3)
    this.nsLockRing.position.copy(p3);

    // Trajectory Trail for Joint 2 (Elbow 2) to visualize internal self-motion arc!
    if (clearTrail) this.trailPoints = [];
    this.trailPoints.push(p2.clone());
    if (this.trailPoints.length > this.maxTrailLength) this.trailPoints.shift();
    this.trailLine.geometry.setFromPoints(this.trailPoints);
  }

  /**
   * 3-DOF Numerical IK Mode Visual Update
   */
  updateIK(state) {
    const { pts, p_ref, trail } = state;

    const p0 = new THREE.Vector3(pts[0][0], pts[0][1], pts[0][2]);
    const p1 = new THREE.Vector3(pts[1][0], pts[1][1], pts[1][2]);
    const p2 = new THREE.Vector3(pts[2][0], pts[2][1], pts[2][2]);
    const p3 = new THREE.Vector3(pts[3][0], pts[3][1], pts[3][2]);

    // Base Post: p0 (0,0,0) to p1 (0,0,L1)
    const dir0 = new THREE.Vector3().subVectors(p1, p0);
    const len0 = dir0.length();
    const mid0 = new THREE.Vector3().addVectors(p0, p1).multiplyScalar(0.5);
    this.ikBasePostMesh.position.copy(mid0);
    this.ikBasePostMesh.scale.set(1, len0, 1);

    // Upper Arm (Link 1: p1 to p2)
    const dir1 = new THREE.Vector3().subVectors(p2, p1);
    const len1 = dir1.length();
    const mid1 = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    this.ikLink1Mesh.position.copy(mid1);
    this.ikLink1Mesh.scale.set(1, len1, 1);
    this.ikLink1Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir1.clone().normalize());

    // Forearm (Link 2: p2 to p3)
    const dir2 = new THREE.Vector3().subVectors(p3, p2);
    const len2 = dir2.length();
    const mid2 = new THREE.Vector3().addVectors(p2, p3).multiplyScalar(0.5);
    this.ikLink2Mesh.position.copy(mid2);
    this.ikLink2Mesh.scale.set(1, len2, 1);
    this.ikLink2Mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir2.clone().normalize());

    // Joint Spheres
    this.ikJoint0Mesh.position.copy(p0);
    this.ikJoint1Mesh.position.copy(p1);
    this.ikJoint2Mesh.position.copy(p2);
    this.ikJoint3Mesh.position.copy(p3);

    // Target Marker
    const targetPos = new THREE.Vector3(p_ref[0], p_ref[1], p_ref[2]);
    this.ikTargetMarker.position.copy(targetPos);
    this.ikTargetRing.position.copy(targetPos);

    // Animate Target Marker slow rotation
    this.ikTargetMarker.rotation.y += 0.02;
    this.ikTargetMarker.rotation.z += 0.01;

    // Convergence Trail of end-effector positions across iterations
    if (trail && trail.length > 0) {
      const trailVecs = trail.map((pt) => new THREE.Vector3(pt[0], pt[1], pt[2]));
      this.trailLine.geometry.setFromPoints(trailVecs);
    } else {
      this.trailLine.geometry.setFromPoints([]);
    }
  }

  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  resetCamera() {
    if (this.mode === 'PLANAR2DOF') {
      this.camera.position.set(0, 0, 4.8);
    } else if (this.mode === 'SO3') {
      this.camera.position.set(3.2, 2.4, 3.8);
    } else {
      this.camera.position.set(5.5, 4.2, 7.5);
    }
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }
}
