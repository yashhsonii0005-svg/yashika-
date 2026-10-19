import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  alphaSpeed: number;
  type: 'star' | 'petal' | 'mote';
  rotation?: number;
  rotSpeed?: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const count = 90;

    for (let i = 0; i < count; i++) {
      const type: 'star' | 'petal' | 'mote' = i < 50 ? 'star' : i < 70 ? 'petal' : 'mote';
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === 'star' ? Math.random() * 2 + 0.5 : type === 'petal' ? Math.random() * 6 + 4 : Math.random() * 3 + 1,
        speedX: type === 'petal' ? Math.random() * 0.8 + 0.2 : (Math.random() - 0.5) * 0.2,
        speedY: type === 'petal' ? Math.random() * 1.2 + 0.6 : (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.8 + 0.2,
        alphaSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        type,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const shootingStars: ShootingStar[] = [];
    let nextShootingStar = Date.now() + 4000;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Shooting stars
      if (Date.now() > nextShootingStar) {
        shootingStars.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 12 + 10,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 1,
        });
        nextShootingStar = Date.now() + Math.random() * 8000 + 5000;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.save();
        ctx.strokeStyle = `rgba(254, 240, 138, ${s.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.02;

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      // Particles
      particles.forEach((p) => {
        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.95 || p.alpha < 0.2) {
          p.alphaSpeed *= -1;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > height) p.y = -10;
        if (p.x > width) p.x = -10;
        if (p.x < -10) p.x = width;

        if (p.type === 'star') {
          ctx.beginPath();
          ctx.fillStyle = `rgba(253, 230, 138, ${p.alpha})`;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // slight cross glow for bigger stars
          if (p.size > 1.6) {
            ctx.strokeStyle = `rgba(254, 243, 199, ${p.alpha * 0.4})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x - p.size * 2, p.y);
            ctx.lineTo(p.x + p.size * 2, p.y);
            ctx.moveTo(p.x, p.y - p.size * 2);
            ctx.lineTo(p.x, p.y + p.size * 2);
            ctx.stroke();
          }
        } else if (p.type === 'petal') {
          if (p.rotation !== undefined && p.rotSpeed !== undefined) {
            p.rotation += p.rotSpeed;
          }
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation || 0);
          ctx.fillStyle = `rgba(251, 182, 206, ${p.alpha * 0.6})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          // mote
          ctx.beginPath();
          ctx.fillStyle = `rgba(254, 215, 170, ${p.alpha * 0.5})`;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
