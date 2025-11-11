import React, { useState, useRef, useEffect, Suspense } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import Hero from './Hero';
import FloatingElements from '../UI/FloatingElements';

// Lazy imports for performance
const Features = React.lazy(() => import('./Features'));
const Monetization = React.lazy(() => import('./Monetization'));
const Statistics = React.lazy(() => import('./Statistics'));
const MobilePreview = React.lazy(() => import('./MobilePreview'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const CallToAction = React.lazy(() => import('./CallToAction'));

// Loading component for Suspense fallbacks
const SectionLoader: React.FC<{ height?: string }> = ({ height = 'h-96' }) => (
  <div className={`${height} flex items-center justify-center bg-gradient-to-r from-gray-50 to-white`}>
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleImageClick = (imageSrc: string, triggerElement?: HTMLElement) => {
    previousActiveElement.current = triggerElement || document.activeElement as HTMLElement;
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    // Restore focus to the trigger element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  };

  // Enhanced keyboard handling for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'Tab') {
        // Simple focus trap - keep focus within lightbox
        event.preventDefault();
        const closeButton = lightboxRef.current?.querySelector('button');
        closeButton?.focus();
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when lightbox opens
      setTimeout(() => {
        const closeButton = lightboxRef.current?.querySelector('button');
        closeButton?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <>
      <FloatingElements />
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <MobilePreview />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>

        {/* Two preview images - enhanced styling with lightbox */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-6 max-w-7xl relative">
            {/* Enhanced floating decorative emojis */}
            <div className="absolute -top-8 -left-8 text-5xl pointer-events-none opacity-80 motion-safe:animate-bounce" aria-hidden="true">🎥</div>
            <div className="absolute -top-8 -right-8 text-4xl pointer-events-none opacity-70 motion-safe:animate-spin" aria-hidden="true" style={{ animationDuration: '8s' }}>💎</div>
            <div className="absolute -bottom-8 right-1/4 text-4xl pointer-events-none opacity-85 motion-safe:animate-pulse" aria-hidden="true">🔥</div>
            <div className="absolute top-1/2 -left-10 text-3xl pointer-events-none opacity-60 motion-safe:animate-bounce" aria-hidden="true" style={{ animationDelay: '1s' }}>⚡</div>

            {/* Raining Money Icons */}
            <div className="absolute top-0 left-1/4 pointer-events-none z-0" aria-hidden="true">
              <div className="animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20V6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4V4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" fill="currentColor"/>
                  <path d="M12 8C13.1 8 14 8.9 14 10S13.1 12 12 12S10 11.1 10 10S10.9 8 12 8ZM12 14C13.1 14 14 14.9 14 16S13.1 18 12 18S10 17.1 10 16S10.9 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="absolute top-10 right-1/3 pointer-events-none z-0" aria-hidden="true">
              <div className="text-2xl animate-bounce opacity-60" style={{ animationDelay: '1.2s' }}>💵</div>
            </div>

            <div className="absolute top-5 left-1/3 pointer-events-none z-0" aria-hidden="true">
              <div className="text-3xl animate-pulse opacity-80" style={{ animationDelay: '0.8s' }}>💰</div>
            </div>

            <div className="absolute top-16 right-1/4 pointer-events-none z-0" aria-hidden="true">
              <div className="animate-bounce opacity-70" style={{ animationDelay: '2s' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-yellow-600">
                  <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6V8M12 16V18M8.5 9C8.5 7.9 9.4 7 10.5 7H13.5C14.6 7 15.5 7.9 15.5 9S14.6 11 13.5 11H10.5C9.4 11 8.5 11.9 8.5 13S9.4 15 10.5 15H13.5C14.6 15 15.5 14.1 15.5 13" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="absolute top-8 left-1/6 pointer-events-none z-0" aria-hidden="true">
              <div className="text-2xl animate-pulse opacity-50" style={{ animationDelay: '1.8s' }}>💸</div>
            </div>

            <div className="absolute top-20 right-1/6 pointer-events-none z-0" aria-hidden="true">
              <div className="animate-bounce opacity-60" style={{ animationDelay: '0.3s' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                  <path d="M2 5L8.91 3.26C9.61 3.09 10.39 3.09 11.09 3.26L22 5V17.13C22 17.72 21.37 18.13 20.82 17.87L14.18 14.63C13.45 14.27 12.55 14.27 11.82 14.63L2 18.5V5Z" fill="currentColor" fillOpacity="0.3"/>
                  <path d="M2 5L8.91 3.26C9.61 3.09 10.39 3.09 11.09 3.26L22 5V17.13C22 17.72 21.37 18.13 20.82 17.87L14.18 14.63C13.45 14.27 12.55 14.27 11.82 14.63L2 18.5V5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12M10 10H14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <div className="absolute top-12 left-2/5 pointer-events-none z-0" aria-hidden="true">
              <div className="text-xl animate-pulse opacity-75" style={{ animationDelay: '2.5s' }}>🪙</div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Card 1 - Enhanced */}
            <div className="relative group">
              <figure 
                className="relative cursor-pointer transform transition-all duration-700 hover:scale-102"
                onClick={(e) => handleImageClick("/Gemini_Generated_Image_2od3kj2od3kj2od3.png", e.currentTarget)}
              >
                <div className="overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-gradient-to-tr from-purple-500/20 to-pink-500/10 rotate-3 group-hover:rotate-1 transition-transform duration-700">
                  <img
                    src="/Gemini_Generated_Image_2od3kj2od3kj2od3.png"
                    alt="Creator showcase - Live streaming example"
                    className="w-full h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="550"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-pink-500/20 mix-blend-overlay" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Enhanced emoji accents */}
                <div className="absolute -top-4 -left-4 text-4xl pointer-events-none motion-safe:animate-bounce z-10" aria-hidden="true" style={{ animationDelay: '0.5s' }}>🌟</div>
                <div className="absolute -bottom-4 -right-4 text-3xl pointer-events-none motion-safe:animate-pulse z-10" aria-hidden="true">🎯</div>
                <div className="absolute top-1/4 -right-6 text-2xl pointer-events-none motion-safe:animate-spin z-10" aria-hidden="true" style={{ animationDuration: '6s' }}>✨</div>
              </figure>

              {/* Caption and CTA */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Creator Experience</h3>
                <p className="text-gray-600 mb-4">See how creators engage with their audience in real-time and build authentic connections.</p>
                <button 
                  ref={triggerRef}
                  onClick={(e) => handleImageClick("/Gemini_Generated_Image_2od3kj2od3kj2od3.png", e.currentTarget)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <Play className="w-5 h-5" />
                  <span>View Experience</span>
                </button>
              </div>
            </div>

            {/* Card 2 - Enhanced with overlap */}
            <div className="relative group -mt-12 lg:mt-8 lg:-ml-12">
              <figure 
                className="relative cursor-pointer transform transition-all duration-700 hover:scale-102"
                onClick={(e) => handleImageClick("/img2.jpeg", e.currentTarget)}
              >
                <div className="overflow-hidden rounded-3xl shadow-[0_35px_60px_-12px_rgba(0,0,0,0.3)] bg-gradient-to-bl from-green-500/20 to-blue-500/10 -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <img
                    src="/img2.jpeg"
                    alt="Monetization dashboard - Earnings overview"
                    className="w-full h-[550px] rounded-3xl object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="550"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 text-4xl pointer-events-none motion-safe:animate-pulse z-10" aria-hidden="true">💎</div>
                <div className="absolute -bottom-6 left-1/3 text-5xl pointer-events-none motion-safe:animate-bounce z-10" aria-hidden="true" style={{ animationDelay: '0.8s' }}>🔥</div>
                <div className="absolute top-1/3 -left-8 text-3xl pointer-events-none motion-safe:animate-spin z-10" aria-hidden="true" style={{ animationDuration: '10s' }}>💰</div>
                
                {/* Additional emojis */}
                <div className="absolute -top-8 left-1/4 text-3xl pointer-events-none motion-safe:animate-bounce z-10" aria-hidden="true" style={{ animationDelay: '0.3s' }}>📈</div>
                <div className="absolute top-1/4 -right-12 text-2xl pointer-events-none motion-safe:animate-pulse z-10" aria-hidden="true" style={{ animationDelay: '1.2s' }}>⭐</div>
                <div className="absolute -bottom-8 -right-6 text-4xl pointer-events-none motion-safe:animate-spin z-10" aria-hidden="true" style={{ animationDuration: '12s' }}>🎯</div>
                <div className="absolute bottom-1/4 -left-6 text-3xl pointer-events-none motion-safe:animate-bounce z-10" aria-hidden="true" style={{ animationDelay: '0.6s' }}>💸</div>
                <div className="absolute -top-6 right-1/3 text-2xl pointer-events-none motion-safe:animate-pulse z-10" aria-hidden="true" style={{ animationDelay: '1.5s' }}>🚀</div>
                <div className="absolute top-2/3 -right-10 text-3xl pointer-events-none motion-safe:animate-spin z-10" aria-hidden="true" style={{ animationDuration: '15s' }}>✨</div>
                
                {/* Custom SVG Icons */}
                <div className="absolute -top-12 left-1/2 pointer-events-none motion-safe:animate-bounce z-10" style={{ animationDelay: '0.9s' }} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-500">
                    <path d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-1/2 -left-12 pointer-events-none motion-safe:animate-pulse z-10" style={{ animationDelay: '2s' }} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-10 right-1/4 pointer-events-none motion-safe:animate-spin z-10" style={{ animationDuration: '20s' }} aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-purple-500">
                    <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4l4-4-4-4v4H6a6 6 0 000 12h14z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute top-1/6 -right-14 pointer-events-none motion-safe:animate-bounce z-10" style={{ animationDelay: '1.8s' }} aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 left-1/6 pointer-events-none motion-safe:animate-pulse z-10" style={{ animationDelay: '0.4s' }} aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-red-500">
                    <path d="M21 16V4a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M21 16V4a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </figure>

              {/* Caption and CTA */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monetization Dashboard</h3>
                <p className="text-gray-600 mb-4">Track your earnings, analyze performance, and optimize your revenue streams.</p>
                <button 
                  onClick={(e) => handleImageClick("/img2.jpeg", e.currentTarget)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Explore Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Enhanced Lightbox Modal */}
        {lightboxImage && (
          <div 
            ref={lightboxRef}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full animate-in fade-in zoom-in-95 duration-300">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightboxImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                Press <kbd className="bg-white/20 px-1 rounded">Esc</kbd> to close
              </div>
            </div>
          </div>
        )}

        <Suspense fallback={<SectionLoader />}>
          <Monetization />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Statistics />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CallToAction />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;