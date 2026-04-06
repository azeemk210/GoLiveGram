import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEO/SEOHead';
import Header from './components/Layout/Header';

// Lazy imports for performance
const HomePage = React.lazy(() => import('./components/Sections/HomePage'));
const Footer = React.lazy(() => import('./components/Layout/Footer'));
const AboutUs = React.lazy(() => import('./components/Sections/AboutUs'));
const PrivacyPolicy = React.lazy(() => import('./components/Sections/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/Sections/TermsOfService'));
const Careers = React.lazy(() => import('./components/Sections/Careers'));
const Login = React.lazy(() => import('./components/Sections/Login'));
const Support = React.lazy(() => import('./components/Sections/Support'));
const CreatorProgram = React.lazy(() => import('./components/Sections/CreatorProgram'));
const Business = React.lazy(() => import('./components/Sections/Business'));
const CreatorGuide = React.lazy(() => import('./components/Sections/CreatorGuide'));
const ApiDocs = React.lazy(() => import('./components/Sections/ApiDocs'));
const Community = React.lazy(() => import('./components/Sections/Community'));
const Press = React.lazy(() => import('./components/Sections/Press'));
const CookiePolicy = React.lazy(() => import('./components/Sections/CookiePolicy'));
const GDPR = React.lazy(() => import('./components/Sections/GDPR'));

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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/support" element={<Support />} />
              <Route path="/creator-program" element={<CreatorProgram />} />
              <Route path="/business" element={<Business />} />
              <Route path="/creator-guide" element={<CreatorGuide />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/community" element={<Community />} />
              <Route path="/press" element={<Press />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/gdpr" element={<GDPR />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
