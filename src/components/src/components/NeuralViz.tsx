Enter'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const linePositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < particleCount; i += 2) {
      const idx = i * 3;
      arr.push(positions[idx], positions[idx+1], positions[idx+2]);
      const next = (i+1) * 3;
      arr.push(positions[next], positions[next+1], positions[next+2]);
    }
    return new Float32Array(arr);
  }, [positions]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.elapsedTime * 0.02;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#ff00ff" transparent opacity={0.5} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

export default function NeuralViz() {
  return (
    <div className="fixed inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0} />
        <Particles />
      </Canvas>
    </div>
  );
}
