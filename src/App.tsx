import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEO/SEOHead';
import Header from './components/Layout/Header';

// Lazy imports for performance
const HomePage = React.lazy(() => import('./components/Sections/HomePage'));
const Footer = React.lazy(() => import('./components/Layout/Footer'));
const PrivacyPolicy = React.lazy(() => import('./components/Sections/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/Sections/TermsOfService'));
const Careers = React.lazy(() => import('./components/Sections/Careers'));
const Login = React.lazy(() => import('./components/Sections/Login'));

// Loading component for Suspense fallbacks
const SectionLoader: React.FC<{ height?: string }> = ({ height = 'h-96' }) => (
  <div className={`${height} flex items-center justify-center bg-gradient-to-r from-gray-50 to-white`}>
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<SectionLoader />}> {/* Consolidated Suspense wrapper */}
          <div className="min-h-screen bg-white overflow-x-hidden">
            <SEOHead />
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
