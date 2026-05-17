import "./Certifications.css";

const certs = [
  {
    title: "ServiceNow Certified System Administrator",
    short: "CSA",
    issuer: "ServiceNow",
    number: "Cert No. 27076154",
    color: "#4a9eff",
    icon: "⚙",
    link: "https://drive.google.com/file/d/16NoUlAWk23rhzcBF22xrBHu-ADW-okMf/view?usp=sharing",
  },

  {
    title: "ServiceNow Certified Application Developer",
    short: "CAD",
    issuer: "ServiceNow",
    number: "Cert No. 27253236",
    color: "#e8c547",
    icon: "◈",
    link: "https://drive.google.com/file/d/1XN_jpjs3qLjOT-tY-iBdHJY-wNepMYIv/view?usp=sharing",
  },

  {
    title: "OctaNet Training & Internship",
    short: "SWD",
    issuer: "OctaNet Services",
    number: "Completion Certificate",
    color: "#47e8a0",
    icon: "✦",
    link: "https://drive.google.com/file/d/1HklFJWNHRsfwRRfFp5g-tFOgOe0qm9y8/view?usp=sharing",
  },

  {
    title: "Google Cloud Arcade",
    short: "GCA",
    issuer: "Google",
    number: "Achievement Badge",
    color: "#e85d47",
    icon: "☁",
    link: "https://drive.google.com/file/d/1O6nRLDgWeIsSBy5HpMdkOi1j8n5_Vjki/view?usp=sharing",
  },

  {
    title: "Gen AI Skills 2026",
    short: "AI",
    issuer: "GUVI & HCLTech",
    number: "Completion Certificate",
    color: "#c47fff",
    icon: "✧",
    link: "https://drive.google.com/file/d/1npKDKJrcYZOAQiyhxdmvRSsCbGP65YNy/view?usp=sharing",
  },
  {
  title: "350+ DSA Problems Solved",
  short: "DSA",
  issuer: "LeetCode",
  number: "Problem Solving Achievement",
  color: "#a35a15",
  icon: "💻",
  link: "https://leetcode.com/u/vanshgarg0312/",
},
];

export default function Certifications() {
  return (
    <section className="section certs-section" id="certifications">
      <div className="container">
        
        <div className="section-label">Credentials</div>

        <h2 className="section-title">
          Certifications <em>& Awards</em>
        </h2>

        <div className="certs-grid">
          {certs.map((c) => (
            <div
              className="cert-card"
              key={c.title}
              style={{ "--c-color": c.color }}
            >
              <div className="cert-icon-wrap">
                <span className="cert-icon">{c.icon}</span>
              </div>

              <div className="cert-badge">{c.short}</div>

              <h4 className="cert-title">{c.title}</h4>

              <div className="cert-bottom">
                <span className="cert-issuer">{c.issuer}</span>

                <span className="cert-number">{c.number}</span>
              </div>

              {/* CERTIFICATE BUTTON */}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                  style={{
                    background: c.color,
                  }}
                >
                 {c.short === "DSA" ? "View Profile" : "View Certificate"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}