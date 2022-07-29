import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
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
      <h2 className="logo">קעקואלה</h2>
      <ul className="links">
        <li>
          <Link to="/">בית</Link>
        </li>
        <li>
          <Link to="/about">אודות</Link>
        </li>
        <li>
          <Link to="/store">חנות</Link>
        </li>
        <li>
          <Link to="/contact">צור קשר</Link>
        </li>
      </ul>
      <div className="toggle-icon" onClick={handleToggle}>
        <Icon size={28} icon={showMenuLinks ? x : menu} />
      </div>
    </nav>
  );
}
