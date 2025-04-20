import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const gdpData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'GDP (Trillion USD)',
      data: [20.5, 21.4, 20.9, 22.7, 24.1, 25.3],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.08)',
      tension: 0.3,
      fill: true,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: { color: '#bdbdbd', font: { size: 14 } }
    },
    title: {
      display: true,
      text: 'GDP Over Time',
      color: '#fff',
      font: { size: 20 }
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (ctx) => `GDP: $${ctx.parsed.y}T`
      }
    }
  },
  scales: {
    x: {
      ticks: { color: '#bdbdbd', font: { size: 13 } },
      grid: { color: 'rgba(255,255,255,0.07)' }
    },
    y: {
      ticks: { color: '#bdbdbd', font: { size: 13 } },
      grid: { color: 'rgba(255,255,255,0.07)' }
    }
  },
};

const ChartsSection = () => (
  <section style={{ background: '#18181b', borderRadius: 16, padding: 32, margin: '32px 0', width: '100%' }}>
    <Line data={gdpData} options={options} />
  </section>
);

export default ChartsSection;
