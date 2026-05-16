Enter'use client';
import { useEffect, useRef } from 'react';

export default function ThreatGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#ff0044';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#ff0044';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = height/2 + Math.sin((x + offset) * 0.05) * 20 + Math.cos((x + offset) * 0.03) * 15;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      offset += 0.5;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="h-48 border border-neon-red glow-border bg-black/60 rounded-lg overflow-hidden p-2">
      <canvas ref={canvasRef} width={300} height={180} className="w-full h-full" />
    </div>
  );
}
