Enter'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function SkullModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.1;
      // Pulse scale
      meshRef.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 5) * 0.05);
    }
  });

  // Use a simple TorusKnot as placeholder for skull; we don't have GLTF, keep it abstract.
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.8, 0.2, 64, 8, 2, 3]} />
      <meshStandardMaterial color="#ff00ff" emissive="#550055" roughness={0.3} metalness={0.8} wireframe />
    </mesh>
  );
}

export default function CyberSkull() {
  return (
    <div className="h-48 border border-neon-magenta glow-border bg-black/60 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#ff00ff" />
        <SkullModel />
      </Canvas>
    </div>
  );
}
