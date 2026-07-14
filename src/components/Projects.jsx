import { useState, useEffect, useRef } from 'react';
import { mediaCards, projects } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

export default function Projects({ onSectionVisible }) {
  useSectionObserver('sec-projects', 'projects', onSectionVisible, 0.2);
  const tiltHandlers = useCardTilt({ maxTilt: 8 });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSpread, setIsSpread] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const deckRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSpread(true);
        }
      },
      { threshold: 0.2 }
    );

    if (deckRef.current) {
      observer.observe(deckRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCardStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isExpanded = expandedIndex === index;
    const { x, y, rot } = projects[index].offset;

    if (isExpanded) {
      return {
        transform: 'translateX(0) translateY(0) rotate(0deg) scale(1.05)',
        zIndex: 100,
        opacity: 1,
        filter: 'none',
        boxShadow: '0 24px 80px rgba(0,0,0,.8), 0 0 60px rgba(0,255,136,0.2)',
        position: 'relative',
      };
    }

    if (!isSpread) {
      return {
        transform: `translateX(0) translateY(${index * -2}px) rotate(0deg) scale(0.92)`,
        zIndex: 10 - index,
        opacity: 1,
        filter: 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,.4)',
      };
    }

    return {
      transform: `translateX(${x}px) translateY(${y}px) rotate(${rot}deg) ${
        isHovered ? 'scale(1.06)' : 'scale(0.96)'
      } rotateX(var(--card-tilt-x, 0deg)) rotateY(var(--card-tilt-y, 0deg))`,
      zIndex: isHovered ? 50 : 10 - Math.abs((hoveredIndex ?? 2) - index),
      opacity: isHovered ? 1 : 0.7,
      filter: isHovered ? 'none' : 'blur(1px)',
      boxShadow: isHovered
        ? '0 24px 80px rgba(0,0,0,.7), 0 0 40px rgba(0,255,136,0.15)'
        : 'none',
    };
  };

  return (
    <section id="sec-projects" className="projects-section scroll-page" data-scroll-3d>
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

      <div className="project-deck-container reveal" ref={deckRef}>
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={project.title}
              className={`proj-card ${isExpanded ? 'expanded' : ''}`}
              onMouseEnter={() => !isExpanded && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
              {...tiltHandlers}
              style={getCardStyle(index)}
            >
              <div className="proj-card-top">
                <div className="proj-card-badge">{project.badge}</div>
                <div className="proj-card-arrow">{isExpanded ? '✕' : '↗'}</div>
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
