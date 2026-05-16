Enter'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function RadarScene() {
  const groupRef = useRef<THREE.Group>(null);
  const sweepRef = useRef<THREE.Mesh>(null);
  
  // Pre-generate random target positions once
  const targets = useMemo(() => 
    Array.from({ length: 8 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 1.5 + Math.random() * 0.8
    })), []
  );

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.z += 0.004;
    if (sweepRef.current) {
      sweepRef.current.material.opacity = 0.2 + Math.sin(clock.elapsedTime * 4) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Ring args={[2.2, 2.3, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.3} />
      </Ring>
      <Ring args={[1.5, 1.55, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00ffff" transparent opacity={0.25} />
      </Ring>
      <mesh ref={sweepRef} rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[2.5, 0.04]} />
        <meshBasicMaterial color="#ff0044" transparent opacity={0.6} />
      </mesh>
      {targets.map((t, i) => (
        <mesh key={i} position={[Math.cos(t.angle) * t.radius, Math.sin(t.angle) * t.radius, 0]}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#ff00ff' : '#00ffff'} />
        </mesh>
      ))}
    </group>
  );
}

export default function RadarSystem() {
  return (
    <div className="w-full h-64 bg-black/40 border border-neon-purple glow-border rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <RadarScene />
      </Canvas>
    </div>
  );
}
