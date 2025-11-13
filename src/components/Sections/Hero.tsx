import React from 'react';
import { Play, Users, TrendingUp, Smartphone, Apple } from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-20 xs:pt-24 md:pt-28 w-full max-w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 z-10 pt-50">
        {/* Extra Floating Emojis (top corners / sides) - Hidden on mobile */}
        <div className="absolute top-8 right-8 floating-element text-3xl pointer-events-none hidden md:block" aria-hidden="true">🎥</div>
        <div className="absolute top-8 left-8 floating-element text-4xl pointer-events-none hidden md:block" aria-hidden="true">💎</div>
        <div className="absolute top-32 right-32 floating-element text-3xl pointer-events-none motion-safe:animate-bounce hidden md:block" aria-hidden="true">🔥</div>
        <div className="absolute top-16 left-1/4 floating-element text-3xl pointer-events-none hidden md:block" aria-hidden="true">🌟</div>
        {/* Floating Money Icons - Hidden on mobile */}
        <div className="absolute top-20 left-10 floating-element text-4xl hidden md:block">💰</div>
        <div className="absolute top-40 right-20 floating-element text-3xl animate-pulse hidden md:block">💵</div>
        <div className="absolute bottom-40 left-20 floating-element text-2xl hidden md:block">💸</div>
        
        {/* Streaming Icons - Hidden on mobile */}
        <div className="absolute top-60 left-1/4 floating-element text-3xl hidden md:block">📺</div>
        <div className="absolute top-32 right-1/3 floating-element text-2xl hidden md:block">⚡</div>
        <div className="absolute bottom-60 right-10 floating-element text-3xl hidden md:block">📡</div>
        
        {/* Hearts - Hidden on mobile */}
        <div className="absolute top-80 left-1/3 floating-element text-2xl hidden md:block">❤️</div>
        <div className="absolute bottom-20 left-1/2 floating-element text-2xl hidden md:block">💜</div>
        <div className="absolute top-96 right-1/4 floating-element text-2xl hidden md:block">💙</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10 relative w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                🚀 Join 2.5M+ Active Creators
              </span>
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight break-words">
              Go Live.
              <br />
              <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Go Viral.
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Go Rich.
              </span>
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl ml-1 sm:ml-2">💰</span>
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-1 xs:px-2 sm:px-0 break-words">
              Stream, Connect, and Monetize Your Passion
              <br />
              <span className="text-yellow-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Average Creator Earnings: ₹500-₹5,000/month 📈
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-1 xs:px-2 sm:px-0 w-full max-w-full">
              <button 
                onClick={() => handleDownloadClick('ios')}
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                <Apple className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download for</div>
                  <div className="text-sm sm:text-base">iOS</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleDownloadClick('android')}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-green-700 transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download for</div>
                  <div className="text-sm sm:text-base">Android</div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mb-8 sm:mb-0">
              <button 
                onClick={() => handleDownloadClick('web')}
                className="text-white border-2 border-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 cursor-pointer text-sm sm:text-base"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Or Try Web Version 🌐</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 mt-6 xs:mt-8 sm:mt-12 px-1 xs:px-2 sm:px-0 w-full max-w-full">
              <div className="text-center min-w-0">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 truncate">2.5M+</div>
                <div className="text-white/80 text-xs sm:text-sm leading-tight">Active Users 👥</div>
              </div>
              <div className="text-center min-w-0">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 truncate">₹2M+</div>
                <div className="text-white/80 text-xs sm:text-sm leading-tight">Paid to Creators 💰</div>
              </div>
              <div className="text-center min-w-0">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 truncate">4.8★</div>
                <div className="text-white/80 text-xs sm:text-sm leading-tight">App Store Rating ⭐</div>
              </div>
            </div>
          </div>

          {/* Right Content - iPhone 16 Mockups */}
          <div className="relative w-full flex flex-col lg:flex-row gap-4 md:gap-6 justify-center items-center order-2 lg:order-2 mb-8 lg:mb-0">
            {/* First iPhone Mockup */}
            <div className="relative z-50 transform rotate-[8deg] scale-75 sm:scale-80 md:scale-85 lg:scale-90">
                {/* iPhone 16 Shell */}
                <div className="w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                  <div 
                    className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                    style={{ isolation: 'isolate' }}
                  >
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                      {/* Camera Feed Background */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: "url('https://img.freepik.com/premium-photo/selfie-taken-by-fan-front-row-capturing-their-excitement-stage_891336-49344.jpg')",
                          filter: 'saturate(1.05) contrast(1.05)',
                          zIndex: 0
                        }}
                      />
                    
                      {/* Vignette */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{ 
                          background: 'radial-gradient(120% 90% at 50% 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
                          zIndex: 1
                        }}
                      />

                      {/* Dynamic Island */}
                      <div 
                        className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                        style={{ zIndex: 5 }}
                      />

                      {/* Top Bar */}
                      <div className="absolute top-[56px] left-3 right-3 flex items-center justify-between gap-2 z-10">
                        <div className="flex items-center gap-2">
                          <button className="w-9 h-9 rounded-[10px] bg-black/45 backdrop-blur-sm border border-white/8 flex items-center justify-center">
                            <svg className="w-[18px] h-[18px] stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                              <path d="M15 18l-6-6 6-6"/>
                            </svg>
                          </button>
                          <div className="flex items-center gap-2 px-[10px] py-[6px] rounded-full bg-black/55 backdrop-blur-sm font-semibold text-xs text-white">
                            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(255,51,85,0.18)]" />
                            LIVE
                            <span className="text-white/70">• 00:09</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-black/45 backdrop-blur-sm px-[10px] py-[6px] rounded-full text-xs text-white border border-white/8 flex items-center gap-1">
                            <svg className="w-4 h-4 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                            1,284
                          </div>
                          <button className="w-9 h-9 rounded-[10px] bg-black/45 backdrop-blur-sm border border-white/8 flex items-center justify-center">
                            <svg className="w-[18px] h-[18px] stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                              <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Comments */}
                      <div className="absolute left-[10px] right-[10px] bottom-[170px] z-10 flex flex-col gap-[6px]">
                        {[
                          { avatar: 'A', handle: '@arjun', message: 'Sound is super clear!', time: '8s' },
                          { avatar: 'P', handle: '@priya', message: 'Love this angle 😍', time: '10s' },
                          { avatar: 'R', handle: '@rahul', message: 'Where is this? Looks awesome.', time: '12s' },
                          { avatar: 'K', handle: '@kavya', message: 'Pin the recipe pls 🙏', time: '15s' },
                          { avatar: 'V', handle: '@vikram', message: 'We can hear you fine.', time: '18s' }
                        ].slice(-3).map((comment, i) => (
                          <div key={i} className="grid grid-cols-[26px_1fr] gap-2 items-start bg-black/35 border border-white/6 px-2 py-[6px] rounded-xl backdrop-blur-sm text-xs leading-tight">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 via-red-500 to-purple-600 flex items-center justify-center text-white font-bold text-[11px] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                              {comment.avatar}
                            </div>
                            <div className="text-white">
                              <span className="font-bold mr-1">{comment.handle}</span>
                              {comment.message}
                              <span className="text-white/70 ml-1 text-[11px]">• {comment.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Input Bar */}
                      <div className="absolute left-[10px] right-[10px] bottom-[66px] z-10 flex gap-2">
                        <div className="flex-1 bg-black/45 border border-white/8 px-3 py-[10px] rounded-2xl text-[13px] text-white flex items-center gap-2">
                          Add a comment...
                        </div>
                        <button className="w-[54px] rounded-[14px] border border-white/8 bg-black/45 flex items-center justify-center">
                          <svg className="w-[18px] h-[18px] stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"/>
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Home">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Search">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7"/>
                            <path d="M21 21l-4.35-4.35"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Create">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Reels">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <rect x="3" y="5" width="18" height="14" rx="3"/>
                            <path d="M10 9l5 3-5 3z"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Profile">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4"/>
                            <path d="M4 20a8 8 0 0 1 16 0"/>
                          </svg>
                        </button>
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

            {/* Second iPhone Mockup */}
            <div className="relative z-50 transform rotate-[-5deg] scale-75 sm:scale-80 md:scale-85 lg:scale-90">
                {/* iPhone 16 Shell */}
                <div className="w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                  <div 
                    className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                    style={{ isolation: 'isolate' }}
                  >
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                      {/* Camera Feed Background */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: "url('https://www.boredpanda.com/blog/wp-content/uploads/2015/07/animals-with-camera-helping-photographers-9__880.jpg?utm_campaign=rebelboost_true')",
                          filter: 'saturate(1.05) contrast(1.05)',
                          zIndex: 0
                        }}
                      />
                      
                      {/* Vignette */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{ 
                          background: 'radial-gradient(120% 90% at 50% 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
                          zIndex: 1
                        }}
                      />

                      {/* Dynamic Island */}
                      <div 
                        className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                        style={{ zIndex: 5 }}
                      />

                      {/* Top Bar */}
                      <div className="absolute top-[56px] left-3 right-3 flex items-center gap-2 z-10">
                        <div className="px-[10px] py-[6px] rounded-full bg-black/55 backdrop-blur-sm font-semibold text-xs text-white">
                          @naturephotographer
                        </div>
                        <button className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[11px] font-semibold border border-white/20">
                          Follow
                        </button>
                      </div>

                      {/* Live Feed Info */}
                      <div className="absolute left-[10px] right-[10px] bottom-[170px] z-10 flex flex-col gap-[8px]">
                        {/* Recent Comments */}
                        <div className="flex flex-col gap-1">
                          {[
                            { avatar: 'A', handle: '@ananya', message: 'Amazing shot! 📸', time: '2s' },
                            { avatar: 'S', handle: '@sidharth', message: 'How close were you?', time: '5s' }
                          ].map((comment, i) => (
                            <div key={i} className="grid grid-cols-[22px_1fr] gap-2 items-start bg-black/25 border border-white/6 px-2 py-1 rounded-lg backdrop-blur-sm text-xs leading-tight">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                                {comment.avatar}
                              </div>
                              <div className="text-white">
                                <span className="font-bold mr-1">{comment.handle}</span>
                                {comment.message}
                                <span className="text-white/70 ml-1 text-[10px]">• {comment.time}</span>
                              </div>
                            </div>
                          ))}
                          
                          {/* User typing indicator */}
                          <div className="grid grid-cols-[22px_1fr] gap-2 items-start bg-black/35 border border-white/8 px-2 py-1 rounded-lg backdrop-blur-sm text-xs leading-tight">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                              D
                            </div>
                            <div className="text-white flex items-center gap-2">
                              <span className="font-bold">@deepika</span>
                              <span className="text-white/70">is typing</span>
                              <div className="flex gap-1">
                                <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Input Bar */}
                      <div className="absolute left-[10px] right-[10px] bottom-[66px] z-10 flex gap-2">
                        <div className="flex-1 bg-black/45 border border-white/8 px-3 py-[10px] rounded-2xl text-[13px] text-white flex items-center gap-2">
                          Add a comment...
                        </div>
                        <button className="w-[54px] rounded-[14px] border border-white/8 bg-black/45 flex items-center justify-center">
                          <svg className="w-[18px] h-[18px] stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"/>
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Home">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Search">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7"/>
                            <path d="M21 21l-4.35-4.35"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Create">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Reels - Watching Live">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <rect x="3" y="5" width="18" height="14" rx="3"/>
                            <path d="M10 9l5 3-5 3z"/>
                            <circle cx="18" cy="7" r="2" className="fill-red-500 stroke-red-500"/>
                          </svg>
                        </button>
                        <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Profile">
                          <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4"/>
                            <path d="M4 20a8 8 0 0 1 16 0"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
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