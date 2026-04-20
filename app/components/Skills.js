"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "NLTK"],
  },
  {
    title: "Concepts & Techniques",
    skills: [
      "Machine Learning",
      "Data Cleaning",
      "Model Evaluation",
      "Feature Engineering",
      "Regression",
      "Classification",
      "NLP Basics",
      "Data Visualization",
    ],
  },
];

const certs = [
  {
    icon: "🏅",
    title: "Certification 1",
    subtitle: "Add your certificate here",
  },
  {
    icon: "🎓",
    title: "Certification 2",
    subtitle: "Add your certificate here",
  },
  {
    icon: "📜",
    title: "Certification 3",
    subtitle: "Add your certificate here",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">✦ Skills &amp; Certifications</span>
          <h2 className="section-heading">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section-subheading">
            Technologies, libraries, and concepts I work with on my AI/ML
            journey.
          </p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              className="skill-category"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="skill-category-title">{cat.title}</div>
              <motion.div
                className="skills-tags"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cat.skills.map((skill, j) => (
                  <motion.span key={j} className="skill-tag" variants={tagItem}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "3rem" }}
        >
          <div
            className="skill-category-title"
            style={{ paddingLeft: 0, marginBottom: "1.5rem", fontSize: "0.85rem" }}
          >
            Certifications
          </div>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="cert-icon">{c.icon}</div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-subtitle">{c.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
