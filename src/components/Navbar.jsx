import { useState } from "react";
import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 60;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="logo-bracket">[</span>VG<span className="logo-bracket">]</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/vansh-portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Resume
        </a>

        <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>Hire Me</a>
      </div>
    </nav>
  );
}
