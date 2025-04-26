import React from "react";

/**
 * Sidebar navigation component. Highlights current section.
 */
function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
