import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    // Set active section based on current page
    const currentPath = window.location.pathname;
    
    if (currentPath === '/about-us') {
      setActiveSection('aboutus');
    } else if (currentPath === '/') {
      // Only run scroll detection on home page
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
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Use a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 0);
              setIsMenuOpen(false);
            }}
            aria-label="Navigate to GoLiveGram home"
            className="transition-all duration-300 hover:opacity-80 cursor-pointer flex items-center"
          >
            <img
              src="/livegram.svg"
              alt="GoLiveGram - Stream, Connect & Monetize Your Passion"
              width="320"
              height="50"
              className="h-12 w-auto"
              style={{ maxWidth: '320px', mixBlendMode: 'multiply' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/livegram.svg';
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 0);
              }}
              aria-label="Navigate to home page"
              className={`transition-colors font-medium cursor-pointer ${window.location.pathname === '/'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/about-us')}
              aria-label="Navigate to About Us page"
              className={`transition-colors font-medium cursor-pointer ${window.location.pathname === '/about-us'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('creators')}
              aria-label="Navigate to Creators section"
              className={`transition-colors font-medium cursor-pointer ${activeSection === 'creators'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              Creators
            </button>
            <button
              onClick={() => scrollToSection('features')}
              aria-label="Navigate to Features section"
              className={`transition-colors font-medium cursor-pointer ${activeSection === 'features'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('monetization')}
              aria-label="Navigate to Monetization section"
              className={`transition-colors font-medium cursor-pointer ${activeSection === 'monetization'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              Monetization
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              aria-label="Navigate to Testimonials section"
              className={`transition-colors font-medium cursor-pointer ${activeSection === 'testimonials'
                ? 'text-red-600 border-b-2 border-red-600 pb-1 font-bold'
                : 'text-gray-700 hover:text-red-500'
                }`}
            >
              Success Stories
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => window.open('https://www.golivegram.com/webapp/login/', '_blank')}
              className="btn-primary cursor-pointer"
              aria-label="Open login in new tab"
            >
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 sm:p-4 transition-colors duration-300 text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 0);
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${window.location.pathname === '/'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/about-us');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium cursor-pointer ${window.location.pathname === '/about-us'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('creators')}
                className={`text-left transition-colors font-medium cursor-pointer ${activeSection === 'creators'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                Creators
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`text-left transition-colors font-medium cursor-pointer ${activeSection === 'features'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('monetization')}
                className={`text-left transition-colors font-medium cursor-pointer ${activeSection === 'monetization'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                Monetization
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-left transition-colors font-medium cursor-pointer ${activeSection === 'testimonials'
                  ? 'text-red-600 font-bold bg-red-50 px-2 py-1 rounded'
                  : 'text-gray-700 hover:text-red-500'
                  }`}
              >
                Success Stories
              </button>
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => window.open('https://www.golivegram.com/webapp/login/', '_blank')}
                  className="w-full btn-primary cursor-pointer"
                  aria-label="Open login in new tab"
                >
                  <span>Login</span>
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