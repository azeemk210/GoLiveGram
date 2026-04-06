import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Support: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get started on GoLiveGram?',
      answer: 'Download the GoLiveGram app, create an account, set up your profile, and you\'re ready to start streaming or watching live content from your favorite creators.'
    },
    {
      question: 'How do I earn money on GoLiveGram?',
      answer: 'You can earn through virtual gifts, story views rewards, snap & earn, paid subscriptions, brand partnerships, live donations, and exclusive content. Visit our monetization section to learn more.'
    },
    {
      question: 'What are the requirements to become a creator?',
      answer: 'You must be at least 18 years old, provide valid identification, and comply with our Community Guidelines. Some monetization features may have additional requirements.'
    },
    {
      question: 'How do I withdraw my earnings?',
      answer: 'Go to your wallet section, and you can withdraw your earnings through our payment partners. Minimum withdrawal amounts and processing times apply.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team via email, live chat, or through the in-app help center. We\'re here to help 24/7.'
    }
  ];

  const supportChannels = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'support@golivegram.com',
      contact: 'Response time: 24-48 hours'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Available in app',
      contact: 'Response time: 5-10 minutes'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: '+1 (800) GOL-IVEGRAM',
      contact: 'Available: Mon-Fri 9AM-6PM EST'
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
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Help & Support</h1>
              <p className="text-lg text-gray-700">
                We're here to help you with any questions or issues you may have
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {supportChannels.map((channel, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-100 text-center">
                  <div className="flex justify-center mb-4 text-red-600">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{channel.title}</h3>
                  <p className="text-gray-700 mb-2">{channel.description}</p>
                  <p className="text-sm text-gray-600">{channel.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                    <span className={`text-red-600 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Send us a Message</h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Tell us more about your issue..." />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Support;
