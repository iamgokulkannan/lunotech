"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { type Group, type Mesh, Vector3, Color, MeshStandardMaterial } from "three";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

export default function Scene() {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const scaleRef = useRef(1);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }

    // Smooth scale animation
    if (hovered) {
      scaleRef.current = Math.min(scaleRef.current + 0.1, 1.2);
    } else {
      scaleRef.current = Math.max(scaleRef.current - 0.1, 1);
    }
    
  });

  // Generate particles with unique IDs
  const particles = useRef(
    Array.from({ length: 100 }, (_, i) => {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return {
        id: `particle-${i}-${Math.random().toString(36).substr(2, 9)}`,
        position: [x, y, z] as [number, number, number],
        size: 0.03 + Math.random() * 0.05,
        speed: 0.1 + Math.random() * 0.3,
        color: new Color(
          Math.random() > 0.7
            ? "#00bcd4"
            : Math.random() > 0.5
            ? "#8bc34a"
            : "#ff4081"
        ),
        targetColor: new Color("#ffffff")
      };
    })
  ).current;

  return (
    <>
      <group ref={groupRef}>
        {/* Main sphere with hover animation */}
        <mesh 
          position={[0, 0, 0]}
          scale={scaleRef.current}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#0070f3"
            metalness={0.9}
            roughness={0.1}
            emissive="#0070f3"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>

        {/* Orbiting particles */}
        {particles.map((particle) => (
          <ParticlePoint
            key={particle.id}
            position={particle.position}
            size={particle.size}
            speed={particle.speed}
            color={particle.color}
            targetColor={particle.targetColor}
          />
        ))}
      </group>

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
        <Noise opacity={0.02} />
      </EffectComposer>
    </>
  );
}

interface ParticlePointProps {
  position: [number, number, number];
  size: number;
  speed: number;
  color: Color;
  targetColor: Color;
}

function ParticlePoint({ position, size, speed, color, targetColor }: ParticlePointProps) {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = useRef<Vector3>(new Vector3(...position));
  const randomAxis = useRef<Vector3>(new Vector3(
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() - 0.5
  ).normalize());
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const angle = state.clock.getElapsedTime() * speed;
    const pos = initialPosition.current.clone();
    pos.applyAxisAngle(randomAxis.current, angle);

    // Add some vertical oscillation
    pos.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.1;

    meshRef.current.position.copy(pos);

    // Color transition
    const material = meshRef.current.material as MeshStandardMaterial;
    if (hovered) {
      material.color.lerp(targetColor, 0.1);
    } else {
      material.color.lerp(color, 0.1);
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
