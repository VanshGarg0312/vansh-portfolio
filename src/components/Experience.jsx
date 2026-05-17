import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-label">Work History</div>
        <h2 className="section-title">
          Professional <em>Experience</em>
        </h2>

        <div className="exp-timeline">
          <div className="timeline-bar" />

          <div className="exp-item">
            <div className="exp-dot">
              <div className="dot-inner" />
            </div>

            <div className="exp-content">
              <div className="exp-meta">
                <span className="exp-date">Jun 2024 – Jul 2024</span>
                <span className="exp-type">Internship</span>
              </div>

              <div className="exp-header">
                <div>
                  <h3 className="exp-role">Software Development Intern</h3>
                  <div className="exp-company">
                    <span className="company-name">OctaNet Services Pvt. Ltd.</span>
                  </div>
                </div>
              </div>

              <div className="exp-tech-row">
                {["HTML", "CSS", "JavaScript", "Java"].map((t) => (
                  <span className="exp-tech" key={t}>{t}</span>
                ))}
              </div>

              <ul className="exp-bullets">
                <li>Utilized HTML, CSS, JavaScript, and Java to deliver high-quality solutions within deadlines, maintaining strong code quality standards throughout the engagement.</li>
                <li>Enhanced user engagement and client satisfaction through continuous updates, ongoing support, and iterative improvements to web-based deliverables.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-end">
            <div className="timeline-end-dot" />
          </div>
          
          {/* <div className="exp-item exp-upcoming">
            <div className="exp-dot dim">
              <div className="dot-inner" />
            </div>
            <div className="exp-content upcoming-card">
              <span className="upcoming-label">Your next great hire →</span>
              <p>Open to full-time SWE, backend, or ML engineering roles. Ready to contribute from day one.</p>
              <a href="#contact" className="upcoming-cta">Let's Talk</a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
