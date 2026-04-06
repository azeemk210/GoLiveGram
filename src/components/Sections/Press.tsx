import React from 'react';
import { Newspaper } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Press: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <Newspaper className="w-16 h-16 mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Press Kit</h1>
              <p className="text-lg text-gray-700 mb-8">
                Download assets and information about GoLiveGram
              </p>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">About GoLiveGram</h2>
                  <p className="text-gray-700 mb-4">
                    GoLiveGram is the world's leading live streaming platform for creators to monetize their passion. 
                    With over 2.5 million creators and a commitment to early monetization, GoLiveGram is revolutionizing 
                    how creators earn from their content.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Brand Assets</h2>
                  <p className="text-gray-700 mb-4">Download our logos, brand guidelines, and other assets</p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
                    Download Assets
                  </button>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Media Inquiries</h2>
                  <p className="text-gray-700">
                    For press inquiries, interviews, and media requests, please contact: press@golivegram.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Press;
