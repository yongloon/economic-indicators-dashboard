import useSWR from 'swr';

// World Bank indicator codes
const INDICATOR_CODES = {
  gdp: 'NY.GDP.MKTP.CD',
  inflation: 'FP.CPI.TOTL.ZG',
  unemployment: 'SL.UEM.TOTL.ZS',
  interest: 'FR.INR.RINR',
};

// Fetcher for World Bank API
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

function getYears(range) {
  const now = new Date().getFullYear();
  if (range === '1Y') return [now - 1, now];
  if (range === '5Y') return [now - 5, now];
  if (range === '10Y') return [now - 10, now];
  return [1960, now];
}

export default function useIndicators(country, range) {
  const [start, end] = getYears(range);

  const { data: gdp, error: gdpErr } = useSWR(
    `https://api.worldbank.org/v2/country/${country}/indicator/${INDICATOR_CODES.gdp}?date=${start}:${end}&format=json`,
    fetcher
  );
  const { data: inflation, error: infErr } = useSWR(
    `https://api.worldbank.org/v2/country/${country}/indicator/${INDICATOR_CODES.inflation}?date=${start}:${end}&format=json`,
    fetcher
  );
  const { data: unemployment, error: uneErr } = useSWR(
    `https://api.worldbank.org/v2/country/${country}/indicator/${INDICATOR_CODES.unemployment}?date=${start}:${end}&format=json`,
    fetcher
  );
  const { data: interest, error: intErr } = useSWR(
    `https://api.worldbank.org/v2/country/${country}/indicator/${INDICATOR_CODES.interest}?date=${start}:${end}&format=json`,
    fetcher
  );

  const loading = !gdp || !inflation || !unemployment || !interest;
  const error = gdpErr || infErr || uneErr || intErr;

  // Helper to extract latest and previous value for cards
  function extractStats(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return { current: undefined, change: undefined };
    const [latest, prev] = arr.filter(d => d.value !== null);
    if (!latest) return { current: undefined, change: undefined };
    return {
      current: Number(latest.value.toFixed(2)),
      change: prev && prev.value !== null ? Number((latest.value - prev.value).toFixed(2)) : undefined,
    };
  }

  // Helper to format for recharts
  function formatChart(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(d => d.value !== null).map(d => ({
      date: d.date,
      value: Number(d.value.toFixed(2)),
    })).reverse();
  }

  // Data structure for cards
  const stats = {
    gdp: extractStats(gdp?.[1]),
    inflation: extractStats(inflation?.[1]),
    unemployment: extractStats(unemployment?.[1]),
    interest: extractStats(interest?.[1]),
  };

  // Data structure for charts
  const chartData = {
    gdp: formatChart(gdp?.[1]),
    inflation: formatChart(inflation?.[1]),
    unemployment: formatChart(unemployment?.[1]),
    interest: formatChart(interest?.[1]),
  };

  return { data: stats, chartData, loading, error };
}
