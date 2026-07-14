import {
  achievements,
  certifications,
  education,
  educationImages,
} from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

/**
 * Academic background: two banner images for college/school, then a
 * two-column breakdown of education history, certifications, and
 * achievements. Entry cards nudge right and glow on hover.
 */
export default function Education({ onSectionVisible }) {
  useSectionObserver('sec-education', 'education', onSectionVisible);
  const tiltHandlers = useCardTilt({ maxTilt: 8 });

  return (
    <section id="sec-education" className="scroll-page" data-scroll-3d style={{ padding: '80px 0 60px' }}>
      <div className="edu-wrap">
        <p className="sec-label reveal reveal-1">// EDUCATION & CERTIFICATIONS</p>
        <h2 className="sec-title reveal reveal-2">Academic Background</h2>

        <div className="edu-images reveal reveal-3" style={{ marginTop: 24 }}>
          {educationImages.map((image) => (
            <div className="edu-img-card" key={image.label} {...tiltHandlers}>
              <img src={image.img} alt={image.label} />
              <div className="edu-img-badge" style={{ background: image.badgeColor }}>
                {image.badge}
              </div>
              <div className="edu-img-label">{image.label}</div>
            </div>
          ))}
        </div>

        <div className="edu-bottom" style={{ marginTop: 32 }}>
          <div>
            <div className="edu-col-title reveal reveal-3">
              <span>🎓</span> Education
            </div>
            {education.map((entry, index) => (
              <div className={`edu-entry reveal reveal-${index + 4}`} key={entry.name} {...tiltHandlers}>
                <div className="edu-entry-name">{entry.name}</div>
                <div className="edu-entry-deg">{entry.degree}</div>
                <div className="edu-entry-meta">
                  <span>{entry.meta}</span>
                  <span>{entry.years}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="edu-col-title reveal reveal-3">
              <span>🏆</span> Certifications
            </div>
            <ul className="cert-list reveal reveal-4">
              {certifications.map((cert) => (
                <li className="cert-item" key={cert}>
                  <div className="cert-dot" />
                  {cert}
                </li>
              ))}
            </ul>

            <div className="edu-col-title reveal reveal-4" style={{ marginTop: 24 }}>
              <span>📖</span> Achievements
            </div>
            <ul className="cert-list reveal reveal-5">
              {achievements.map((achievement) => (
                <li className="cert-item" key={achievement}>
                  <div className="cert-dot" style={{ background: '#00aaff' }} />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
