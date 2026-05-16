'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlitchOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Randomly trigger glitch slices
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 150);
    }, Math.random() * 8000 + 2000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ duration: 0.15 }}
      style={{
        background: `linear-gradient(0deg, rgba(255,0,255,0.2) 0%, rgba(0,255,255,0.2) 100%)`
      }}
    />
  );
}
