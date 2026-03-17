import { useState, useEffect } from "react";
import Button     from "../components/Button";
import "../styles/Home.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROLES = [
  "Développeur Full Stack",
  "Développeur React",
  "Développeur Django",
  "Créateur d'interfaces modernes",
];

const socials = [
  { label: "GitHub",   href: "https://github.com/Paterne-2002",   icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" },
  { label: "Facebook", href: "https://www.facebook.com/fanilonirina.kanto.paterne/", icon: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
];

// ─── Typewriter hook ──────────────────────────────────────────────────────────

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="home">

      {/* Fond décoratif */}
      <div className="home__blob home__blob--1" />
      <div className="home__blob home__blob--2" />

      {/* Grille de points */}
      <div className="home__grid" aria-hidden="true" />

      {/* Particules flottantes */}
      {[...Array(6)].map((_, i) => (
        <span key={i} className={`home__particle home__particle--${i+1}`} aria-hidden="true" />
      ))}

      <div className="home__inner">
        {/* ── Contenu gauche ── */}
        <div className="home__content">

        <p className="home__greeting">
          <span className="home__greeting-line" />
          Bonjour, je suis
        </p>

        <h1 className="home__name">
          <span className="home__name-line">Fanilonirina Kanto</span>
          <span className="home__name-line home__name-accent">Paterne</span>
        </h1>

        <div className="home__role-wrapper">
          <span className="home__role">{role}</span>
          <span className="home__cursor" aria-hidden="true">|</span>
        </div>

        <div className="home__socials">
          <span className="home__socials-label">Me retrouver sur</span>
          <div className="home__socials-icons">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="home__social-link" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="home__ctas">
          <Button href="#contact" variant="primary">
            Me contacter
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Button>
          <Button href="/assets/cv.pdf" variant="outline" download>
            Télécharger CV  
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 20h16M12 4v12m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
        </div>

      </div>

      {/* ── Photo droite ── */}
      <div className="home__photo">
        <div className="home__photo-ring home__photo-ring--outer" />
        <div className="home__photo-ring home__photo-ring--inner" />
        <div className="home__photo-glow" />
        <div className="home__photo-placeholder">
          <img src="/assets/paterne.jpg" alt="Paterne" />
        </div>
      </div>
      </div>
    </section>
  );
}
