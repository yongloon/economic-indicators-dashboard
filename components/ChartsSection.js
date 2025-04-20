import useIndicators from '../hooks/useIndicators';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

const INDICATORS = [
  { key: 'gdp', label: 'GDP', color: '#2563eb', unit: '$' },
  { key: 'inflation', label: 'Inflation', color: '#f59e42', unit: '%' },
  { key: 'unemployment', label: 'Unemployment', color: '#ef4444', unit: '%' },
  { key: 'interest', label: 'Interest Rate', color: '#10b981', unit: '%' },
];

export default function ChartsSection({ country, range }) {
  const { chartData, loading, error } = useIndicators(country, range);
  const [activeTab, setActiveTab] = useState('gdp');

  if (loading) return <div className="my-8">Loading charts...</div>;
  if (error) return <div className="my-8 text-red-500">Error loading chart data.</div>;

  return (
    <section className="mt-8">
      <div className="flex gap-2 mb-4">
        {INDICATORS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-t font-semibold text-sm border-b-2 ${activeTab === key ? 'border-blue-600 text-blue-600 bg-white dark:bg-zinc-900' : 'border-transparent text-zinc-500 dark:text-zinc-300 bg-transparent'}`}
            aria-current={activeTab === key ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-zinc-800 rounded-b-xl shadow p-6 min-h-[320px]">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={chartData?.[activeTab] || []} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit={INDICATORS.find(i => i.key === activeTab)?.unit} />
            <Tooltip formatter={(value) => `${value}${INDICATORS.find(i => i.key === activeTab)?.unit}`} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={INDICATORS.find(i => i.key === activeTab)?.color} strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
