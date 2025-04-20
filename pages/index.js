import Head from 'next/head';
import { useState } from 'react';
import Dashboard from '../components/Dashboard';

export default function Home() {
  // Country default: US, Range default: 5 years
  const [country, setCountry] = useState('US');
  const [range, setRange] = useState('5Y');

  return (
    <>
      <Head>
        <title>Economic Indicators Dashboard</title>
        <meta name="description" content="Track GDP, inflation, unemployment, and interest rates by country and time range." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard country={country} setCountry={setCountry} range={range} setRange={setRange} />
    </>
  );
}
