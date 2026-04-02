import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/images/catalogs.png";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP ROW */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <span>Catalyst Analytics</span>
        </div>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Career">Careers</Link></li>
        </ul>

        <div className="social-box">
          <div>f</div>
          <div>t</div>
          <div>in</div>
        </div>
      </div>

      {/* CONTACT ROW */}
      <div className="footer-contact">
        <p>📧 contact@catalystanalytics.io</p>
        <p>📞 +1 (469) 712-4672</p>
        <p>📍 5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Catalyst Analytics. All rights reserved.</p>

        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;