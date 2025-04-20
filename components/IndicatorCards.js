import React, { useState, useEffect } from 'react';

const indicatorsMock = [
  {
    name: "GDP Growth",
    value: "2.1%",
    change: "+0.2%",
    isPositive: true,
    icon: "📈",
    iconBg: "#3b82f6",
    description: "Gross Domestic Product growth rate year over year."
  },
  {
    name: "Unemployment Rate",
    value: "3.7%",
    change: "-0.1%",
    isPositive: false,
    icon: "💼",
    iconBg: "#f59e42",
    description: "Percentage of the labor force that is unemployed."
  },
  {
    name: "Inflation Rate",
    value: "4.2%",
    change: "+0.3%",
    isPositive: false,
    icon: "💸",
    iconBg: "#ef4444",
    description: "Consumer Price Index annual inflation rate."
  },
  {
    name: "Interest Rate",
    value: "5.25%",
    change: "0.0%",
    isPositive: true,
    icon: "🏦",
    iconBg: "#22c55e",
    description: "Central bank benchmark interest rate."
  },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '16px',
  margin: '32px 0'
};

const cardStyle = {
  background: '#232326',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  transition: 'transform 0.15s, box-shadow 0.15s',
  cursor: 'pointer',
};

const iconStyle = (bg) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginRight: '20px',
  flexShrink: 0,
});

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0
};

const nameStyle = {
  color: '#bdbdbd',
  fontSize: '1rem',
  margin: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const valueStyle = {
  color: '#fff',
  fontSize: '2rem',
  fontWeight: 700,
  margin: '4px 0 0 0',
  lineHeight: 1.1,
  transition: 'color 0.3s',
};

const changeStyle = (isPositive) => ({
  color: isPositive ? '#22c55e' : '#ef4444',
  fontSize: '0.95rem',
  fontWeight: 600,
  margin: '4px 0 0 0',
  display: 'flex',
  alignItems: 'center',
});

const tooltipStyle = {
  position: 'absolute',
  background: '#18181b',
  color: '#fff',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '0.95rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
  zIndex: 10,
  top: '110%',
  left: 0,
  minWidth: '180px',
  pointerEvents: 'none',
};

function IndicatorCard({ indicator }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(indicator.value);

  useEffect(() => {
    setAnimatedValue('');
    const timeout = setTimeout(() => setAnimatedValue(indicator.value), 200);
    return () => clearTimeout(timeout);
  }, [indicator.value]);

  return (
    <div
      style={{ ...cardStyle, position: 'relative' }}
      tabIndex={0}
      aria-label={indicator.name + ': ' + indicator.value}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <div style={iconStyle(indicator.iconBg)} aria-hidden="true">
        {indicator.icon}
      </div>
      <div style={contentStyle}>
        <h2 style={nameStyle} title={indicator.name}>{indicator.name}</h2>
        <span style={valueStyle}>{animatedValue}</span>
        <span style={changeStyle(indicator.isPositive)}>
          {indicator.change}
          {indicator.change !== "0.0%" && (
            <span style={{marginLeft: 4, fontSize: '1.1em'}}>
              {indicator.isPositive ? '▲' : '▼'}
            </span>
          )}
        </span>
      </div>
      {showTooltip && (
        <div style={tooltipStyle} role="tooltip">
          {indicator.description}
        </div>
      )}
    </div>
  );
}

const IndicatorCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setIndicators(indicatorsMock);
      setLoading(false);
    }, 900);
  }, []);

  if (loading) return <div style={{color:'#bdbdbd',padding:'32px 0',textAlign:'center'}}>Loading indicators...</div>;
  if (error) return <div style={{color:'#ef4444',padding:'32px 0',textAlign:'center'}}>Failed to load indicators.</div>;

  return (
    <section aria-label="Key Economic Indicators" style={{width: '100%'}}>
      <div style={gridStyle}>
        {indicators.map((ind) => (
          <IndicatorCard key={ind.name} indicator={ind} />
        ))}
      </div>
    </section>
  );
};

export default IndicatorCards;
