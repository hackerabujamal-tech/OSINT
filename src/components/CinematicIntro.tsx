'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete });

      // Glitch flashes
      tl.fromTo('.glitch-flash', { opacity: 0 }, { opacity: 1, duration: 0.1, repeat: 5, yoyo: true })
        .to('.glitch-flash', { opacity: 0, duration: 0.2 })
        // Logo reveal
        .fromTo('.logo-main', { scale: 3, opacity: 0, filter: 'blur(20px)' }, {
          scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out'
        })
        // Loading bar
        .fromTo('.loading-bar-fill', { width: '0%' }, { width: '100%', duration: 2, ease: 'power2.inOut' }, '-=0.5')
        // Fade out
        .to('.intro-overlay', { opacity: 0, duration: 0.8, delay: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black intro-overlay">
      {/* Full-screen glitch flash */}
      <div className="glitch-flash fixed inset-0 bg-neon-magenta/10 pointer-events-none" />

      {/* Logo */}
      <div className="logo-main text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-neon-magenta glitch-text drop-shadow-[0_0_30px_#ff00ff]">
          NEXUS-7
        </h1>
        <p className="text-2xl md:text-3xl font-cyber text-neon-cyan mt-2 tracking-[0.3em] animate-pulse-glow">
          OMEGA VEIL ACTIVE
        </p>
      </div>

      {/* Loading bar */}
      <div className="w-64 h-1.5 bg-gray-900 border border-neon-purple mt-8 glow-border">
        <div className="loading-bar-fill h-full bg-gradient-to-r from-neon-magenta to-neon-cyan shadow-[0_0_10px_#ff00ff]" />
      </div>

      {/* Warning text */}
      <p className="text-xs text-red-500 mt-4 font-cyber animate-pulse">
        CLASSIFIED // UNAUTHORIZED ACCESS PROHIBITED
      </p>
    </div>
  );
}
