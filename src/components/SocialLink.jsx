import "../styles/SocialLink.css";

export default function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social-link"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d={icon} />
      </svg>
    </a>
  );
}
