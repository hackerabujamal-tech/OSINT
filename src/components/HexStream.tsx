'use client';
import { useEffect, useState } from 'react';

const generateHex = (lines: number) =>
  Array.from({ length: lines }, () =>
    Array.from({ length: 8 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
  ).join('\n');

export default function HexStream() {
  const [hexData, setHexData] = useState('');

  useEffect(() => {
    setHexData(generateHex(30) + '\n' + generateHex(30));
    const interval = setInterval(() => {
      setHexData(generateHex(30) + '\n' + generateHex(30));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-48 overflow-hidden border border-neon-cyan glow-border bg-black/60 p-2 font-cyber text-xs text-neon-cyan leading-relaxed">
      <div className="animate-hex-scroll">
        <pre className="whitespace-pre">{hexData}</pre>
      </div>
    </div>
  );
}
