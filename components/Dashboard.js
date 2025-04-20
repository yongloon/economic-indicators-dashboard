import Header from './Header';
import IndicatorCards from './IndicatorCards';
import ChartsSection from './ChartsSection';
import Footer from './Footer';

export default function Dashboard({ country, setCountry, range, setRange }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 transition-colors">
      <Header country={country} setCountry={setCountry} range={range} setRange={setRange} />
      <main className="flex-1 container mx-auto px-4 py-6">
        <IndicatorCards country={country} range={range} />
        <ChartsSection country={country} range={range} />
      </main>
      <Footer />
    </div>
  );
}
