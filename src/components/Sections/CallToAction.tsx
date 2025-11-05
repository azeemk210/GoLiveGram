import React from 'react';
import { Download, Smartphone, Rocket, Star } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 via-purple-600 to-secondary-500 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🚀</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">💰</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-bounce">📱</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse">⚡</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Primary CTA */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Ready to Go Live
              <br />
              <span className="text-yellow-300">and Get Paid?</span>
              <span className="text-4xl ml-2">💰</span>
            </h2>
          </div>
          
          <p className="text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join millions of creators earning real money doing what they love.
            <br />
            <span className="text-yellow-300 font-semibold">
              Start your journey to financial freedom today! 🌟
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={() => handleDownloadClick('ios')}
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300 shadow-2xl cursor-pointer"
            >
              <Download className="w-6 h-6" />
              <span>Download for iOS 🍎</span>
            </button>
            
            <button 
              onClick={() => handleDownloadClick('android')}
              className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300 shadow-2xl cursor-pointer"
            >
              <Download className="w-6 h-6" />
              <span>Download for Android 🤖</span>
            </button>
          </div>

          <button 
            onClick={() => handleDownloadClick('web')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center space-x-2 mx-auto cursor-pointer"
          >
            <Smartphone className="w-5 h-5" />
            <span>Start Earning Today! ⚡</span>
          </button>
        </div>

        {/* Secondary CTA Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Creator CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-2xl font-bold mb-4">
              Join 50,000+ Successful Creators
            </h3>
            <p className="text-white/90 mb-6">
              Average earnings: $500-$5000/month 💰📈
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200">
                🎬 Become a Creator
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                📚 Learn More
              </button>
            </div>
          </div>

          {/* Web Version CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">
              Try the Web Version First
            </h3>
            <p className="text-white/90 mb-6">
              Experience GoLiveGram in your browser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200">
                🌐 Launch Web App
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                📺 See Demo
              </button>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-red-500/20 border-2 border-red-400 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-3xl animate-pulse">🔥</div>
            <h3 className="text-2xl font-bold text-red-200">
              Limited Time: Creator Program Spots Available!
            </h3>
            <div className="text-3xl animate-pulse">🔥</div>
          </div>
          <p className="text-red-100 mb-4">
            Join now and get priority access to brand partnerships + $100 bonus credits
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-200">
            <Rocket className="w-5 h-5" />
            <span className="font-semibold">Don't Miss the Creator Revolution</span>
            <Star className="w-5 h-5" />
          </div>
        </div>

        {/* Final Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold">2.5M+</div>
              <div className="text-white/80 text-sm">Creators Trust Us</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8⭐</div>
              <div className="text-white/80 text-sm">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$2M+</div>
              <div className="text-white/80 text-sm">Creator Earnings</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-white/80 text-sm">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;