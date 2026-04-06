import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small pieces of data stored on your device that help us remember your preferences and improve your experience on GoLiveGram.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Types of Cookies We Use</h2>
                <ul className="space-y-2 ml-4">
                  <li>• Essential Cookies: Required for basic functionality</li>
                  <li>• Performance Cookies: Help us understand how you use our platform</li>
                  <li>• Functionality Cookies: Remember your preferences</li>
                  <li>• Marketing Cookies: Track your interests for personalized content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Managing Cookies</h2>
                <p>
                  You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have questions about our cookie policy, please contact us at privacy@golivegram.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
