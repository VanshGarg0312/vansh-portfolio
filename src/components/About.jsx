import "./About.css";

const stats = [
  { value: "8.4", label: "CGPA", sub: "B.Tech CSE" },
  { value: "5+", label: "Projects", sub: "Built & Deployed" },
  { value: "5", label: "Certs", sub: "ServiceNow, etc." },
  { value: "1", label: "Internship", sub: "Software Dev" },
  { value: "350+", label: "Ques. Solved", sub: "Leetcode" },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Crafting code that <em>matters</em>
            </h2>

            <div className="about-text">
              <p>
                I'm a Computer Science Engineering graduate from Maharishi Markandeshwar University, 
                passionate about building scalable software systems and intelligent ML solutions that 
                solve real-world problems.
              </p>
              <p>
                With hands-on experience across backend development, machine learning, and full-stack 
                projects, I thrive at the intersection of clean architecture and practical impact. 
                I adapt quickly to new technologies and love collaborating in Agile environments.
              </p>
              <p>
                When I'm not coding, I'm sharpening my problem-solving skills on LeetCode or 
                exploring the latest in technologies.
              </p>
            </div>

            <div className="about-detail-row">
              <div className="detail-item">
                <span className="detail-key">Email</span>
                <a href="mailto:vanshgarg0312@gmail.com" className="detail-val link">vanshgarg0312@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="detail-key">Phone</span>
                <span className="detail-val">+91 9729880603</span>
              </div>
              <div className="detail-item">
                <span className="detail-key">Location</span>
                <span className="detail-val">Bilaspur, YNR, Haryana - 135102</span>
              </div>
              <div className="detail-item">
                <span className="detail-key">Status</span>
                <span className="detail-val available">Open to Work</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-sub">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="about-card-deco">
              <div className="deco-line" />
              <div className="deco-text">
                <span className="mono-small">// currently</span>
                <strong>Looking for full-time opportunities in software development</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
