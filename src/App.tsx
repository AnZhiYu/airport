import { BenefitsBar } from './components/BenefitsBar';
import { BookingPanel } from './components/BookingPanel';
import { BusinessBanner } from './components/BusinessBanner';
import { DealsSection } from './components/DealsSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { cities } from './data';

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <div className="container booking-overlap">
          <BookingPanel cities={cities} />
        </div>
        <BenefitsBar />
        <DealsSection />
        <BusinessBanner />
      </main>
      <Footer />
    </div>
  );
}
