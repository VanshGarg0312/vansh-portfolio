import "./Skills.css";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["Java", "Python", "C#", "JavaScript", "SQL"],
    color: "#e8c547",
  },
  {
    category: "Frameworks & Libraries",
    icon: "[ ]",
    skills: ["Spring Boot", "ASP.NET Core", "Flask", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    color: "#4a9eff",
  },
  {
    category: "Databases",
    icon: "⟨ ⟩",
    skills: ["MySQL", "SQL", "JDBC"],
    color: "#47e8a0",
  },
  {
    category: "Tools & Platforms",
    icon: "# ",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Android Studio", "Arduino IDE", "PyCharm"],
    color: "#e85d47",
  },
  {
    category: "Methodologies",
    icon: "→",
    skills: ["Agile/Scrum", "CI/CD Concepts", "OOP", "REST APIs"],
    color: "#c47fff",
  },
  {
    category: "Soft Skills",
    icon: "★",
    skills: ["Problem-Solving", "Team Collaboration", "Critical Thinking", "Adaptable", "Enthusiastic", "Determined"],
    color: "#ff9f47",
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">Technical Stack</div>
        <h2 className="section-title">
          Skills & <em>Expertise</em>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="group-header">
                <span className="group-icon" style={{ color: group.color }}>{group.icon}</span>
                <span className="group-title">{group.category}</span>
              </div>
              <div className="group-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill} style={{ "--tag-color": group.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
