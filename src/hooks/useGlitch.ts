'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGlitch(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(ref.current, { x: 'random(-5,5)', y: 'random(-5,5)', duration: 0.1 })
      .to(ref.current, { x: '0', y: '0', duration: 0.1 });
    return () => tl.kill();
  }, [active]);

  return ref;
}
