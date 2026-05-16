Enter'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { SearchQuery } from '@/types';

interface Props {
  onSearch: (query: SearchQuery) => void;
  disabled?: boolean;
}

export default function SearchInterface({ onSearch, disabled }: Props) {
  const [phone, setPhone] = useState('');
  const [codename, setCodename] = useState('');
  const [region, setRegion] = useState('GLOBAL');
  const [threat, setThreat] = useState('OMEGA');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    onSearch({ phone, codename, region, threat });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end gap-4 p-4 bg-black/50 border border-neon-red glow-border rounded-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-col">
        <label className="text-neon-magenta text-xs mb-1 font-cyber">TARGET ID (PHONE)</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-transparent border-b-2 border-neon-purple text-neon-cyan placeholder-gray-600 font-cyber focus:outline-none focus:border-neon-magenta transition-colors w-40"
          placeholder="+XX-XXXX-XXXX"
          disabled={disabled}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-neon-magenta text-xs mb-1 font-cyber">OPERATION CODENAME</label>
        <input
          type="text"
          value={codename}
          onChange={(e) => setCodename(e.target.value)}
          className="bg-transparent border-b-2 border-neon-purple text-neon-cyan placeholder-gray-600 font-cyber focus:outline-none focus:border-neon-magenta w-40"
          placeholder="GHOST ECHO"
          disabled={disabled}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-neon-magenta text-xs mb-1 font-cyber">REGION</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="bg-black border border-neon-purple text-neon-cyan font-cyber px-2 py-1 focus:outline-none"
          disabled={disabled}
        >
          <option>GLOBAL</option>
          <option>SECTOR-7</option>
          <option>NIGHTFALL</option>
          <option>BLACK ZONE</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-neon-magenta text-xs mb-1 font-cyber">THREAT LEVEL</label>
        <select
          value={threat}
          onChange={(e) => setThreat(e.target.value)}
          className="bg-black border border-neon-red text-red-500 font-cyber px-2 py-1 focus:outline-none"
          disabled={disabled}
        >
          <option>OMEGA</option>
          <option>BLACK CIPHER</option>
          <option>PHANTOM</option>
        </select>
      </div>
      <motion.button
        type="submit"
        disabled={disabled}
        className={`bg-neon-red/20 border-2 border-neon-red text-neon-red font-display text-sm px-6 py-2 transition-all duration-300 glow-border ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neon-red hover:text-black'
        }`}
        whileHover={disabled ? {} : { scale: 1.05, boxShadow: '0 0 30px #ff0044' }}
        whileTap={disabled ? {} : { scale: 0.95 }}
      >
        INITIALIZE TRACE
      </motion.button>
    </motion.form>
  );
        }
