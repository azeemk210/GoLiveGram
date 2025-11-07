import React, { useState, useEffect, useRef } from 'react';
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const MobilePreview: React.FC = () => {
  /** ---------------------------------------------------------
   * Phone 2: TikTok-style, UNIDIRECTIONAL smooth scroll + preload
   * - Two persistent <video> layers (A/B)
   * - Always slide UP: current 0→-100%, next 100%→0
   * - Preload next video fully before triggering the slide
   * - No remounting (no keys), so no autoplay hiccups
   * --------------------------------------------------------- */
  const reelSources = [
    'https://www.pexels.com/download/video/3468587/',
    'https://www.pexels.com/download/video/16070036/',
    'https://www.pexels.com/download/video/8165478/',
    'https://www.pexels.com/download/video/29356214/',
    'https://www.pexels.com/download/video/10805308/',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);           // currently visible video index
  const [nextIndex, setNextIndex] = useState(1);                 // upcoming video index (preloaded)
  const [activeA, setActiveA] = useState(true);                  // which layer is the "current" on screen (true => A is current)
  const [isTransitioning, setIsTransitioning] = useState(false); // animating state
  const [nextReady, setNextReady] = useState(false);             // next layer is buffered/ready

  const aRef = useRef<HTMLVideoElement>(null); // video element for layer A
  const bRef = useRef<HTMLVideoElement>(null); // video element for layer B
  const intervalRef = useRef<number | null>(null);
  const endTimeoutRef = useRef<number | null>(null);

  // Helper: play safely (ignore autoplay errors)
  const safePlay = (v?: HTMLVideoElement | null) => {
    if (!v) return;
    const p = v.play();
    if (p && typeof p.then === 'function') p.catch(() => {});
  };

  // Prepare a given element with a URL and mark nextReady when buffered enough
  const preloadOn = (el: HTMLVideoElement | null, url: string) => {
    if (!el) return;
    setNextReady(false);
    // Set source and load
    el.src = url;
    el.load();
    const onReady = () => {
      setNextReady(true);
      safePlay(el);
    };
    // 'loadeddata' is a good compromise; 'canplaythrough' can be too strict on mobile
    el.addEventListener('loadeddata', onReady, { once: true });
  };

  // Initial mount: set A = currentIndex, B = nextIndex (preloaded)
  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (a) {
      a.src = reelSources[currentIndex];
      a.load();
      safePlay(a);
    }
    preloadOn(b, reelSources[nextIndex]);
    // cleanup any running timers on unmount
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (endTimeoutRef.current) window.clearTimeout(endTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // Drive the auto-advance every 5s, but only slide if the next is ready
  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (!nextReady) return; // wait until upcoming video is buffered
      setIsTransitioning(true);

      // After the slide animation finishes, swap roles and preload the NEW next
      if (endTimeoutRef.current) window.clearTimeout(endTimeoutRef.current);
      endTimeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);

        // Commit new current index (the one we just slid in)
        setCurrentIndex(nextIndex);

        // Flip which layer is "current"
        setActiveA((prevActive) => {
          const newActive = !prevActive;

          // Compute the next-next index and assign it to the now-inactive layer
          const nn = (nextIndex + 1) % reelSources.length;
          setNextIndex(nn);

          // The inactive layer after the flip:
          // if newActive === true then A is current, so B is inactive
          // if newActive === false then B is current, so A is inactive
          const inactiveRef = newActive ? bRef.current : aRef.current;
          preloadOn(inactiveRef, reelSources[nn]);

          // Also ensure the now-current (active) keeps playing
          const currentRef = newActive ? aRef.current : bRef.current;
          safePlay(currentRef);

          return newActive;
        });
      }, 600); // must match the CSS transition duration
    }, 5000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [nextReady, nextIndex, reelSources.length]);

  return (
    <section id="creators" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            See GoLiveGram in Action 📱
          </h2>
          <p className="text-xl text-gray-600">
            Experience the power of our platform across all devices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone 1: Live Streaming (unchanged) */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[300px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Camera Feed Background */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'saturate(1.05) contrast(1.05) brightness(0.8)', zIndex: 0 }}
                      autoPlay muted loop playsInline
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    >
                      <source src="https://www.pexels.com/download/video/30061654/" type="video/mp4" />
                      <source src="https://www.pexels.com/download/video/3468587/" type="video/mp4" />
                    </video>

                    {/* Fallback background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1609466032539-214fbc49d8e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')",
                        zIndex: -1
                      }}
                    />

                    {/* Vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(120% 90% at 50% 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
                        zIndex: 2
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
                          <span className="text-white/70">• 02:14</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-black/45 backdrop-blur-sm px-[10px] py-[6px] rounded-full text-xs text-white border border-white/8 flex items-center gap-1">
                          <svg className="w-4 h-4 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          1.2K
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="absolute left-[10px] right-[10px] bottom-[130px] z-10 flex flex-col gap-[3px]">
                      {[
                        { avatar: 'S', handle: '@sarah_chef', message: 'This looks amazing!', time: '5s', gradient: 'from-pink-500 via-rose-500 to-red-500' },
                        { avatar: 'M', handle: '@mike_foodie', message: 'Share the itenary!', time: '8s', gradient: 'from-blue-500 via-cyan-500 to-teal-500' },
                        { avatar: 'G', handle: '@generous_viewer', message: 'Sent $47 gift!', time: '12s', gradient: 'from-green-500 via-emerald-500 to-lime-500' }
                      ].map((comment, i) => (
                        <div key={i} className="grid grid-cols-[26px_1fr] gap-2 items-start bg-black/35 border border-white/6 px-2 py-[6px] rounded-xl backdrop-blur-sm text-xs leading-tight">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${comment.gradient} flex items-center justify-center text-white font-bold text-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.3)]`}>
                            {comment.avatar}
                          </div>
                          <div className="text-white">
                            <span className="font-bold mr-1">{comment.handle}</span>
                            {comment.message}
                            <span className="text-white/70 ml-1 text-[10px]">• {comment.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input Bar */}
                    <div className="absolute left-[10px] right-[10px] bottom-[66px] z-10 flex gap-2">
                      <div className="flex-1 bg-black/45 border border-white/8 px-3 py-[10px] rounded-2xl text-[13px] text-white flex items-center gap-2">
                        💬 Add a comment...
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
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Reels - Active">
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
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Live Streaming 📹</h3>
            <p className="text-gray-600">Real-time broadcasting with audience interaction</p>
          </div>

          {/* Phone 2: Discovery Feed — UNIDIRECTIONAL smooth scroll with preloading */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[300px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Double-buffered layers (A/B) — always slide UP */}
                    <div className="relative w-full h-full">
                      {/* Layer A */}
                      <div
                        className="absolute inset-0"
                        style={{
                          zIndex: activeA ? 2 : 1,
                          willChange: 'transform, opacity',
                          transform: activeA
                            ? (isTransitioning ? 'translateY(-100%)' : 'translateY(0)')  // A is current: 0→-100%
                            : (isTransitioning ? 'translateY(0)'      : 'translateY(100%)'), // A is next: 100%→0
                          transition: isTransitioning
                            ? 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            : 'none'
                        }}
                      >
                        <video
                          ref={aRef}
                          className="w-full h-full object-cover"
                          style={{ filter: 'saturate(1.1) contrast(1.1) brightness(0.85)' }}
                          muted
                          playsInline
                          preload="auto"
                          // crossOrigin can help caching if server supports CORS
                          // crossOrigin="anonymous"
                          onError={() => console.warn('Layer A video error')}
                        />
                      </div>

                      {/* Layer B */}
                      <div
                        className="absolute inset-0"
                        style={{
                          zIndex: activeA ? 1 : 2,
                          willChange: 'transform, opacity',
                          transform: activeA
                            ? (isTransitioning ? 'translateY(0)'      : 'translateY(100%)') // B is next: 100%→0
                            : (isTransitioning ? 'translateY(-100%)' : 'translateY(0)'),    // B is current: 0→-100%
                          transition: isTransitioning
                            ? 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            : 'none'
                        }}
                      >
                        <video
                          ref={bRef}
                          className="w-full h-full object-cover"
                          style={{ filter: 'saturate(1.1) contrast(1.1) brightness(0.85)' }}
                          muted
                          playsInline
                          preload="auto"
                          // crossOrigin="anonymous"
                          onError={() => console.warn('Layer B video error')}
                        />
                      </div>
                    </div>

                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                    />

                    {/* Bottom Navigation */}
                    <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Home">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Search - Active">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Create">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Reels">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <rect x="3" y="5" width="18" height="14" rx="3" />
                          <path d="M10 9l5 3-5 3z" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Profile">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20a8 8 0 0 1 16 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Discovery Feed 🔍</h3>
            <p className="text-gray-600">Find amazing creators and trending content</p>
          </div>

          {/* Phone 3: Monetization Dashboard (unchanged) */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[300px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col text-white p-4 pt-16">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold mb-2">Earnings 💰</h2>
                        <p className="text-white/70 text-sm">Your creator income</p>
                      </div>

                      {/* Main Earnings Card */}
                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                        <div className="text-green-400 font-bold text-3xl mb-1">$1,247</div>
                        <div className="text-green-300 text-sm">This Month</div>
                        <div className="text-green-200 text-xs mt-1">↗️ +23% from last month</div>
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                          <span className="text-sm">🎁 Gifts</span>
                          <span className="font-semibold">$567</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                          <span className="text-sm">👑 Subscriptions</span>
                          <span className="font-semibold">$480</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                          <span className="text-sm">💸 Donations</span>
                          <span className="font-semibold">$200</span>
                        </div>
                      </div>

                      {/* Withdraw Button */}
                      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-2xl text-sm font-semibold mb-4 shadow-lg">
                        💳 Withdraw Earnings
                      </button>

                      {/* Achievement */}
                      <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl backdrop-blur-sm">
                        <div className="text-yellow-400 text-sm font-medium">
                          🏆 Achievement Unlocked: Rising Star
                        </div>
                      </div>

                      <div className="flex-grow"></div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Home">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Search">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Create">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Reels">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <rect x="3" y="5" width="18" height="14" rx="3" />
                          <path d="M10 9l5 3-5 3z" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Profile - Active">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20a8 8 0 0 1 16 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Earnings Dashboard 💰</h3>
            <p className="text-gray-600">Track your revenue and growth metrics</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => handleDownloadClick(getRecommendedPlatform())}
            className="btn-primary text-lg px-8 py-4 cursor-pointer"
          >
            Download App & Start Earning 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
