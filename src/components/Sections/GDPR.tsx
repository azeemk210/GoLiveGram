import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const GDPR: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">GDPR Compliance</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">What is GDPR?</h2>
                <p>
                  The General Data Protection Regulation (GDPR) is a European regulation that protects the privacy and personal data of individuals within the European Union.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Your Rights Under GDPR</h2>
                <ul className="space-y-2 ml-4">
                  <li>• Right to access your personal data</li>
                  <li>• Right to correct inaccurate data</li>
                  <li>• Right to delete your data</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Processing</h2>
                <p>
                  GoLiveGram processes personal data only with your consent and for legitimate purposes. We implement appropriate safeguards to protect your data and ensure compliance with GDPR.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Protection Officer</h2>
                <p>
                  Our Data Protection Officer is responsible for ensuring GDPR compliance. You can reach them at dpo@golivegram.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Submit a Request</h2>
                <p>
                  To exercise any of your GDPR rights, please submit a request to privacy@golivegram.com with your full name, email, and a description of your request.
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

export default GDPR;
