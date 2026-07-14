import { navSections, profile } from '../data/portfolioData';

/**
 * Fixed top nav with blurred glass background, pill-style active link
 * highlighting, and a glowing "Hire Me" CTA that jumps to Contact.
 */
export default function Navbar({ activeSection, onNavigate }) {
  return (
    <nav>
      <div className="nav-logo">{profile.name.toUpperCase()}</div>
      <div className="nav-links">
        {navSections.map((section) => (
          <button
            key={section.id}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => onNavigate(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <button className="hire-btn" onClick={() => onNavigate('contact')}>
        Hire Me
      </button>
    </nav>
  );
}
