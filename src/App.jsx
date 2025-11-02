import React from 'react';
import HeroSection from './components/HeroSection';
import ProductExplainer from './components/ProductExplainer';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <HeroSection />
      <main>
        <ProductExplainer />
        <FeaturesGrid />
        <CTASection />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Bedug. Built for developers.
      </footer>
    </div>
  );
}
