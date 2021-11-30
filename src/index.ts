import * as BABYLON from 'babylonjs';

import './index.css';

const canvas = document.createElement('canvas') as HTMLCanvasElement;
canvas.id = 'renderCanvas';
document.body.appendChild(canvas);

(async () => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
  });
  window.addEventListener('resize', () => {
    engine.resize();
  });

  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.FreeCamera(
    'camera1',
    new BABYLON.Vector3(0, 5, -10),
    scene
  );
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);
  const light = new BABYLON.HemisphericLight(
    'light1',
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
  sphere.position.y = 1;

  const env = scene.createDefaultEnvironment()!;
  await scene.createDefaultXRExperienceAsync({
    floorMeshes: [env.ground!],
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
})();
