Enter'use client';

import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { generateFakeIntel } from '@/lib/fakeIntel';
import type { FakeIntel, SearchQuery } from '@/types';
import CinematicIntro from '@/components/CinematicIntro';
import HexStream from '@/components/HexStream';
import TacticalHUD from '@/components/TacticalHUD';
import SearchInterface from '@/components/SearchInterface';
import OutputPanel from '@/components/OutputPanel';
import GlitchOverlay from '@/components/GlitchOverlay';
import VIPModule from '@/components/VIPModule';

// Dynamically import heavy Three.js components to reduce initial bundle and avoid SSR issues
const RadarSystem = dynamic(() => import('@/components/RadarSystem'), { ssr: false });
const NeuralViz = dynamic(() => import('@/components/NeuralViz'), { ssr: false });
const CyberSkull = dynamic(() => import('@/components/CyberSkull'), { ssr: false });
const ThreatGraph = dynamic(() => import('@/components/ThreatGraph'), { ssr: false });

export default function Home() {
  const [phase, setPhase] = useState<'intro' | 'dashboard'>('intro');
  const [vipMode, setVipMode] = useState(false);
  const [searchResults, setSearchResults] = useState<FakeIntel | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setPhase('dashboard');
  }, []);

  const handleSearch = useCallback((query: SearchQuery) => {
    setIsSearching(true);
    // Simulate intense processing delay
    setTimeout(() => {
      const data = generateFakeIntel(query);
      setSearchResults(data);
      setIsSearching(false);
    }, 3000);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Permanent glitch overlay */}
      <GlitchOverlay />

      <AnimatePresence>
        {phase === 'intro' && <CinematicIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {phase === 'dashboard' && (
        <motion.div
          className="absolute inset-0 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Background neural particles (lightweight, always on) */}
          <NeuralViz />

          {/* Top tactical HUD bar */}
          <TacticalHUD vip={vipMode} />

          {/* Main content grid */}
          <div className="flex-1 flex p-4 gap-4 z-10">
            {/* Left column: Hex streams & Cyber skull */}
            <div className="w-1/4 flex flex-col gap-4">
              <HexStream />
              <CyberSkull />
            </div>

            {/* Center: Search & Output */}
            <div className="flex-1 flex flex-col gap-4">
              <SearchInterface onSearch={handleSearch} disabled={isSearching} />
              {isSearching && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-neon-magenta font-cyber text-lg animate-pulse">
                    TRACE IN PROGRESS... DECRYPTING...
                  </div>
                </div>
              )}
              {searchResults && !isSearching && <OutputPanel data={searchResults} />}
            </div>

            {/* Right column: Radar & Threat Graph */}
            <div className="w-1/4 flex flex-col gap-4">
              <RadarSystem />
              <ThreatGraph />
            </div>
          </div>

          {/* VIP overlay (if active) */}
          {vipMode && <VIPModule onClose={() => setVipMode(false)} />}

          {/* Bottom access toggles */}
          <div className="absolute bottom-4 right-4 flex gap-2 z-20">
            <button
              onClick={() => setVipMode(!vipMode)}
              className="text-neon-magenta border border-neon-magenta px-4 py-1 text-xs font-cyber bg-black/50 backdrop-blur-sm glow-border hover:bg-neon-magenta/20 transition-colors"
            >
              {vipMode ? 'DEACTIVATE OMEGA' : 'ACTIVATE OMEGA ACCESS'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
