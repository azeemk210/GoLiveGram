import React from 'react';
import { Users } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Community: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <Users className="w-16 h-16 mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Community Forum</h1>
              <p className="text-lg text-gray-700 mb-8">
                Connect with creators, share experiences, and grow together
              </p>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Join Our Community</h2>
                  <p className="text-gray-700 mb-6">
                    GoLiveGram has a vibrant community of creators supporting each other and sharing best practices.
                  </p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
                    Join Our Forum
                  </button>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Popular Topics</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Streaming Tips & Tricks</li>
                    <li>• Monetization Strategies</li>
                    <li>• Technical Support</li>
                    <li>• Creator Success Stories</li>
                    <li>• Feature Requests</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Community Guidelines</h2>
                  <p className="text-gray-700 mb-4">
                    Be respectful, supportive, and helpful. Our community is for creators of all levels to learn and grow together.
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

export default Community;
