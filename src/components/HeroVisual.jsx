import { useTheme } from "../context/ThemeContext"; // 1. Import hook

const HeroVisual = () => {
  const { accentColor } = useTheme(); // 2. Access accent color

  return (
    <div className="canvas-container relative">
      {/* 3. Update background glow style */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[120px] rounded-full opacity-20"
        style={{ backgroundColor: accentColor }}
      />

      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />

        {/* 4. Update point light color */}
        <pointLight position={[-10, -10, -10]} color={accentColor} intensity={1} />

        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color={accentColor} // 5. Update Blob color
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};