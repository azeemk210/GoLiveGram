import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Download } from 'lucide-react';
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      // Clear previous timeout to debounce
      clearTimeout(timeoutId);
      
      // Debounce scroll handler to reduce main-thread work
      timeoutId = setTimeout(() => {
        const sections = ['hero', 'creators', 'features', 'monetization', 'testimonials'];
        let currentSection = '';
        
        // Quick check for top of page
        if (window.scrollY < 100) {
          currentSection = 'hero';
          setActiveSection(currentSection);
          return;
        }
        
        // Calculate scroll position with offset
        const scrollPosition = window.scrollY + 200;
        
        // Find active section
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentSection = sectionId;
              break;
            }
          }
        }
        
        setActiveSection(currentSection);
      }, 100); // 100ms debounce
    };
    
    // Initial call
    handleScroll();
    
    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Immediately set active section when clicked
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center transition-all duration-300 cursor-pointer"
            aria-label="Go to top of page"
          >
            <img 
              src="/Go.svg" 
              alt="GoLiveGram - Stream, Connect & Monetize Your Passion" 
              width="160"
              height="40"
              className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              style={{ maxWidth: '160px' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/Go.png';
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('creators')}
              aria-label="Navigate to Creators section"
              className={`transition-colors font-medium cursor-pointer ${
                activeSection === 'creators' 
                  ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Creators
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              aria-label="Navigate to Features section"
              className={`transition-colors font-medium cursor-pointer ${
                activeSection === 'features' 
                  ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('monetization')}
              aria-label="Navigate to Monetization section"
              className={`transition-colors font-medium cursor-pointer ${
                activeSection === 'monetization' 
                  ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Monetization
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              aria-label="Navigate to Testimonials section"
              className={`transition-colors font-medium cursor-pointer ${
                activeSection === 'testimonials' 
                  ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              Success Stories
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => handleDownloadClick('web')}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Try Web Version</span>
            </button>
            <button 
              onClick={() => handleDownloadClick(getRecommendedPlatform())}
              className="btn-primary flex items-center space-x-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-colors duration-300 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('creators')}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  activeSection === 'creators' 
                    ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Creators
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  activeSection === 'features' 
                    ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('monetization')}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  activeSection === 'monetization' 
                    ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Monetization
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`text-left transition-colors font-medium cursor-pointer ${
                  activeSection === 'testimonials' 
                    ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Success Stories
              </button>
              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => handleDownloadClick('web')}
                  className="w-full btn-secondary flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Try Web Version</span>
                </button>
                <button 
                  onClick={() => handleDownloadClick(getRecommendedPlatform())}
                  className="w-full btn-primary flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;