"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          Sahana
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href={siteConfig.resumeDownloadUrl} download="Sahana-Sankanurmath-Resume.pdf" className="button button-small">
            Download Resume
          </a>
          <ThemeToggle />
        </nav>

        <div className="mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav container-shell" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={siteConfig.resumeDownloadUrl} download="Sahana-Sankanurmath-Resume.pdf" onClick={() => setOpen(false)}>
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
