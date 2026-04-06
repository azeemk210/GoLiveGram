import React from 'react';
import { Briefcase, BarChart3, Users, Zap } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Business: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Business Solutions</h1>
              <p className="text-lg text-gray-700">
                Grow your business with GoLiveGram's enterprise platform
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Our Business Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { icon: <BarChart3 />, title: 'Analytics', desc: 'Detailed insights into your audience and performance' },
                { icon: <Users />, title: 'Team Management', desc: 'Collaborate with your team members and manage roles' },
                { icon: <Zap />, title: 'Advanced Features', desc: 'Unlock premium features for enhanced streaming' },
                { icon: <Briefcase />, title: 'Enterprise Support', desc: '24/7 dedicated support for your business' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-100">
                  <div className="text-red-600 mb-4 w-8 h-8">{item.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Let's Work Together</h2>
            <p className="text-lg text-gray-700 mb-8">Contact our sales team to learn more about enterprise solutions</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Business;
