import React, { useState, useRef, useEffect, Suspense } from 'react';
import { X } from 'lucide-react';
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
  <div className={`${height} flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200`}> {/* Updated background */}
    <div className="flex flex-col items-center space-y-4">
      <div className="w-10 h-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div> {/* Updated spinner */}
      <p className="text-gray-700 font-semibold">Please wait, loading content...</p> {/* Updated message */}
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

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
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  return (
    <>
      <Hero />
      <FloatingElements />

      <Suspense fallback={<SectionLoader />}>
        <MobilePreview />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

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
    </>
  );
};

export default HomePage;