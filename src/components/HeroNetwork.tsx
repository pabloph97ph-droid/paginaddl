import React, { useEffect, useRef } from 'react';

interface CityNode {
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  timezone: string;
}

const CITIES: CityNode[] = [
  { name: 'São Paulo', x: 33, y: 72, timezone: 'UTC-3' },
  { name: 'Nova York', x: 26, y: 36, timezone: 'UTC-4' },
  { name: 'Londres', x: 48, y: 26, timezone: 'UTC+1' },
  { name: 'Lisboa', x: 46, y: 34, timezone: 'UTC+1' },
  { name: 'Paris', x: 50, y: 28, timezone: 'UTC+2' },
  { name: 'Tóquio', x: 86, y: 38, timezone: 'UTC+9' },
  { name: 'Singapura', x: 77, y: 58, timezone: 'UTC+8' }
];

const CONNECTIONS: [number, number][] = [
  [0, 1], // SP -> NY
  [0, 3], // SP -> Lisboa
  [1, 2], // NY -> Londres
  [2, 4], // Londres -> Paris
  [3, 4], // Lisboa -> Paris
  [4, 5], // Paris -> Tóquio
  [4, 6], // Paris -> Singapura
  [6, 5], // Singapura -> Tóquio
];

export const HeroNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth * window.devicePixelRatio;
        canvas.height = parent.clientHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      t += 0.008;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // Subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw faint connection curves
      CONNECTIONS.forEach(([fromIdx, toIdx], connIdx) => {
        const from = CITIES[fromIdx];
        const to = CITIES[toIdx];

        const x1 = (from.x / 100) * width;
        const y1 = (from.y / 100) * height;
        const x2 = (to.x / 100) * width;
        const y2 = (to.y / 100) * height;

        // Subtle curved line
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 - 25;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX, midY, x2, y2);
        ctx.strokeStyle = 'rgba(197, 168, 128, 0.2)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Traveling pulse packet
        const progress = (t * 0.4 + connIdx * 0.18) % 1;
        // Bezier interpolation
        const u = 1 - progress;
        const tt = progress * progress;
        const uu = u * u;
        const px = uu * x1 + 2 * u * progress * midX + tt * x2;
        const py = uu * y1 + 2 * u * progress * midY + tt * y2;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#e2c285';
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw city nodes
      CITIES.forEach((city, index) => {
        const cx = (city.x / 100) * width;
        const cy = (city.y / 100) * height;

        const pulseScale = 1 + Math.sin(t * 2 + index) * 0.25;

        // Outer ripple
        ctx.beginPath();
        ctx.arc(cx, cy, 6 * pulseScale, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(197, 168, 128, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#c5a880';
        ctx.fill();

        // City label
        ctx.font = '10px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
        ctx.fillText(city.name, cx + 8, cy + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
