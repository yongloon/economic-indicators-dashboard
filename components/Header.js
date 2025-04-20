import React from 'react';

/**
 * Dashboard Header Component (Responsive)
 *
 * - Full-width, 64px tall, dark background header.
 * - Left-aligned bold white title.
 * - Responsive padding: 32px (default), 16px on small screens.
 * - Semantic header and h1 tags for accessibility.
 * - Easily extendable for navigation or user actions.
 */
const headerStyle = {
  width: '100%',
  height: '64px',
  background: '#18181b',
  display: 'flex',
  alignItems: 'center',
  padding: '0 32px',
  boxSizing: 'border-box',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

/**
 * Responsive style injection for header padding using a media query.
 * This approach creates a <style> tag once per mount and cleans up on unmount.
 */
const ResponsiveHeaderStyle = () => (
  <style>
    {`
      @media (max-width: 600px) {
        .dashboard-header {
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
      }
    `}
  </style>
);

const Header = () => (
  <>
    <ResponsiveHeaderStyle />
    <header
      className="dashboard-header"
      style={headerStyle}
      data-testid="dashboard-header"
    >
      <h1
        style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          margin: 0,
        }}
      >
        Dashboard
      </h1>
      {/* Future: Add navigation or user actions here */}
    </header>
  </>
);

export default Header;
