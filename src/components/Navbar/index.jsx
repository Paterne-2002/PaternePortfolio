import { useState, useEffect } from "react";
import NavLogo    from "./NavLogo";
import NavLinks   from "./NavLinks";
import NavActions from "./NavActions";
import "../../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer pour détecter la section active
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          // Mapper les IDs des sections aux hrefs du navbar
          const hrefMap = {
            hero: "#hero",
            about: "#about",
            experience: "#experience",
            projets: "#projets",
            contact: "#contact"
          };
          setActive(hrefMap[sectionId] || "#hero");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);

    // Scroll vers le centre de la section
    const targetId = href.substring(1); // Enlever le #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <NavLogo />
      <NavLinks active={active} onLinkClick={handleLinkClick} menuOpen={menuOpen} />
      <NavActions />
      <button
        className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
