const NAV_LINKS = [
  { label: "Accueil",  href: "#hero",       num: "01" },
  { label: "À propos", href: "#about",      num: "02" },
  { label: "Expérience", href: "#experience", num: "03" },
  { label: "Projets",  href: "#projets",    num: "04" },
  { label: "Contact",  href: "#contact",    num: "05" },
];

export default function NavLinks({ active, onLinkClick, menuOpen }) {
  return (
    <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => onLinkClick(link.href)}
          >
            <span className="nav-num">{link.num}</span>
            <span className="nav-label">{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
