import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <>
      <Header />

      <main className="pt-24 bg-white">

        {/* HERO */}
        <section className="py-16 ">
          <div className="container mx-auto px-6 text-center max-w-4xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight tracking-tight">
  About GoLive<span className="text-red-600">Gram</span>
</h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
              GoLiveGram is a next-generation, creator-first social media platform built for people who want more than just likes and followers. 
              It empowers creators to <span className="font-semibold text-black">create, grow, and earn</span> through a fair, transparent, and performance-driven ecosystem.
              From short-form videos and reels to live streaming and premium content, GoLiveGram provides multiple monetization opportunities 
              designed to reward originality, engagement, and consistency — not just popularity.
              Whether you're just starting out or already an established creator, GoLiveGram gives you the tools, reach, and earning potential 
              to build a sustainable digital career.
            </p>

          </div>
        </section>

      

        {/* WHY CHOOSE */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
      Why Choose GoLiveGram?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
        <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
        <h3 className="text-xl font-bold mb-4">💰 Earn from Day One</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start earning from your first content without waiting to become an influencer.
        </p>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• Instant monetization dashboard</li>
          <li>• Real-time earnings tracking</li>
          <li>• Performance-based payouts</li>
          <li>• Weekly payout system</li>
          <li>• Engagement-based bonuses</li>
          <li>• Creator-level earning boosts</li>
          <li>• Early-stage creator incentives</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
        <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
        <h3 className="text-xl font-bold mb-4">📊 Multiple Income Streams</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Diversify your earnings with multiple monetization opportunities in one platform.
        </p>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• Reels & content monetization</li>
          <li>• Live streaming virtual gifts</li>
          <li>• Brand collaborations</li>
          <li>• Affiliate marketing integration</li>
          <li>• Paid courses & tutorials</li>
          <li>• Subscription-based content</li>
          <li>• Story & short content bonuses</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
        <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
        <h3 className="text-xl font-bold mb-4">⚖️ Fair Monetization System</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A transparent and performance-driven model that rewards real content quality.
        </p>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• Views-based earnings (40%)</li>
          <li>• Engagement-based rewards (30%)</li>
          <li>• Watch time importance (20%)</li>
          <li>• Content quality scoring (10%)</li>
          <li>• AI + manual content verification</li>
          <li>• Anti-fake engagement system</li>
          <li>• Transparent payout calculations</li>
        </ul>
      </div>

    </div>
  </div>
</section>

       

        {/* MISSION VISION GOALS CARDS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Our Core Foundation
            </h2>

            <div className="space-y-8">

              {/* MISSION - LEFT ALIGNED */}
              <div className="flex justify-start">
                <div className="w-full bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
                  <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-4">🎯 Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To empower creators of all levels to turn their passion into sustainable income
                    through a fair, transparent, and performance-driven platform.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We believe every creator deserves equal opportunities to monetize their talents and build 
                    a thriving career without compromising creative freedom. Our mission is to disrupt the creator 
                    economy by eliminating barriers and providing transparent metrics that reward genuine engagement 
                    and quality content creation.
                  </p>
                </div>
              </div>

              {/* VISION - RIGHT ALIGNED */}
              <div className="flex justify-end">
                <div className="w-full bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
                  <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-4">🌍 Vision</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To become the leading global creator economy platform where content,
                    community, and monetization seamlessly connect.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We envision a world where creators control their destiny, audiences enjoy authentic content, and 
                    brands find genuine influencers. GoLiveGram will be the unified destination where creators showcase 
                    talent, build loyal communities, and unlock unlimited monetization potential through our innovative 
                    performance-based frameworks and multi-channel revenue streams.
                  </p>
                </div>
              </div>

              {/* GOALS - LEFT ALIGNED */}
              <div className="flex justify-start">
                <div className="w-full bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-300">
                  <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-4">🚀 Goals</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our strategic objectives are designed to build a sustainable and thriving creator ecosystem:
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Democratize monetization for creators at all levels</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Promote and reward high-quality, authentic content</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Build a fair, transparent ecosystem with no hidden fees</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Empower creators with analytics and growth tools</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Strengthen genuine community engagement</span></li>
                    <li className="flex items-start"><span className="text-red-600 mr-3">✓</span><span>Ensure platform trust, safety, and regulatory compliance</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <p className="text-gray-700 text-lg mb-6">
              Ready to turn your creativity into income?
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition"
            >
              Get Started Today
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;