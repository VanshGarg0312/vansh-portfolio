import "./Education.css";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Maharishi Markandeshwar University, Mullana",
    score: "8.4 CGPA",
    year: "2022 – 2026",
    level: "Undergraduate",
    highlight: true,
  },
  {
    degree: "Senior Secondary (Class XII), CBSE",
    institution: "New Happy Public School, Bilaspur, Haryana",
    score: "85.6%",
    year: "2022",
    level: "Class XII",
  },
  {
    degree: "Secondary (Class X), CBSE",
    institution: "New Happy Public School, Bilaspur, Haryana",
    score: "82%",
    year: "2020",
    level: "Class X",
  },
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title">
          My <em>Education</em>
        </h2>

        <div className="edu-list">
          {education.map((e, i) => (
            <div className={`edu-card ${e.highlight ? "highlight" : ""}`} key={i}>
              <div className="edu-left">
                <span className="edu-level">{e.level}</span>
                <span className="edu-year">{e.year}</span>
              </div>

              <div className="edu-divider" />

              <div className="edu-main">
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="edu-institution">{e.institution}</p>
              </div>

              <div className="edu-score">
                <span className="score-value">{e.score}</span>
                <span className="score-label">{e.score.includes("CGPA") ? "" : "Score"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
