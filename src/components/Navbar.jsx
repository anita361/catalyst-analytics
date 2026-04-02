import "../styles/navbar.css";
import logo from "../assets/images/catalogs.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
        <li><Link to="/Career" onClick={() => setOpen(false)}>Careers</Link></li>
        <li>
          <Link to="/contact" className="contact-btn" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;