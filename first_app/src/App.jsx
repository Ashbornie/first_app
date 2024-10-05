import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';

const EarthCanvas = () => {
  // Load the GLTF model, including materials
  const { scene } = useGLTF('hyper.gltf');

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 200 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Add lighting to ensure the model materials are visible */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, 5]} intensity={1} />

      {/* OrbitControls for free rotation on any axis and zoom */}
      <OrbitControls
        autoRotate={true}
        enableZoom={true} // Enable zoom feature
        enablePan={false} // Disable panning to avoid unwanted movements
        autoRotateSpeed={1.0} // Adjust auto-rotate speed if needed
      />

      {/* Ensure the model is rendered correctly using Suspense */}
      <Suspense fallback={null}>
        <primitive object={scene} scale={[2.5, 2.5, 2.5]} position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
