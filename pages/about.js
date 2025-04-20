import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main style={{
        maxWidth: 700,
        margin: '40px auto',
        padding: 24,
        background: '#232326',
        borderRadius: 12,
        color: '#fff'
      }}>
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>About Economic Indicators Dashboard</h1>
        <p>
          This dashboard visualizes key economic indicators for the <b>United States</b>, including GDP Growth, Unemployment Rate, Inflation Rate, and Interest Rate. You can view the historical trends for all indicators on the main dashboard.
        </p>
        <p>
          Our goal is to provide accessible, up-to-date macroeconomic data for analysts, students, and the public.
        </p>
        <h2 style={{ fontSize: 20, marginTop: 32 }}>Data Sources</h2>
        <ul>
          <li>
            <a href="https://fred.stlouisfed.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Federal Reserve Economic Data (FRED)</a>
          </li>
          <li>
            <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>U.S. Bureau of Labor Statistics (BLS)</a>
          </li>
          <li>
            <a href="https://www.bea.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>U.S. Bureau of Economic Analysis (BEA)</a>
          </li>
        </ul>
        <h2 style={{ fontSize: 20, marginTop: 32 }}>Technology</h2>
        <ul>
          <li>React & Next.js</li>
          <li>Chart.js via react-chartjs-2</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}