import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const SkillPlanet = ({ radius, speed, name, color, offset }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 0.5) * (radius * 0.2); // Subtle vertical wave
    meshRef.current.position.set(x, y, z);
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[0.15, 32, 32]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </Sphere>
        <Text
          position={[0, 0.4, 0]}
          fontSize={0.25}
          color="white"
          font="https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnxyumZJWZIKCvcDxFpCLXM.woff"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
};

const SkillSolarSystem = () => {
  const skills = [
    { name: "React", radius: 2.5, speed: 0.5, color: "#61DAFB" },
    { name: "Node.js", radius: 4, speed: 0.3, color: "#68A063" },
    { name: "MongoDB", radius: 5.5, speed: 0.2, color: "#47A248" },
    { name: "Three.js", radius: 3.2, speed: 0.4, color: "#FFFFFF" },
    { name: "Tailwind", radius: 4.8, speed: 0.25, color: "#38B2AC" },
    { name: "GIS", radius: 1.8, speed: 0.6, color: "#1DB954" },
  ];

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#1DB954" />
        
        {/* The Sun (Core) */}
        <Sphere args={[0.6, 64, 64]}>
          <MeshDistortMaterial color="#1DB954" distort={0.4} speed={2} />
        </Sphere>

        {/* Orbit Rings */}
        {skills.map((s, i) => (
          <mesh key={`ring-${i}`} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[s.radius - 0.01, s.radius + 0.01, 64]} />
            <meshBasicMaterial color="white" transparent opacity={0.1} side={THREE.DoubleSide} />
          </mesh>
        ))}

        {/* Orbiting Skills */}
        {skills.map((skill, i) => (
          <SkillPlanet 
            key={i} 
            radius={skill.radius} 
            speed={skill.speed} 
            name={skill.name} 
            color={skill.color}
            offset={i * 1.5}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default SkillSolarSystem;