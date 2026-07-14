import { useState } from 'react';
import { mediaCards, projects } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

/**
 * Projects showcase: a horizontally scrollable media strip up top, then
 * a fanned "card deck" of three project cards that re-arranges and
 * brings the hovered card to the front with a smooth spring-like
 * transition (handled by the cubic-bezier transition in projects.css).
 */
export default function Projects({ onSectionVisible }) {
  useSectionObserver('sec-proj', 'projects', onSectionVisible, 0.2);
  const tiltHandlers = useCardTilt({ maxTilt: 8 });

  const [hoveredIndex, setHoveredIndex] = useState(1);

  return (
    <section id="sec-proj" className="projects-section scroll-page" data-scroll-3d>
      <div className="projects-header">
        <div>
          <p className="sec-label reveal reveal-1">// PROJECTS</p>
          <h2 className="sec-title reveal reveal-2" style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            A Showcase of My Latest Projects
          </h2>
        </div>
        <div className="projects-header-right reveal reveal-2">
          <span className="g">&lt;p&gt;</span> Each project represents a unique challenge solved
          with <span className="b">cutting-edge technology</span>. <span className="g">&lt;/p&gt;</span>
        </div>
      </div>

      <div className="media-strip">
        {mediaCards.map((card, index) => (
          <div className={`media-card reveal reveal-${index + 1}`} key={card.label} {...tiltHandlers}>
            <img src={card.img} alt={card.label} />
            <div className="media-badge">{card.badge}</div>
            <div className="media-label">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="project-deck-container reveal">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const { x, y, rot } = project.offset;

          return (
            <div
              key={project.title}
              className="proj-card"
              onMouseEnter={() => setHoveredIndex(index)}
              {...tiltHandlers}
              style={{
                transform: `translateX(${x}px) translateY(${y}px) rotate(${rot}deg) ${
                  isHovered ? 'scale(1.06)' : 'scale(0.96)'
                } rotateX(var(--card-tilt-x, 0deg)) rotateY(var(--card-tilt-y, 0deg))`,
                zIndex: isHovered ? 10 : 5 - Math.abs(hoveredIndex - index),
                opacity: isHovered ? 1 : 0.6,
                filter: isHovered ? 'none' : 'blur(1px)',
                boxShadow: isHovered
                  ? '0 24px 80px rgba(0,0,0,.7), 0 0 40px rgba(0,255,136,0.15)'
                  : 'none',
              }}
            >
              <div className="proj-card-top">
                <div className="proj-card-badge">{project.badge}</div>
                <div className="proj-card-arrow">↗</div>
              </div>
              <div className="proj-card-title">{project.title}</div>
              <div className="proj-card-desc">{project.desc}</div>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <div className="proj-tag" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
