import { useState } from 'react';
import { profile } from '../data/portfolioData';
import { useSectionObserver } from '../hooks/useSectionObserver';

/**
 * Landing hero: animated role-rotator, glitch-accented headline,
 * tilting profile photo with a glow that appears on hover, and the
 * primary contact / resume / social CTAs. Reveal timings are staggered
 * via inline animationDelay so the whole hero cascades in on load.
 */
export default function Hero({ onSectionVisible }) {
  useSectionObserver('sec-about', 'about', onSectionVisible);

  return (
    <section id="sec-about" className="hero scroll-page" data-scroll-3d>
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-scan" aria-hidden="true" />

      <p className="hero-tag reveal visible" style={{ animationDelay: '.1s' }}>
        // Hello World
      </p>

      <div
        className="hero-title reveal visible glitch"
        data-text="I'M A"
        style={{ animationDelay: '.2s', marginBottom: 0 }}
      >
        I'M A
      </div>

      <div
        className="hero-title reveal visible"
        style={{
          animationDelay: '.3s',
          minHeight: '1.1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: 'var(--green)' }}>FULL STACK</span>
        <span> DEVELOPER</span>
      </div>

      <div className="hero-img-wrap reveal visible" style={{ animationDelay: '.55s' }}>
        <div className="hero-img-glow" />
        <img src={profile.avatar} alt={profile.name} />
        <div className="hero-dot" />
      </div>

      <div className="hero-code reveal visible" style={{ animationDelay: '.65s' }}>
        <span className="g">&lt;p&gt;</span> I CRAFT FAST, SCALABLE, AND{' '}
        <span className="g b">INTELLIGENT SYSTEMS</span> WITH MODERN AI/ML
        <br />
        FRAMEWORKS — COMBINING DEEP LEARNING WITH ROBUST{' '}
        <span className="g b">
          FULL-STACK
          <br />
          SOLUTIONS
        </span>{' '}
        USING REACT &amp; NODE.JS. <span className="g">&lt;/p&gt;</span>
      </div>

      <p
        className="reveal visible"
        style={{
          animationDelay: '.7s',
          fontSize: 13,
          color: 'var(--muted)',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {profile.bio}
      </p>

      <div className="hero-contacts reveal visible" style={{ animationDelay: '.75s' }}>
        <span>✉ {profile.email}</span>
        <span>📞 {profile.phone}</span>
        <span>📍 {profile.location}</span>
      </div>

      <div className="hero-actions reveal visible" style={{ animationDelay: '.85s' }}>
        <button className="btn-resume">⬇ My Resume</button>
        <div className="hero-links">
          <a href={profile.socials.linkedin}>/ LinkedIn</a>
          <a href={profile.socials.github}>/ GitHub</a>
          <a href={profile.socials.leetcode}>/ LeetCode</a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-arrow" />
        <span style={{ fontSize: 9, fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: 2 }}>
          SCROLL
        </span>
      </div>
    </section>
  );
}
