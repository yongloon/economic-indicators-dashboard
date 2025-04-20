import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    background: '#18181b',
    color: '#bdbdbd',
    padding: '24px 0',
    textAlign: 'center',
    marginTop: 48,
    borderTop: '1px solid #232326',
    fontSize: '1rem',
  }}>
    <div style={{ marginBottom: 8 }}>
      Data sources: <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>FRED</a> | <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>BLS</a> | <a href="https://www.bea.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>BEA</a>
    </div>
    <div style={{ marginBottom: 8 }}>
      <a href="https://github.com/yongloon/economic-indicators-dashboard" target="_blank" rel="noopener noreferrer" style={{ color: '#bdbdbd', textDecoration: 'none', marginRight: 8 }}>
        GitHub Repository
      </a>
      |
      <span style={{ marginLeft: 8 }}>&copy; {new Date().getFullYear()} Economic Indicators Dashboard</span>
    </div>
  </footer>
);

export default Footer;
