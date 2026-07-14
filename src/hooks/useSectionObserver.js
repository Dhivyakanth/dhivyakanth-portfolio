import { useEffect } from 'react';

/**
 * Watches a single section element (by id) and calls `onVisible(sectionId)`
 * when that section becomes the dominant one in the viewport.
 * Used to drive the active nav link + ambient background theme swap.
 */
export function useSectionObserver(domId, sectionId, onVisible, threshold = 0.3) {
  useEffect(() => {
    const el = document.getElementById(domId);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(sectionId);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domId, sectionId]);
}
