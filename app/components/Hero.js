/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Decorative blobs */}
      <div className="blob blob-purple" />
      <div className="blob blob-blue" />
      <div className="hero-dot hero-dot-1" />
      <div className="hero-dot hero-dot-2" />
      <div className="hero-dot hero-dot-3" />

      <div className="hero-inner">
        {/* Left: Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-greeting"
          >
            👋 Hello, I&apos;m
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hero-name"
          >
            Rakesh Roushan{" "}
            <span className="gradient-text">Arya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-tagline"
          >
            Aspiring AI/ML Engineer — Building intelligent systems with Python
            &amp; Data. Passionate about solving real-world problems through
            machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              View Projects
            </a>
            <a href="#resume" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="avatar-container"
        >
          <div className="avatar-frame">
            <div className="avatar-inner" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/profile.jpg" alt="Rakesh Roushan Arya" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
