"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { assetPath } from "@/lib/asset-path";

export function ProjectsGrid() {
  return (
    <>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article key={project.slug} className="project-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <div className={`project-visual ${project.image ? "project-visual-image" : ""}`}>
              {project.image ? <img src={assetPath(project.image)} alt={`${project.title} preview`} /> : <><span>{String(index + 1).padStart(2, "0")}</span><i /></>}
            </div>
            <div className="project-content">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              <div className="project-actions">
                <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code on GitHub`} className="plain-icon"><span>Code</span><Github size={18} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
