import { useEffect } from 'react';

export function useScroll3D() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      return undefined;
    }

    const sections = Array.from(document.querySelectorAll('[data-scroll-3d]'));
    if (!sections.length) return undefined;

    let rafId = 0;

    function updateSectionTransforms() {
      const viewportHeight = window.innerHeight || 1;
      const viewportCenter = viewportHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = (sectionCenter - viewportCenter) / viewportHeight;
        const clamped = Math.max(-1, Math.min(1, distance * 1.4));
        const depth = Math.abs(clamped);

        const rotateX = `${(-clamped * 12).toFixed(2)}deg`;
        const rotateY = `${(clamped * 5).toFixed(2)}deg`;
        const translateY = `${(clamped * -26).toFixed(2)}px`;
        const translateZ = `${(-depth * 60).toFixed(2)}px`;
        const scale = `${(1 - depth * 0.06).toFixed(3)}`;
        const opacity = `${(1 - depth * 0.16).toFixed(3)}`;

        section.style.setProperty('--scroll-rotate-x', rotateX);
        section.style.setProperty('--scroll-rotate-y', rotateY);
        section.style.setProperty('--scroll-translate-y', translateY);
        section.style.setProperty('--scroll-translate-z', translateZ);
        section.style.setProperty('--scroll-scale', scale);
        section.style.setProperty('--scroll-opacity', opacity);
      });

      rafId = 0;
    }

    function onScrollOrResize() {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateSectionTransforms);
    }

    updateSectionTransforms();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);
}