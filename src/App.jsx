import React from 'react';
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

export default function App() {
  return (
    <div className="w-full min-h-screen relative bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Bar for quick contact & 24/7 status */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
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

        {/* Riyadh Districts Coverage & Inter-city Routes */}
        <CoverageAreas />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Embedded Google Map & Contact Details Card */}
        <MapContact />
      </main>

      {/* Full Footer with Social Links & Branding */}
      <Footer />

      {/* Sticky Floating WhatsApp & Direct Call CTAs */}
      <FloatingActions />
    </div>
  );
}
