"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import type { Mesh } from "three";
import { Text, useGLTF, useTexture, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

export default function HeroModel() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const scaleRef = useRef(1);

  // Create a pulsing animation
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Smooth vertical movement
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;

      // Smooth scale animation
      if (hovered) {
        scaleRef.current = Math.min(scaleRef.current + 0.1, 1.2);
      } else {
        scaleRef.current = Math.max(scaleRef.current - 0.1, 1);
      }
      meshRef.current.scale.setScalar(scaleRef.current);

      // Add some camera movement on hover
      if (hovered) {
        camera.position.lerp(new Vector3(0, 0, 5), 0.1);
      } else {
        camera.position.lerp(new Vector3(0, 0, 7), 0.1);
      }
    }
  });

  return (
    <group>
      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
        <Noise opacity={0.02} />
      </EffectComposer>

      {/* Main futuristic sphere */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh 
          ref={meshRef} 
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color="#0070f3"
            metalness={0.9}
            roughness={0.1}
            emissive="#0070f3"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
      </Float>

      {/* Company name with animation */}
      <Float
        speed={1}
        rotationIntensity={0.2}
        floatIntensity={0.2}
      >
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          LUNO TECH
        </Text>
      </Float>

      {/* Enhanced orbiting spheres */}
      <OrbitingSphere radius={3} speed={0.5} size={0.2} color="#00bcd4" />
      <OrbitingSphere radius={3.5} speed={-0.3} size={0.15} color="#ff4081" />
      <OrbitingSphere radius={4} speed={0.2} size={0.25} color="#8bc34a" />
      
      {/* Additional decorative elements */}
      <mesh position={[0, 0, -2]}>
        <ringGeometry args={[2, 2.2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Enhanced orbiting sphere component
function OrbitingSphere({ radius, speed, size, color }: { radius: number, speed: number, size: number, color: string }) {
  const sphereRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const scaleRef = useRef(1);

  useFrame((state) => {
    if (sphereRef.current) {
      const angle = state.clock.getElapsedTime() * speed;
      sphereRef.current.position.x = Math.sin(angle) * radius;
      sphereRef.current.position.z = Math.cos(angle) * radius;
      
      // Add some vertical movement
      sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * speed * 2) * 0.5;

      // Smooth scale animation
      if (hovered) {
        scaleRef.current = Math.min(scaleRef.current + 0.1, 1.5);
      } else {
        scaleRef.current = Math.max(scaleRef.current - 0.1, 1);
      }
      sphereRef.current.scale.setScalar(scaleRef.current);
    }
  });

  return (
    <mesh 
      ref={sphereRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.5}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}
