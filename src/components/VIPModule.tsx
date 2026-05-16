'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Props {
  onClose: () => void;
}

export default function VIPModule({ onClose }: Props) {
  const [modules] = useState([
    'OMEGA ACCESS',
    'QUANTUM GRID',
    'BLACK CIPHER ELITE',
    'PHANTOM TRACE PRO',
    'SATELLITE RELAY X'
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % modules.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [modules.length]);

  return (
    <motion.div
      className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button onClick={onClose} className="absolute top-8 right-8 text-neon-magenta text-2xl font-display hover:text-white transition-colors">
        EXIT OMEGA MODE
      </button>
      <div className="text-center space-y-8">
        <h2 className="text-5xl font-display text-neon-magenta glitch-text">VIP ACCESS GRANTED</h2>
        <div className="flex gap-6 justify-center">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod}
              className={`px-6 py-3 border text-lg font-cyber ${
                idx === activeIndex
                  ? 'border-neon-magenta text-neon-magenta bg-neon-magenta/10'
                  : 'border-gray-700 text-gray-500'
              }`}
              animate={{ scale: idx === activeIndex ? 1.1 : 1 }}
            >
              {mod}
            </motion.div>
          ))}
        </div>
        <p className="text-neon-cyan font-cyber text-sm animate-pulse">
          ENHANCED CINEMATIC OVERLAY ACTIVE
        </p>
      </div>
      {/* Animated rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-neon-magenta rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-neon-cyan rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-10" />
      </div>
    </motion.div>
  );
}
