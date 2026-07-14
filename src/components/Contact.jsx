import { useState } from 'react';
import { contactCards, profile } from '../data/portfolioData';
import { useCardTilt } from '../hooks/useCardTilt';
import { useSectionObserver } from '../hooks/useSectionObserver';

const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SENT: 'sent',
};

/**
 * Contact form + info cards. The form is client-side only here (no
 * backend wired up) but tracks real input state and shows a brief
 * sending → sent animation on submit so it feels alive. Wire `handleSubmit`
 * up to your API/email service of choice when you're ready to go live.
 */
export default function Contact({ onSectionVisible }) {
  useSectionObserver('sec-contact', 'contact', onSectionVisible);
  const tiltHandlers = useCardTilt({ maxTilt: 7 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus(STATUS.SENDING);
    // Simulated send — replace with a real API call (fetch/EmailJS/etc.)
    setTimeout(() => {
      setStatus(STATUS.SENT);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 2500);
    }, 1200);
  }

  return (
    <section id="sec-contact" className="scroll-page" data-scroll-3d style={{ padding: '80px 0 40px' }}>
      <div className="contact-wrap">
        <p className="sec-label reveal reveal-1">// CONTACT</p>
        <h2 className="sec-title reveal reveal-2" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>
          Let's Work Together
        </h2>
        <p className="reveal reveal-3" style={{ color: 'var(--muted)', fontSize: 14, marginTop: 12, lineHeight: 1.7 }}>
          I'm always open to discussing new opportunities, interesting projects, or just
          <br />
          a friendly chat about technology.
        </p>

        <div className="contact-grid">
          <form className="contact-form reveal reveal-2" onSubmit={handleSubmit}>
            <input
              className="form-input"
              placeholder="Your Name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              placeholder="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-input"
              placeholder="Message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button className="btn-send" type="submit" disabled={status === STATUS.SENDING}>
              {status === STATUS.SENDING && <span className="spin">↻</span>}
              {status === STATUS.SENT ? '✓ Sent!' : status === STATUS.SENDING ? 'Sending...' : '✈ Send Message'}
            </button>
          </form>

          <div className="reveal reveal-3">
            <div className="contact-info">
              {contactCards.map((card) => (
                <div className="contact-card" key={card.label} {...tiltHandlers}>
                  <div className="contact-card-icon">{card.icon}</div>
                  <div>
                    <div className="contact-card-label">{card.label}</div>
                    <div className="contact-card-value">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-socials">
              <a href={profile.socials.linkedin}>LinkedIn</a>
              <a href={profile.socials.github}>GitHub</a>
              <a href={profile.socials.leetcode}>LeetCode</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
