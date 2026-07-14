import { experiences } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

/**
 * Vertical timeline of internships. The connecting line draws itself
 * top-to-bottom on mount (see .timeline::before in experience.css),
 * each dot pulses with a soft ring, and cards nudge right on hover.
 */
export default function Experience({ onSectionVisible }) {
  useSectionObserver('sec-experience', 'experience', onSectionVisible);
  const tiltHandlers = useCardTilt({ maxTilt: 8 });

  return (
    <section id="sec-experience" className="scroll-page" data-scroll-3d style={{ padding: '80px 0 60px' }}>
      <div className="exp-wrap">
        <div>
          <p className="sec-label reveal reveal-1">// EXPERIENCE</p>
          <h2 className="sec-title reveal reveal-2">
            Professional Working
            <br />
            Experience
          </h2>
          <div className="exp-img-wrap reveal reveal-3" style={{ marginTop: 24 }} {...tiltHandlers}>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
              alt="AI work experience"
            />
            <div className="exp-img-label">AI WORK EXPERIENCE</div>
          </div>
        </div>

        <div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                className="timeline-item reveal"
                style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                key={exp.company}
              >
                <div className="timeline-dot" />
                <div className="timeline-card" {...tiltHandlers}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 12,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-role">{exp.role}</div>
                  </div>
                  <div className="timeline-date">{exp.date}</div>
                  <div className="timeline-divider" />
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
