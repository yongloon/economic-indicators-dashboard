import React from "react";

/**
 * Header component: Displays the app name/logo and user avatar.
 */
function Header() {
  return (
    <header className="header">
      <div className="logo">Economic Indicators Dashboard</div>
      <div className="avatar" aria-label="User profile">YL</div>
    </header>
  );
}

export default Header;
