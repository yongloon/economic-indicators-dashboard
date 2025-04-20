import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Data Sources', href: '/sources' },
];

const Header = () => (
  <header style={{
    width: '100%',
    height: '64px',
    background: '#18181b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    boxSizing: 'border-box',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{
        fontSize: '2rem',
        marginRight: 12,
        color: '#3b82f6'
      }}>📊</span>
      <h1 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        margin: 0
      }}>
        Economic Dashboard
      </h1>
    </div>
    <nav>
      {navLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          style={{
            color: '#bdbdbd',
            margin: '0 16px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem'
          }}
        >
          {link.name}
        </a>
      ))}
    </nav>
    <div>
      <span style={{
        display: 'inline-block',
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: '#232326',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem'
      }}>👤</span>
    </div>
  </header>
);

export default Header;
