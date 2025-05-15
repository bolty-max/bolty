import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Utensils, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const toggleLanguage = (lang: 'en' | 'de') => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (quoteRef.current) {
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full"
    >
      {/* Background Video */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover md:object-center object-[25%] min-h-screen min-w-full"
        >
          <source src="src\assests\desktop.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/10 z-0"></div>
      </div>

      {/* Foreground Content - Text placed freely */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-16 md:left-24 lg:left-32 text-white">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-spice-400 flex items-center mb-6"
          >
            <Utensils className="mr-2" size={20} />
            <span className="uppercase tracking-widest text-sm">
              {language === 'en' ? 'Authentic Indian Cuisine' : 'Authentische Indische Küche'}
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            {language === 'en' ? 'Bayleaf Restaurant' : 'Bayleaf Restaurant'}
          </h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            {language === 'en' 
              ? 'Experience the authentic flavors of India with our traditional recipes and premium spices, bringing the essence of Indian culinary art to your table.'
              : 'Erleben Sie die authentischen Aromen Indiens mit unseren traditionellen Rezepten und erstklassigen Gewürzen, die das Wesen der indischen Kochkunst auf Ihren Tisch bringen.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            {/* Language toggle buttons - now before first button */}
            <div className="flex space-x-2 items-center mr-4">
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-3 py-1 rounded-md transition-colors ${language === 'en' ? 'bg-white text-spice-500 font-bold' : 'bg-transparent text-white border border-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLanguage('de')}
                className={`px-3 py-1 rounded-md transition-colors ${language === 'de' ? 'bg-white text-spice-500 font-bold' : 'bg-transparent text-white border border-white'}`}
              >
                DE
              </button>
            </div>
            
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="btn-primary"
            >
              {language === 'en' ? 'Explore Menu' : 'Menü Entdecken'}
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={0}
              className="bg-white text-spice-500 py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              {language === 'en' ? 'Book a Table' : 'Tisch Reservieren'}
            </Link>
          </div>

          <div 
            ref={quoteRef}
            className="bg-white/20 p-6 rounded-lg border border-white/30 shadow-lg max-w-md"
          >
            <div className="flex items-start">
              <Quote className="text-spice-400 mr-3 flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-white font-medium italic text-lg md:text-xl mb-3">
                  {language === 'en' 
                    ? '"Food is not just eating energy. It\'s an experience."'
                    : '"Essen ist nicht nur Energie aufnehmen. Es ist ein Erlebnis."'}
                </p>
                <p className="text-white/100 text-sm text-right">
                  - Chef Ranveer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-16 md:left-24 lg:left-32 z-10">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={0}
          className="flex flex-col items-center cursor-pointer hover:text-white transition-colors text-white"
        >
          <span className="text-sm uppercase tracking-wider mb-2">
            {language === 'en' ? 'Scroll Down' : 'Nach Unten Scrollen'}
          </span>
          <ArrowDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;