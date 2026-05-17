import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Explainable AI-Based Fake News Detection",
    role: "Machine Learning Developer",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/VanshGarg0312/final-project.git",
    color: "#4a9eff",
    number: "01",
    bullets: [
      "Developed a ML model for fake news classification with high accuracy",
      "Performed text preprocessing and feature extraction pipeline",
      "Implemented explainability techniques (XAI) for model predictions",
      "Evaluated performance using accuracy, precision, recall metrics",
    ],
    tag: "Machine Learning",
  },

  {
    id: 2,
    title: "FinTrack — Banking Management System",
    role: "Java Developer",
    tech: ["Java", "OOPs", "MySQL", "JDBC"],
    github: "https://github.com/VanshGarg0312/FinTrack.git",
    color: "#e8c547",
    number: "02",
    bullets: [
      "Developed a full banking system for customer and account operations",
      "Implemented account creation, deposits, withdrawals & transaction tracking",
      "Designed modular codebase using object-oriented principles",
      "Simplified banking workflows to improve overall user experience",
    ],
    tag: "Backend",
  },

  {
    id: 3,
    title: "TNIGRS — Online Land Registration",
    role: "Java Developer",
    tech: ["Java", "Spring Boot", "SQL"],
    // github: "https://github.com/yourusername/tnigrs",
    color: "#47e8a0",
    number: "03",
    bullets: [
      "Contributed to digitizing property registration processes",
      "Worked on user data handling, document processing & workflows",
      "Collaborated to improve system performance and efficiency",
      "Built RESTful APIs using Spring Boot for backend services",
    ],
    tag: "Full Stack",
  },

  {
    id: 4,
    title: "MDT — Mobile Diagnostic Tool",
    role: "Java Developer",
    tech: ["Java", "OOPs", "File Handling", "System Diagnostics"],
    github: "https://github.com/VanshGarg0312/Mobile-Diagnostic-tool-main.git",
    color: "#ff9f43",
    number: "04",
    bullets: [
      "Developed a mobile diagnostic tool for analyzing device performance and system information",
      "Implemented features for battery, storage, memory, and device status monitoring",
      "Designed modular architecture using object-oriented programming principles",
      "Improved system diagnostics workflow with efficient data processing and reporting",
    ],
    tag: "Java Project",
  },
  
  {
    id: 5,
    title: "Quora Post Application",
    role: "Full Stack Developer",
    tech: ["REST API", "EJS", "JavaScript", "Express.js"],
    github: "https://github.com/VanshGarg0312/Quora-Posts.git",
    color: "#ff6b6b",
    number: "05",
    bullets: [
      "Developed a Quora-like post sharing platform with CRUD operations",
      "Built RESTful APIs for creating, updating, deleting, and fetching posts",
      "Designed dynamic frontend pages using EJS templating engine",
      "Implemented server-side rendering with Express.js",
    ],
    tag: "Full Stack",
  }
];

export default function Projects() {
  const [active, setActive] = useState(1);

  const project = projects.find((p) => p.id === active);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-label">Portfolio</div>

        <h2 className="section-title">
          Featured <em>Projects</em>
        </h2>

        <div className="projects-layout">
          
          {/* LEFT SIDE TABS */}
          <div className="project-tabs">
            {projects.map((p) => (
              <button
                key={p.id}
                className={`project-tab ${
                  active === p.id ? "active" : ""
                }`}
                onClick={() => setActive(p.id)}
                style={{ "--p-color": p.color }}
              >
                <span className="tab-number">{p.number}</span>

                <div className="tab-info">
                  <span className="tab-title">{p.title}</span>
                  <span className="tab-tag">{p.tag}</span>
                </div>

                <span className="tab-arrow">→</span>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="project-detail">
            
            <div className="detail-header">
              <div
                className="detail-tag"
                style={{
                  color: project.color,
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {project.tag}
              </div>

              <span
                className="detail-number"
                style={{ color: project.color }}
              >
                {project.number}
              </span>
            </div>

            <h3 className="detail-title">{project.title}</h3>

            <p className="detail-role">{project.role}</p>

            {/* BULLETS */}
            <ul className="detail-bullets">
              {project.bullets.map((b, i) => (
                <li key={i}>
                  <span
                    className="bullet-dot"
                    style={{ background: project.color }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            {/* TECH STACK */}
            <div className="detail-tech">
              <span className="tech-label">Tech Stack</span>

              <div className="tech-chips">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-chip"
                    style={{ "--chip-color": project.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.github && (
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                style={{
                  background: project.color,
                }}
              >
                <FaGithub />
                View Source Code
              </a>
            </div>
          )}

          </div>
        </div>
      </div>
    </section>
  );
}