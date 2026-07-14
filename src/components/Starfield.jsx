import { useEffect, useRef } from 'react';

/**
 * Cinematic starfield: twinkling stars, a soft nebula glow, a faint
 * scroll-linked parallax drift, and occasional shooting stars with
 * fading tails. Pure canvas — no DOM nodes — for performance.
 */
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let scrollY = 0;
    let frame = 0;
    let raf;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      twinkleSpeed: Math.random() * 0.006 + 0.002,
      phase: Math.random() * Math.PI * 2,
      depth: Math.random() + 0.5,
    }));

    const shootingStars = [];

    function maybeSpawnShootingStar() {
      if (Math.random() < 0.008) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.3),
          length: 120,
          opacity: 1,
          vx: 6,
          vy: 3.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // soft nebula glow behind the stars
      const nebula = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        0,
        width * 0.5,
        height * 0.3,
        width * 0.5
      );
      nebula.addColorStop(0, 'rgba(0,60,30,0.08)');
      nebula.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      frame++;
      maybeSpawnShootingStar();

      stars.forEach((star) => {
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.phase) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(star.x, star.y + scrollY * star.depth * 0.04, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,220,${star.opacity * twinkle})`;
        ctx.fill();
      });

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const tailGradient = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.length * (s.vx / 8),
          s.y - s.length * (s.vy / 8)
        );
        tailGradient.addColorStop(0, `rgba(0,255,136,${s.opacity})`);
        tailGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length, s.y - s.length * 0.6);
        ctx.strokeStyle = tailGradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.025;
        if (s.opacity <= 0) shootingStars.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    }

    function handleScroll() {
      scrollY = window.scrollY;
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="starfield" aria-hidden="true" />;
}
