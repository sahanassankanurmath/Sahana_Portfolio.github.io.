"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/lib/content";

export function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={onClose}>
      <div className="modal-card" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-topline">
          <div><p className="eyebrow">{project.eyebrow}</p><h2 id="project-title">{project.title}</h2></div>
          <button type="button" onClick={onClose} className="icon-button" aria-label="Close project details"><X size={18} /></button>
        </div>
        <p className="modal-description">{project.description}</p>
        <h3>Highlights</h3>
        <ul className="highlight-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="tag-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button button-accent modal-link">Open project on GitHub <ArrowUpRight size={17} /></a>
      </div>
    </div>
  );
}
