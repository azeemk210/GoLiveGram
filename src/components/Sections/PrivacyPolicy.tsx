import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header with Logo Only */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link 
            to="/" 
            className="inline-flex items-center hover:scale-105 transition-transform duration-200"
            aria-label="Go back to GoLiveGram homepage"
          >
            <img 
              src="/Go.svg" 
              alt="GoLiveGram - Stream, Connect & Monetize Your Passion" 
              className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              style={{ maxWidth: '160px' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/Go.png';
              }}
            />
          </Link>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-4 sm:py-8 md:py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Privacy Policy</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-sm md:prose-lg max-w-none">
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">1. Introduction</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                Welcome to GoLiveGram ("we," "our," or "us"). We are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                live streaming platform and related services.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li>Account information (username, email address, phone number)</li>
                <li>Profile information (display name, bio, profile picture)</li>
                <li>Payment information (for monetization features)</li>
                <li>Verification documents (for creator verification)</li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">2.2 Content Information</h3>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li>Live streams, videos, and other content you create</li>
                <li>Comments, messages, and interactions</li>
                <li>Metadata associated with your content</li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">2.3 Technical Information</h3>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li>Device information (device type, operating system, browser)</li>
                <li>Usage data (app interactions, features used, time spent)</li>
                <li>Location data (if enabled)</li>
                <li>IP address and network information</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li>Provide and maintain our live streaming services</li>
                <li>Process payments and handle monetization</li>
                <li>Improve user experience and platform functionality</li>
                <li>Send important updates and notifications</li>
                <li>Ensure platform safety and security</li>
                <li>Provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">4. Information Sharing</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service providers:</strong> Third-party companies that help us operate our platform</li>
                <li><strong>Legal requirements:</strong> When required by law or legal process</li>
                <li><strong>Safety:</strong> To protect rights, property, or safety of users</li>
                <li><strong>Business transfers:</strong> In case of merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">5. Data Security</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                We implement appropriate technical and organizational measures to protect your information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet is 100% secure.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">6. Your Privacy Rights</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-sm md:text-base text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict processing of your information</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">7. Children's Privacy</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                Our platform is not intended for children under 13 years old. We do not knowingly collect personal 
                information from children under 13. If you are a parent and believe your child has provided us with 
                personal information, please contact us.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">8. International Data Transfers</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure 
                appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">9. Updates to This Policy</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">10. Contact Us</h2>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <p className="text-sm md:text-base text-gray-700 mb-2"><strong>Email:</strong> support@golivegram.com</p>
              </div>
            </section>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;