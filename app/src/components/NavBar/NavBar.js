import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

export default function NavBar() {
  const [showMenuLinks, setShowMenuLinks] = useState(false);

  const handleToggle = () => {
    setShowMenuLinks(!showMenuLinks);
  };
  return (
    <nav className={`navbar ${showMenuLinks && "expanded"}`}>
      <h2 className="logo">NavBar</h2>
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="toggle-icon" onClick={handleToggle}>
        <Icon size={28} icon={showMenuLinks ? x : menu} />
      </div>
    </nav>
  );
}
