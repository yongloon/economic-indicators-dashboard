// Sidebar.js
// Sidebar navigation component
import React, { useState } from "react";
import "./App.css";

const navLinks = [
  { label: "Dashboard", icon: "📊" },
  { label: "Users", icon: "👥" },
  { label: "Reports", icon: "📈" },
  { label: "Settings", icon: "⚙️" },
];

/**
 * Sidebar navigation, collapsible on mobile.
 * @returns JSX.Element
 */
function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className={`sidebar${collapsed ? " sidebar--collapsed" : ""}`}> 
      <button
        className="sidebar__toggle"
        aria-label="Toggle sidebar"
        onClick={() => setCollapsed((c) => !c)}
      >
        ☰
      </button>
      <ul className="sidebar__nav">
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={active === link.label ? "sidebar__nav--active" : ""}
            onClick={() => setActive(link.label)}
            tabIndex={0}
            aria-label={link.label}
          >
            <span className="sidebar__icon">{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
