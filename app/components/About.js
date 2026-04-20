"use client";

import { motion } from "framer-motion";

const aboutItems = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    text: "Beginner in AI and Machine Learning, actively learning core algorithms, neural networks, and data-driven decision making.",
  },
  {
    icon: "🐍",
    title: "Python & Data Analysis",
    text: "Learning Python, Pandas, NumPy, and data visualization to clean, analyze, and extract insights from real-world datasets.",
  },
  {
    icon: "🧠",
    title: "Problem Solver",
    text: "Interested in solving real-world problems using data — from predicting trends to building intelligent classifiers.",
  },
  {
    icon: "📈",
    title: "Continuous Growth",
    text: "Focused on continuous learning and growth, building projects, earning certifications, and staying updated with the latest in AI.",
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

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">✦ About Me</span>
          <h2 className="section-heading">
            Aspiring <span className="gradient-text">AI/ML Engineer</span>
          </h2>
          <p className="section-subheading">
            I&apos;m passionate about building intelligent systems and turning data
            into meaningful insights.
          </p>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {aboutItems.map((a, i) => (
            <motion.div key={i} className="about-card" variants={item}>
              <div className="about-icon">{a.icon}</div>
              <div>
                <div className="about-card-title">{a.title}</div>
                <div className="about-card-text">{a.text}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
