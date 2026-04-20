"use client";

import { motion } from "framer-motion";

const projects = [
  {
    icon: "🏠",
    title: "House Price Prediction",
    desc: "Built a regression model to predict house prices based on features like location, size, bedrooms, and amenities using scikit-learn pipelines.",
    tech: ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib"],
    link: "#",
  },
  {
    icon: "📧",
    title: "Spam Email Classifier",
    desc: "Developed a text classification model to detect spam emails using NLP techniques, TF-IDF vectorization, and machine learning algorithms.",
    tech: ["Python", "NLTK", "scikit-learn", "Pandas", "TF-IDF"],
    link: "#",
  },
  {
    icon: "🎬",
    title: "Movie Recommendation System",
    desc: "Created a content-based recommendation engine that suggests movies based on user preferences, genres, and viewing patterns.",
    tech: ["Python", "Pandas", "scikit-learn", "Cosine Similarity"],
    link: "#",
  },
  {
    icon: "💬",
    title: "Simple Chatbot",
    desc: "Built an interactive chatbot using Python that responds to user queries with pattern matching, intent recognition, and predefined responses.",
    tech: ["Python", "NLTK", "TensorFlow", "JSON"],
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

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">✦ Projects</span>
          <h2 className="section-heading">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subheading">
            Beginner-level AI/ML projects showcasing my learning journey and
            hands-on experience with data science tools.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((p, i) => (
            <motion.div key={i} className="project-card" variants={item}>
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Code
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
