import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

const Blob = () => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.distort = 0.4 + Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={mesh}>
      <MeshDistortMaterial
        color="#1DB954"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const HeroVisual = () => {
  return (
    <div className="canvas-container relative">
      {/* Background glow for the 3D element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-spotify-green/20 blur-[120px] rounded-full" />

      <Canvas
        shadows={false} // Disable shadows for performance
        dpr={[1, 2]}    // Limits pixel ratio on high-res screens to save GPU
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#1DB954" intensity={1} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Blob />
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroVisual;