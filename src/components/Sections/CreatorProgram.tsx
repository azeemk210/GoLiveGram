import React from 'react';
import { Sparkles, TrendingUp, Gift, Users, Zap } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const CreatorProgram: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Early Monetization',
      description: 'Start earning from day one, even as a new creator. No minimum follower count required.'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Multiple Revenue Streams',
      description: 'Earn through virtual gifts, story views, subscriptions, brand deals, and more.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Creator Support',
      description: 'Access to exclusive resources, mentorship, and community support from experienced creators.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Priority Features',
      description: 'Get early access to new features and tools designed specifically for creators.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Creator Program</h1>
              <p className="text-lg text-gray-700">
                Join thousands of creators earning on GoLiveGram
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Why Join Our Program?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-300">
                  <div className="flex items-start mb-4">
                    <div className="text-red-600 mr-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">How to Get Started</h2>
            <div className="max-w-3xl mx-auto">
              {[
                { step: 1, title: 'Download the App', description: 'Get GoLiveGram from your app store and create your account.' },
                { step: 2, title: 'Complete Your Profile', description: 'Set up your profile with a photo, bio, and links to your social media.' },
                { step: 3, title: 'Start Streaming', description: 'Begin broadcasting to build your audience and connect with viewers.' },
                { step: 4, title: 'Enable Monetization', description: 'Once eligible, activate monetization features to start earning.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to Start Earning?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our creator community and start monetizing your passion today.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Download Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreatorProgram;
