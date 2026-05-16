Enter'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  vip: boolean;
}

export default function TacticalHUD({ vip }: Props) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toUTCString().split(' ')[4] + ' ZULU');
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full bg-black/70 backdrop-blur-md border-b border-neon-purple glow-border py-2 px-4 flex items-center justify-between z-20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-6">
        <span className="text-neon-magenta font-display text-lg tracking-widest drop-shadow-[0_0_10px_#ff00ff]">NEXUS-7</span>
        <span className="text-xs text-neon-cyan font-cyber">OMEGA VEIL v9.7</span>
      </div>
      <div className="flex items-center gap-6">
        {vip && (
          <span className="text-neon-pink text-xs animate-pulse font-cyber">VIP ACCESS: ACTIVE</span>
        )}
        <span className="text-neon-cyan text-xs font-cyber">{time}</span>
        <span className="text-green-500 text-xs font-cyber">UPLINK SECURE</span>
        <span className="text-yellow-400 text-xs font-cyber">THREAT LEVEL: OMEGA</span>
      </div>
    </motion.div>
  );
}
