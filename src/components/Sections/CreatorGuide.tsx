import React from 'react';
import { BookOpen } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const CreatorGuide: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <BookOpen className="w-16 h-16 mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Creator Guide</h1>
              <p className="text-lg text-gray-700 mb-8">
                Everything you need to succeed as a GoLiveGram creator
              </p>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Getting Started</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Set up a compelling profile with a professional photo and bio</li>
                    <li>• Choose a niche that matches your passion and expertise</li>
                    <li>• Plan your streaming schedule and stick to it</li>
                    <li>• Engage with your audience through comments and messages</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Best Practices</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Keep streams between 30 minutes to 2 hours for optimal engagement</li>
                    <li>• Use eye-catching titles and descriptions</li>
                    <li>• Interact with viewers in real-time</li>
                    <li>• Promote your streams on social media</li>
                    <li>• Maintain consistent quality and professionalism</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-300">
                  <h2 className="text-2xl font-bold text-black mb-4">Monetization Tips</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Encourage viewers to send gifts during streams</li>
                    <li>• Offer exclusive content for subscribers</li>
                    <li>• Partner with brands for sponsored content</li>
                    <li>• Use storytelling to create emotional connections</li>
                    <li>• Thank supporters and create a welcoming community</li>
                  </ul>
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

export default CreatorGuide;
