import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const styles = { color: "#FE4C00" };
  const style2 = { color: "black" };

  // Mapping nav items to their sections
  const navSections = {
    home: ".h-s1",
    about: ".home-section-2-container",
    services: ".ser-section-6",
    testimonials: ".home-section-9",
    contact: ".footer" // added dot
  };

  const handleNavClick = (section) => {
    setActive(section);
    setIsOpen(false);

    if (location.pathname !== "/") {
      // If not on Home, navigate there first
      navigate("/", { state: { scrollTo: section } });
    } else {
      // Already on Home, scroll directly
      const el = document.querySelector(navSections[section]);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`ul-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li
            style={active === "home" ? styles : style2}
            onClick={() => handleNavClick("home")}
          >
            Home
          </li>
          <li
            style={active === "about" ? styles : style2}
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            style={active === "services" ? styles : style2}
            onClick={() => handleNavClick("services")}
          >
            Services
          </li>
          <li
            style={active === "testimonials" ? styles : style2}
            onClick={() => handleNavClick("testimonials")}
          >
            Testimonials
          </li>
        </ul>

        <div className="contact-button mobile-only">
          <button onClick={() => handleNavClick("contact")}>Contact</button>
        </div>
      </div>

      <div className="contact-button desktop-only">
        <button onClick={() => handleNavClick("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
