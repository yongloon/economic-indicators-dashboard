// Header.js
// Application header component for the mock data admin interface
// Shows logo/app name on the left and user avatar on the right

import React from "react";
import "./App.css";

/**
 * Header component for the admin dashboard
 * - App name/logo left
 * - User avatar right
 */
function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <span className="app-logo">📊</span>
        <span className="app-title">Economic Indicators Dashboard</span>
      </div>
      <div className="header-right">
        <img
          src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
