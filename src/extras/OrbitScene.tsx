'use client';

import '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

type PlanetProps = {
  radius: number;
  speed: number;
  size: number;
  color: string;
};
function Planet({ radius, speed, size, color }: PlanetProps) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(0);

  useFrame(() => {
    angle.current += speed;

    if (!ref.current) return;

    ref.current.position.x = Math.cos(angle.current) * radius;
    ref.current.position.z = Math.sin(angle.current) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function OrbitScene() {
  return (
    <Canvas camera={{ position: [0, 10, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} />

      {/* Sol */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      {/* Planetas */}
      <Planet radius={4} speed={0.02} size={0.4} color="cyan" />
      <Planet radius={6} speed={0.015} size={0.5} color="orange" />
      <Planet radius={8} speed={0.01} size={0.6} color="lightblue" />

      <OrbitControls />
    </Canvas>
  );
}