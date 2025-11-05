import React from 'react';
import { Play, Users, TrendingUp, Smartphone, Apple } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Extra Floating Emojis (top corners / sides) */}
        <div className="absolute top-8 right-8 floating-element text-3xl pointer-events-none" aria-hidden="true">🎥</div>
        <div className="absolute top-8 left-8 floating-element text-4xl pointer-events-none" aria-hidden="true">💎</div>
        <div className="absolute top-32 right-32 floating-element text-3xl pointer-events-none motion-safe:animate-bounce" aria-hidden="true">🔥</div>
        <div className="absolute top-16 left-1/4 floating-element text-3xl pointer-events-none" aria-hidden="true">🌟</div>
        {/* Floating Money Icons */}
        <div className="absolute top-20 left-10 floating-element text-4xl">💰</div>
        <div className="absolute top-40 right-20 floating-element text-3xl animate-pulse">💵</div>
        <div className="absolute bottom-40 left-20 floating-element text-2xl">💸</div>
        
        {/* Streaming Icons */}
        <div className="absolute top-60 left-1/4 floating-element text-3xl">📺</div>
        <div className="absolute top-32 right-1/3 floating-element text-2xl">⚡</div>
        <div className="absolute bottom-60 right-10 floating-element text-3xl">📡</div>
        
        {/* Hearts */}
        <div className="absolute top-80 left-1/3 floating-element text-2xl">❤️</div>
        <div className="absolute bottom-20 left-1/2 floating-element text-2xl">💜</div>
        <div className="absolute top-96 right-1/4 floating-element text-2xl">💙</div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🚀 Join 2.5M+ Active Creators
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Go Live.
              <br />
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Go Viral.
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Go Rich.
              </span>
              <span className="text-4xl ml-2">💰</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Stream, Connect, and Monetize Your Passion
              <br />
              <span className="text-yellow-300 font-semibold">
                Average Creator Earnings: $500-$5,000/month 📈
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => handleDownloadClick('ios')}
                className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download for</div>
                  <div>iOS</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleDownloadClick('android')}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 hover:bg-green-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download for</div>
                  <div>Android</div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <button 
                onClick={() => handleDownloadClick('web')}
                className="text-white border-2 border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                <span>Or Try Web Version 🌐</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">2.5M+</div>
                <div className="text-white/80 text-sm">Active Users 👥</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">$2M+</div>
                <div className="text-white/80 text-sm">Paid to Creators 💰</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">4.8★</div>
                <div className="text-white/80 text-sm">App Store Rating ⭐</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone */}
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-900 rounded-[2.5rem] p-6 h-[600px] w-[300px] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-white text-sm mb-4">
                    <span>9:41</span>
                    <span>📶 🔋100%</span>
                  </div>
                  
                  {/* Live Stream Interface */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-4 text-center">
                      <div className="text-white font-bold mb-2">🔴 LIVE</div>
                      <div className="text-white text-sm">2.3K watching 👥</div>
                    </div>
                    
                    {/* Mock Video Feed */}
                    <div className="bg-gray-700 rounded-xl h-48 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">👩‍🍳</div>
                        <div className="text-sm">@sarahcooks</div>
                        <div className="text-xs text-gray-300">Cooking Live</div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-2 text-xs text-white">
                      <div className="flex items-center space-x-2">
                        <span>😍</span>
                        <span>Mike: Amazing recipe!</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔥</span>
                        <span>Anna: Love your streams!</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-yellow-500/20 p-2 rounded">
                        <span>🎁</span>
                        <span>Tom sent a Rose 🌹 $0.50</span>
                      </div>
                    </div>
                    
                    {/* Earnings Display */}
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                      <div className="text-green-400 font-bold text-center">
                        💰 Today's Earnings: $127
                      </div>
                      <div className="text-green-300 text-xs text-center">
                        🚀 +$15 in last hour
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Floating Elements around phone */}
              <div className="absolute -top-10 -left-10 bg-white rounded-full p-4 shadow-lg floating-element">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white rounded-full p-4 shadow-lg floating-element">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              
              <div className="absolute top-1/2 -right-16 bg-yellow-400 rounded-full p-3 shadow-lg floating-element">
                <span className="text-2xl">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;