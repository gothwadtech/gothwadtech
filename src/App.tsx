import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import Products from '../components/Products';
import Services from '../components/Services';
import ProfessionalServices from '../components/ProfessionalServices';
import CoreValues from '../components/CoreValues';
import Community from '../components/Community';
import Roadmap from '../components/Roadmap';
import Process from '../components/Process';
import Innovation from '../components/Innovation';
import Impact from '../components/Impact';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Careers from '../components/Careers';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import ProductsList from '../screens/ProductsList';
import JoinOurContribution from '../screens/JoinOurContribution';
import PartnersPage from '../screens/PartnersPage';
import LeadershipPage from '../screens/LeadershipPage';
import ContactSalesPage from '../screens/ContactSalesPage';
import MissionPage from '../screens/MissionPage';
import ContactSalesBanner from '../components/ContactSalesBanner';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => (
  <div className="min-h-screen selection:bg-brand-orange/30 selection:text-brand-orange">
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Mission />
      <ContactSalesBanner />
      <ProfessionalServices />
      <Services />
      <CoreValues />
      <Process />
      <Innovation />
      <Impact />
      <Roadmap />
      <Testimonials />
      <Careers />
      <FAQ />
      <Contact />
      <Newsletter />
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/join-contribution" element={<JoinOurContribution />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact-sales" element={<ContactSalesPage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </Router>
  );
}
