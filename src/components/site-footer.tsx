import { siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="footer-links">
          <a className="footer-resume-link" href={siteConfig.resumeDownloadUrl} download="Sahana-Sankanurmath-Resume.pdf">
            Download Resume
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
