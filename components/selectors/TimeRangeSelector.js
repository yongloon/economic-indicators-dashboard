const RANGES = [
  { value: '1Y', label: '1Y' },
  { value: '5Y', label: '5Y' },
  { value: '10Y', label: '10Y' },
  { value: 'MAX', label: 'Max' },
];

export default function TimeRangeSelector({ range, setRange }) {
  return (
    <select
      className="min-w-[100px] border rounded px-2 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
      value={range}
      onChange={e => setRange(e.target.value)}
      aria-label="Select time range"
    >
      {RANGES.map(r => (
        <option key={r.value} value={r.value}>{r.label}</option>
      ))}
    </select>
  );
}
