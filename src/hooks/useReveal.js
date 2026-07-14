import { useEffect } from 'react';

/**
 * Observes every element with the `.reveal` class currently in the DOM
 * and adds `.visible` once it scrolls into view. Pair with the
 * `.reveal`, `.reveal-1`...`.reveal-5` CSS classes for staggered
 * fade + rise entrances (see src/styles/animations.css).
 *
 * Re-runs whenever `deps` changes so dynamically rendered sections
 * (e.g. after data loads) still get observed.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
