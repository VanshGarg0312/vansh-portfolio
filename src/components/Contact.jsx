import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vanshgarg0312@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-label">Get In Touch</div>

        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's build<br />something <em>great</em><br />together.
            </h2>
            <p className="contact-sub">
              Open to full-time roles, internships, and freelance collaborations in software engineering, backend development, or machine learning.
            </p>

            <div className="contact-links">
              <div className="contact-item" onClick={copyEmail}>
                <div className="contact-item-icon">✉</div>
                <div className="contact-item-body">
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">vanshgarg0312@gmail.com</span>
                </div>
                <span className="copy-hint">{copied ? "Copied!" : "Click to copy"}</span>
              </div>

              <a href="tel:+919729880603" className="contact-item">
                <div className="contact-item-icon">☎</div>
                <div className="contact-item-body">
                  <span className="contact-item-label">Phone</span>
                  <span className="contact-item-value">+91 9729880603</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/vansh-garg-bilaspur" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon">in</div>
                <div className="contact-item-body">
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">vansh-garg-bilaspur</span>
                </div>
                <span className="ext-arrow">↗</span>
              </a>

              <a href="https://github.com/VanshGarg0312" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon">gh</div>
                <div className="contact-item-body">
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">VanshGarg0312</span>
                </div>
                <span className="ext-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-deco-box">
              <div className="deco-header">
                <div className="deco-dots">
                  <span /><span /><span />
                </div>
                <span className="deco-title">Vansh.java</span>
              </div>
              <pre className="deco-code">{`public class Developer {

    String name = "Vansh Garg";
    String role = "Software Developer";
    String location = "Haryana, India";
    String education = "B.Tech CSE (8.4 CGPA)";

    String[] stack = {
        "Java",
        "Python",
        "C#",
        "Spring Boot",
        "MySQL",
        "ASP.NET Core",
        "ML / AI"
    };

    String[] certifications = {
        "CSA",
        "CAD"
    };

    boolean available = true;

    String[] openTo = {
        "Full-time Roles",
        "Internships",
        "Freelance"
    };
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
