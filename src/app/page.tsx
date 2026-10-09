import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { siteConfig } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="section-shell about-section">
        <div className="section-heading"><p className="eyebrow">About</p><h2 className="section-title about-title">Who I Am</h2></div>
        <div className="about-grid">
          <p className="large-copy">{siteConfig.bio}</p>
        </div>
      </section>

      <section className="section-shell credentials-section">
        <div className="credentials-grid">
          <div id="education" className="credential-column">
            <div className="section-heading"><p className="eyebrow">Education</p><h2 className="section-title about-title">Education</h2></div>
            {siteConfig.education.map((item) => (
              <article className="credential-card" key={`${item.title}-${item.institution}`}>
                <GraduationCap size={24} />
                <p className="credential-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="credential-institution">{item.institution}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="credential-column contact-information-column">
            <div className="section-heading"><p className="eyebrow">Contact</p><h2 className="section-title about-title">Contact Information</h2></div>
            <div className="contact-information-card">
              <div className="contact-detail"><Phone size={19} aria-hidden="true" /><div><span>Phone</span><a href="tel:+918073357573">{siteConfig.phone}</a></div></div>
              <div className="contact-detail"><Mail size={19} aria-hidden="true" /><div><span>Mail</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div>
              <div className="contact-detail"><Linkedin size={19} aria-hidden="true" /><div><span>LinkedIn</span><a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">linkedin.com/in/sahana-s-sankanurmath</a></div></div>
              <div className="contact-detail"><Github size={19} aria-hidden="true" /><div><span>GitHub</span><a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">github.com/sahanassankanurmath</a></div></div>
            </div>
          </div>

        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-heading"><p className="eyebrow">Experience</p><h2 className="section-title about-title">Professional Experience</h2></div>
        <div className="experience-list">
          {siteConfig.experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div>
                <p className="eyebrow">{item.type}</p>
                <h3>{item.role}</h3>
                <a className="company-link" href={item.companyUrl} target="_blank" rel="noreferrer">{item.company} ↗</a>
                <p className="experience-period">{item.period}</p>
              </div>
              <div>
                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tag-row experience-tags">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell projects-section">
        <div className="section-heading"><p className="eyebrow">Projects</p><h2 className="section-title about-title">Featured Projects</h2><p className="section-description">A selection of my recent work and personal projects</p></div>
        <ProjectsGrid />
      </section>

      <section id="skills" className="section-shell skills-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title about-title">Technical Skills</h2>
          <p className="section-description">Building AI systems that see, reason and act.</p>
        </div>

        <div className="skill-language-strip">
          <h3>Languages</h3>
          <div className="skill-pills">
            {siteConfig.languages.map((language) => <span className="skill-pill" key={language}>{language}</span>)}
          </div>
        </div>

        <div className="skill-groups">
          {siteConfig.skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <h3><span className="skill-card-icon" aria-hidden="true">{index === 0 ? "◈" : index === 1 ? "Σ" : index === 2 ? "◉" : index === 3 ? "<>" : index === 4 ? "▦" : "⚙"}</span>{group.title}</h3>
              {group.sections.map((section) => (
                <div className="skill-subgroup" key={section.label}>
                  <p className="skill-subgroup-label">{section.label}</p>
                  <div className="skill-pills">
                    {section.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <p className="contact-about-copy">{siteConfig.bio}</p>
            <a className="email-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={17} /></a>
            <div className="contact-location"><MapPin size={18} aria-hidden="true" /><span>Ilkal, Karnataka, India 🇮🇳</span></div>
            <div className="contact-socials">
              <p>Connect me</p>
              <div className="contact-social-links">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=sankanurmathsahana@gmail.com&tf=cm" target="_blank" rel="noreferrer" aria-label={`Email Sahana at ${siteConfig.email}`} title="Email"><Mail size={22} /></a>
                <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="Connect with Sahana on GitHub" title="GitHub"><Github size={22} /></a>
                <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Connect with Sahana on LinkedIn" title="LinkedIn"><Linkedin size={22} /></a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
