Enter'use client';
import { motion } from 'framer-motion';
import type { FakeIntel } from '@/types';

export default function OutputPanel({ data }: { data: FakeIntel }) {
  return (
    <motion.div
      className="p-4 bg-black/70 border border-neon-cyan glow-border rounded-lg font-cyber text-sm space-y-2 overflow-y-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-neon-magenta text-xs border-b border-neon-purple pb-1">/// DECRYPTED INTEL STREAM ///</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <p className="text-neon-cyan">SIGNAL TRACE:</p>
        <p className="text-white">{data.signalTrace}</p>
        <p className="text-neon-cyan">CONFIDENCE:</p>
        <p className="text-neon-pink">{data.confidence}%</p>
        <p className="text-neon-cyan">GRID REF:</p>
        <p className="text-white">{data.gridRef}</p>
        <p className="text-neon-cyan">TACTICAL ZONE:</p>
        <p className="text-neon-purple">{data.tacticalZone}</p>
        <p className="text-neon-cyan">ENCRYPTED COORD:</p>
        <p className="text-white">{data.encryptedCoord}</p>
        <p className="text-neon-cyan">OP CODE:</p>
        <p className="text-neon-red">{data.operationCode}</p>
        <p className="text-neon-cyan">NODE RELAY:</p>
        <p className="text-white">{data.nodeRelay}</p>
        <p className="text-neon-cyan">QUANTUM HASH:</p>
        <p className="text-neon-magenta">{data.quantumHash}</p>
        <p className="text-neon-cyan">TIMESTAMP:</p>
        <p className="text-white">{data.timestamp}</p>
      </div>
      <p className="mt-4 text-xs text-gray-500 border-t border-neon-purple pt-2">** CLASSIFIED EYES ONLY **</p>
    </motion.div>
  );
}
