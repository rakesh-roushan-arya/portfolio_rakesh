/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    title: "Generative AI Mastermind Course",
    issuer: "Outskill",
    date: "2024",
    image: "/outskill-cert.png",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="projects-section">
      <div className="projects-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">✦ Certifications</span>
          <h2 className="section-heading">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Professional certifications and courses I have completed to advance my skills.
          </p>
        </motion.div>

        <motion.div
          className="cert-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}
        >
          {certifications.map((cert, i) => (
            <motion.div key={i} className="project-card" variants={item} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href={cert.image} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "8px", overflow: "hidden", backgroundColor: "var(--card-bg-hover)" }}>
                  {/* Fallback styling if image is missing until user uploads it */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                    Image missing
                  </div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </a>
              <div>
                <h3 className="project-title" style={{ marginBottom: "0.25rem" }}>{cert.title}</h3>
                <p className="project-desc" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
