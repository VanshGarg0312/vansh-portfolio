import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">[</span>VG<span className="logo-bracket">]</span>
          </span>
          <span className="footer-copy">© 2025 Vansh Garg. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <a href="https://linkedin.com/in/vansh-garg-bilaspur" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://github.com/VanshGarg0312" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://leetcode.com/u/vanshgarg0312" target="_blank" rel="noreferrer" className="footer-link">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
