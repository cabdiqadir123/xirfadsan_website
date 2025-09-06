import React, { useState } from "react";
import rukun_logo from "../assets/logo/Logo (1).png";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const styles = { color: "#FE4C00" };
  const style2 = { color: "black" };

  const navItems = [
    { id: "home", label: "Home", path: "Home" },
    { id: "services", label: "Services", path: "Services" },
    { id: "about", label: "About", path: "About" },
    { id: "blog", label: "Blog", path: "Blog" },
  ];

  return (
    <div className="navbar-section">
      {/* Logo */}
      <div className="logo">
        <img src={rukun_logo} alt="logo" />
      </div>

      {/* Hamburger */}
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
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="link"
              to={item.path}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
            >
              <li style={active === item.id ? styles : style2}>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="contact-button mobile-only">
          <Link className="link" to="Contact" style={{ color: "white" }}>
            <button>Contact</button>
          </Link>
        </div>
      </div>

      <div className="contact-button desktop-only">
        <Link className="link" to="Contact" style={{ color: "white" }}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
