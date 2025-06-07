import React from 'react';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LoadingProvider>
      <LanguageProvider>
        <div className="app">
          {/* Loading Screen with Curtain Animation */}
          <LoadingScreen />
          
          {/* Main Content */}
          <Navbar />
          
          <main>
            <HeroSection />
            <AboutSection />
            <MenuSection />
            <GallerySection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </LoadingProvider>
  );
}

export default App;