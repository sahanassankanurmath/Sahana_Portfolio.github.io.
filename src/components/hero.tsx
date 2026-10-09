"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="container-shell hero-section">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 className="display-title">Sahana Sankanurmath</h1>
        <p className="hero-copy">{siteConfig.tagline}</p>
        <div className="hero-actions">
          <a href="#contact" className="button button-accent">Contact me</a>
          <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="button button-ghost">View Resume</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-art">
        <div className="portrait-orbit">
          <div className="portrait-circle">
          {siteConfig.avatarUrl ? (
            <Image
              src={siteConfig.avatarUrl}
              alt={`Portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(max-width: 860px) 90vw, 420px"
              className="portrait-image"
            />
          ) : (
            <div className="portrait-monogram">SS</div>
          )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
