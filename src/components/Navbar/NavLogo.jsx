export default function NavLogo() {
  return (
    <a href="#hero" className="navbar__logo" aria-label="Paterne">
      <span className="navbar__logo-text">
        <span className="navbar__logo-pat">PORT</span>
        <span className="navbar__logo-erne">FOLIO</span>
      </span>
      <span className="navbar__logo-dot-wrapper" aria-hidden="true">
        <span className="navbar__logo-dot" />
        <span className="navbar__logo-ring" />
      </span>
    </a>
  );
}
