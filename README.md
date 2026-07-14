# Dhivyakanth — Portfolio

A cinematic, animation-rich developer portfolio built with React + Vite.
Features a custom particle cursor, animated starfield background, scroll-triggered
reveal animations, a glowing nav with active-section tracking, and an interactive
fanned project card deck.

## Tech Stack

- **React 18** — component architecture
- **Vite** — dev server & build tooling
- **Vanilla CSS** — custom properties, keyframe animations, no framework overhead
- **Canvas API** — starfield + custom cursor particle trail

## Project Structure

```
dhivyakanth-portfolio/
├── index.html                 # Vite entry HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Top-level layout & section wiring
│   ├── data/
│   │   └── portfolioData.js    # ALL content lives here — edit this file
│   ├── hooks/
│   │   ├── useReveal.js         # IntersectionObserver-driven entrance animations
│   │   └── useSectionObserver.js # Tracks which section is active for nav + bg
│   ├── components/
│   │   ├── Starfield.jsx        # Canvas starfield + shooting stars
│   │   ├── CustomCursor.jsx     # Particle-trail cursor replacement
│   │   ├── ProgressBar.jsx      # Scroll progress indicator
│   │   ├── ScrollSideIndicator.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx             # About / landing section
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx       # Timeline
│   │   ├── Projects.jsx         # Media strip + fanned card deck
│   │   ├── Education.jsx
│   │   ├── Contact.jsx          # Working form state (wire up your own backend)
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   └── styles/
│       ├── index.css            # Imports every module below
│       ├── base.css             # Resets + CSS variables
│       ├── cursor.css
│       ├── nav.css
│       ├── hero.css
│       ├── section-header.css
│       ├── skills.css
│       ├── experience.css
│       ├── projects.css
│       ├── education.css
│       ├── contact.css
│       └── animations.css       # Reveal/glitch/shimmer keyframes
```

## Getting Started

```bash
npm install
npm run dev       # starts dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Editing Content

Everything text-based — name, bio, skills, experience, projects, education,
contact info — lives in **`src/data/portfolioData.js`**. Update that file and
every component picks up the changes automatically; you don't need to touch
component code to change content.

To swap your profile photo or project images, replace the URLs in that same
file (`profile.avatar`, `mediaCards[].img`, `educationImages[].img`, etc.) with
your own image paths — either hosted URLs or local files placed in `public/`
and referenced as `/your-image.jpg`.

## Wiring Up the Contact Form

The contact form (`src/components/Contact.jsx`) currently simulates a send
with a `setTimeout`. To make it functional, replace the body of `handleSubmit`
with a real request — e.g. a `fetch()` call to your own API route, or a
service like EmailJS or Formspree.

## Performance Notes

- The starfield and cursor trail both run on `<canvas>` with
  `requestAnimationFrame`, kept off the main DOM tree for smooth 60fps scroll.
- The custom cursor automatically disables itself on touch/coarse-pointer
  devices (see the `matchMedia('(pointer: coarse)')` check).
- `prefers-reduced-motion: reduce` is respected — reveal/glitch animations
  are skipped for users who've requested reduced motion at the OS level.
