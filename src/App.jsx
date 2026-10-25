import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WorkGallery from './components/WorkGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Calculator from './components/Calculator';
import ProcessFlow from './components/ProcessFlow';
import CoverageAreas from './components/CoverageAreas';
import FaqSection from './components/FaqSection';
import MapContact from './components/MapContact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import DistrictPage from './components/DistrictPage';
import { getLocationBySlug, RIYADH_LOCATIONS } from './data/locationsData';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Sync state with URL hash or pathname for programmatic SEO URLs
  useEffect(() => {
    const handleUrlRoute = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const path = window.location.pathname.replace(/^\//, '');
      const candidateSlug = hash || path;

      if (candidateSlug) {
        const found = getLocationBySlug(candidateSlug);
        if (found) {
          setSelectedLocation(found);
          return;
        }
      }
      setSelectedLocation(null);
    };

    handleUrlRoute();
    window.addEventListener('hashchange', handleUrlRoute);
    window.addEventListener('popstate', handleUrlRoute);

    return () => {
      window.removeEventListener('hashchange', handleUrlRoute);
      window.removeEventListener('popstate', handleUrlRoute);
    };
  }, []);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    window.location.hash = `#/${location.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedLocation(null);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen relative bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Bar for quick contact & 24/7 status */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar onHomeClick={handleNavigateHome} />

      {/* Main Content Area */}
      <main>
        {selectedLocation ? (
          /* Programmatic District Landing Page */
          <DistrictPage 
            location={selectedLocation} 
            onNavigateHome={handleNavigateHome}
            onSelectLocation={handleSelectLocation}
          />
        ) : (
          /* Standard Full Homepage */
          <>
            {/* Hero Section with H1, trust badges and dual CTAs */}
            <Hero />

            {/* 6 Core Relocation Services with real photos */}
            <ServicesGrid />

            {/* Real Projects Photo Gallery with Lightbox */}
            <WorkGallery />

            {/* 4-Pillar Trust Section */}
            <WhyChooseUs />

            {/* Interactive Moving Cost Calculator & WhatsApp Quote Generator */}
            <Calculator />

            {/* 4-Step Journey Process */}
            <ProcessFlow />

            {/* Riyadh Districts Coverage & Inter-city Routes with click-through links */}
            <CoverageAreas onSelectDistrictSlug={(slug) => {
              const loc = getLocationBySlug(slug);
              if (loc) handleSelectLocation(loc);
            }} />

            {/* Frequently Asked Questions Accordion */}
            <FaqSection />

            {/* Embedded Google Map & Contact Details Card */}
            <MapContact />
          </>
        )}
      </main>

      {/* Full Footer with Social Links, District Links & Branding */}
      <Footer onSelectDistrictSlug={(slug) => {
        const loc = getLocationBySlug(slug);
        if (loc) handleSelectLocation(loc);
      }} />

      {/* Sticky Floating WhatsApp & Direct Call CTAs */}
      <FloatingActions />
    </div>
  );
}
