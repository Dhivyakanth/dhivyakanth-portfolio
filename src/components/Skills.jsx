import { skillCategories, stats } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

/**
 * Two-column "Tech Stack & Expertise" section: stats + featured visual
 * on the left, four hoverable skill category cards on the right. Each
 * card and pill lifts slightly on hover for tactile feedback.
 */
export default function Skills({ onSectionVisible }) {
  useSectionObserver('sec-skills', 'skills', onSectionVisible);
  const tiltHandlers = useCardTilt({ maxTilt: 9 });

  return (
    <section id="sec-skills" className="scroll-page" data-scroll-3d style={{ padding: '80px 0 60px' }}>
      <div className="skills-wrap">
        <div className="skills-left">
          <p className="sec-label reveal reveal-1">// SKILLS</p>
          <h2 className="sec-title reveal reveal-2">Tech Stack &amp; Expertise</h2>
          <p className="sec-desc reveal reveal-3">
            <span className="g">&lt;p&gt;</span> Continuously evolving my toolkit to build{' '}
            <span className="b">intelligent, scalable</span> solutions across the full stack.{' '}
            <span className="g">&lt;/p&gt;</span>
          </p>

          <div className="skills-stats reveal reveal-3" style={{ marginTop: 28 }}>
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="skills-img-wrap reveal reveal-4" style={{ marginTop: 24 }} {...tiltHandlers}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
              alt="AI full stack development"
            />
            <div className="skills-img-label">AI FULL STACK DEVELOPMENT</div>
          </div>
        </div>

        <div className="skills-right">
          {skillCategories.map((category, index) => (
            <div
              className={`skill-cat reveal reveal-${index + 1} ${
                category.active ? 'skill-cat-active' : ''
              }`}
              key={category.title}
              {...tiltHandlers}
            >
              <div className="skill-cat-header">
                <div className="skill-icon">{category.icon}</div>
                <div className="skill-cat-title">{category.title}</div>
                <div className="skill-cat-num">{category.num}</div>
              </div>
              <div className="skill-pills">
                {category.pills.map((pill) => (
                  <div className="pill" key={pill}>
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
