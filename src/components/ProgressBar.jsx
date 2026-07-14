import { useEffect, useState } from 'react';

/**
 * Thin glowing progress bar fixed under the nav, filling left-to-right
 * as the user scrolls down the page.
 */
export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPercent(total ? Math.round((window.scrollY / total) * 100) : 0);
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
