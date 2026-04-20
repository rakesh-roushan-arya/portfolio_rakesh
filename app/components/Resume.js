"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-inner">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-icon">📄</div>
          <h2 className="resume-heading">
            Get My <span className="gradient-text">Resume</span>
          </h2>
          <p className="resume-text">
            Interested in working together? Download my resume to learn more
            about my background, skills, and experience.
          </p>
          <div className="resume-buttons">
            <a href="#" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="#" className="btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
