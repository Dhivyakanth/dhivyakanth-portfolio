import { useEffect, useRef } from 'react';

/**
 * Replaces the native cursor with a glowing dot, and emits tiny
 * star-shaped particles behind the pointer that rotate, twinkle, and
 * fade out. Grows on hover over interactive elements.
 * Disabled automatically on touch devices via CSS (see cursor.css).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let raf;

    function handleMove(e) {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          r: Math.random() * 3 + 1,
          life: 1,
          rotation: Math.random() * Math.PI * 2,
          spin: Math.random() * 0.2 - 0.1,
        });
      }
    }

    function handleHover(e) {
      const interactive = e.target.closest(
        'a, button, .hire-btn, .nav-link, .pill, .proj-card, .contact-card, .media-card, .btn-resume, .btn-send'
      );
      const root = dotRef.current?.parentElement;
      root?.classList.toggle('cursor-hover', Boolean(interactive));
    }

    function drawStar(ctx, radius) {
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const outer = radius;
        const inner = radius * 0.35;
        i === 0
          ? ctx.moveTo(Math.cos(angle) * outer, Math.sin(angle) * outer)
          : ctx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
        const midAngle = angle + Math.PI / 4;
        ctx.lineTo(Math.cos(midAngle) * inner, Math.sin(midAngle) * inner);
      }
      ctx.closePath();
    }

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.045;
        p.rotation += p.spin;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life * 0.7;
        drawStar(ctx, p.r);
        ctx.fillStyle = 'rgba(0,255,136,1)';
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(frame);
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('resize', handleResize);
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9996,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />
      <div ref={dotRef} className="cursor" aria-hidden="true" />
    </>
  );
}
