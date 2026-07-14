import { useEffect, useState } from 'react';
import Starfield from './components/Starfield';
import CustomCursor from './components/CustomCursor';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import ScrollSideIndicator from './components/ScrollSideIndicator';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { sectionBackgrounds } from './data/portfolioData';
import { useReveal } from './hooks/useReveal';
import { useScroll3D } from './hooks/useScroll3D';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [loaderStage, setLoaderStage] = useState('loading');

  // Drives the .reveal entrance animations across every section.
  useReveal();
  useScroll3D();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const closeDelay = prefersReducedMotion ? 700 : 1650;
    const doneDelay = prefersReducedMotion ? 900 : 2000;

    const closingTimer = window.setTimeout(() => {
      setLoaderStage('closing');
    }, closeDelay);

    const doneTimer = window.setTimeout(() => {
      setLoaderStage('done');
    }, doneDelay);

    return () => {
      window.clearTimeout(closingTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loaderStage === 'done' ? '' : 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [loaderStage]);

  function scrollToSection(id) {
    const el = document.getElementById(`sec-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const loaderVisible = loaderStage !== 'done';

  return (
    <>
      <div className={`app-shell ${loaderVisible ? 'app-shell-loading' : 'app-shell-ready'}`} aria-busy={loaderVisible}>
        <Starfield />
        <CustomCursor />
        <div className="section-bg" style={{ background: sectionBackgrounds[activeSection] }} />
        <ProgressBar />

        <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
        <ScrollSideIndicator />

        <Hero onSectionVisible={setActiveSection} />
        <Skills onSectionVisible={setActiveSection} />
        <Experience onSectionVisible={setActiveSection} />
        <Projects onSectionVisible={setActiveSection} />
        <Education onSectionVisible={setActiveSection} />
        <Contact onSectionVisible={setActiveSection} />

        <Footer />
        <BackToTop />
      </div>

      {loaderVisible && (
        <div className={`boot-loader ${loaderStage}`} role="status" aria-live="polite" aria-label="Loading portfolio">
          <div className="boot-loader-streaks" aria-hidden="true">
            <span className="boot-streak streak-1" />
            <span className="boot-streak streak-2" />
            <span className="boot-streak streak-3" />
          </div>

          <div className="boot-loader-mark" aria-hidden="true">
            <svg className="boot-logo" viewBox="0 0 220 220">
              <defs>
                <linearGradient id="bootLogoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="48%" stopColor="#00ff88" />
                  <stop offset="100%" stopColor="#00ccff" />
                </linearGradient>
                <filter id="bootGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 1  0 0 0 0 0.53  0 0 0 0.8 0"
                  />
                </filter>
              </defs>

              <circle className="boot-logo-ring boot-logo-ring-back" cx="110" cy="110" r="72" style={{ '--dash': 410 }} />
              <path
                className="boot-logo-d"
                d="M78 58h22c34 0 55 20 55 52s-21 52-55 52H78V58zm22 20v64h4c20 0 30-11 30-32s-10-32-30-32h-4z"
              />
              <path
                className="boot-logo-ribbon"
                d="M142 40l18 18M160 68l18 18"
              />
              <circle className="boot-logo-core" cx="110" cy="110" r="10" />
              <circle className="boot-logo-flare" cx="110" cy="110" r="28" filter="url(#bootGlow)" />
              <circle className="boot-logo-ring boot-logo-ring-front" cx="110" cy="110" r="90" style={{ '--dash': 560 }} />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
