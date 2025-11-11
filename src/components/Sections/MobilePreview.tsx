import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const MobilePreview: React.FC = () => {
  /** ---------------------------------------------------------
   * Data that shouldn't recreate on each render
   * --------------------------------------------------------- */
  const liveComments = useMemo(
    () => [
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', handle: '@arjun_travels', message: 'Amazing view! 😍' },
      { avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face', handle: '@priya_vlogs', message: 'Where is this place?' },
      { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', handle: '@rahul_explorer', message: 'Following for more!' },
      { avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', handle: '@kavya_lifestyle', message: 'Love the energy! ✨' },
      { avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face', handle: '@dev_wanderer', message: 'Best stream ever!' },
      { avatar: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face', handle: '@neha_creator', message: 'Can you show more?' },
      { avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face', handle: '@vikram_live', message: 'This is so cool! 🔥' },
      { avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face', handle: '@tanvi_travels', message: 'Incredible shots! 📸' },
      { avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face', handle: '@harsh_fitness', message: 'Keep going! 💪' },
      { avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face', handle: '@isha_foodie', message: 'Making me hungry! 🍕' },
      { avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', handle: '@jay_photographer', message: 'Perfect lighting!' },
      { avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face', handle: '@lata_dancer', message: 'Dance with me! 💃' },
      { avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face', handle: '@om_yoga', message: 'So peaceful 🧘‍♂️' },
      { avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face', handle: '@queen_maya', message: 'Living the dream! ✨' },
      { avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face', handle: '@karan_explorer', message: 'Hidden gem! 💎' },
      { avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', handle: '@riya_wanderlust', message: 'Take me there! ✈️' },
      { avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face', handle: '@zara_creative', message: 'So inspiring! 🎨' },
      { avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face', handle: '@rohan_tech', message: 'Amazing quality! 📱' },
      { avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b194?w=150&h=150&fit=crop&crop=face', handle: '@ananya_chef', message: 'This looks delicious!' },
      { avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=150&h=150&fit=crop&crop=face', handle: '@aditi_lifestyle', message: 'Love this vibe! 💫' },
    ],
    []
  );

  const reelSources = useMemo(
    () => [
      'https://www.pexels.com/download/video/3468587/',
      'https://www.pexels.com/download/video/16070036/',
      'https://www.pexels.com/download/video/8165478/',
      'https://www.pexels.com/download/video/29356214/',
      'https://www.pexels.com/download/video/10805308/',
    ],
    []
  );

  const indianUsernames = useMemo(
    () => [
      { name: 'arjun_sharma', initial: 'A', gradient: 'from-purple-500 to-pink-500' },
      { name: 'priya_patel', initial: 'P', gradient: 'from-blue-500 to-cyan-500' },
      { name: 'mohammad_suhail', initial: 'R', gradient: 'from-green-500 to-emerald-500' },
      { name: 'kavya_reddy', initial: 'K', gradient: 'from-orange-500 to-red-500' },
      { name: 'dev_gupta', initial: 'D', gradient: 'from-indigo-500 to-purple-500' },
    ],
    []
  );

  /** ---------------------------------------------------------
   * Phone 1: Live Streaming state
   * --------------------------------------------------------- */
  const [liveSeconds, setLiveSeconds] = useState(134);
  const [likesCount, setLikesCount] = useState(847);
  const [commentIndex, setCommentIndex] = useState(0);

  /** ---------------------------------------------------------
   * Visibility control (pause timers/videos when off-screen)
   * --------------------------------------------------------- */
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Live timer
  useEffect(() => {
    if (!visible || prefersReducedMotion) return;
    const liveTimer = window.setInterval(() => setLiveSeconds((p) => p + 1), 1000);
    return () => window.clearInterval(liveTimer);
  }, [visible, prefersReducedMotion]);

  // Likes
  useEffect(() => {
    if (!visible || prefersReducedMotion) return;
    const likesTimer = window.setInterval(() => {
      if (Math.random() > 0.7) setLikesCount((p) => p + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => window.clearInterval(likesTimer);
  }, [visible, prefersReducedMotion]);

  // Comments scroll
  useEffect(() => {
    if (!visible || prefersReducedMotion) return;
    const total = Math.max(1, liveComments.length - 2);
    const commentTimer = window.setInterval(
      () => setCommentIndex((p) => (p + 1) % total),
      3000
    );
    return () => window.clearInterval(commentTimer);
  }, [visible, prefersReducedMotion, liveComments.length]);

  const formatLiveTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  /** ---------------------------------------------------------
   * Phone 2: Reels — Smooth scrolling with swipe gestures
   * --------------------------------------------------------- */
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isReelTransitioning, setIsReelTransitioning] = useState(false);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reelIntervalRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ y: number; time: number } | null>(null);
  const isSwipingRef = useRef(false);

  // Initialize video refs array
  const initVideoRefs = useCallback(() => {
    videoRefs.current = new Array(reelSources.length).fill(null);
  }, [reelSources.length]);

  useEffect(() => {
    initVideoRefs();
  }, [initVideoRefs]);

  const safePlay = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {});
    }
  }, []);

  const safePause = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    video.pause();
  }, []);

  const goToNextReel = useCallback(() => {
    if (isReelTransitioning || isSwipingRef.current) return;
    
    setIsReelTransitioning(true);
    const nextIndex = (currentReelIndex + 1) % reelSources.length;
    
    // Pause current video
    safePause(videoRefs.current[currentReelIndex]);
    
    setTimeout(() => {
      setCurrentReelIndex(nextIndex);
      setIsReelTransitioning(false);
      
      // Play next video instantly
      setTimeout(() => {
        safePlay(videoRefs.current[nextIndex]);
      }, 100);
    }, 500); // Smooth 500ms transition matching animation
  }, [currentReelIndex, reelSources.length, isReelTransitioning, safePause, safePlay]);

  // Touch gesture handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isReelTransitioning) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      y: touch.clientY,
      time: Date.now()
    };
    isSwipingRef.current = false;
  }, [isReelTransitioning]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current || isReelTransitioning) return;
    
    const touch = e.touches[0];
    const deltaY = touchStartRef.current.y - touch.clientY;
    const deltaTime = Date.now() - touchStartRef.current.time;
    
    // If swiping up with enough distance and speed
    if (deltaY > 20 && deltaTime < 300) {
      isSwipingRef.current = true;
      e.preventDefault();
    }
  }, [isReelTransitioning]);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || isReelTransitioning) return;
    
    if (isSwipingRef.current) {
      goToNextReel();
    }
    
    touchStartRef.current = null;
    isSwipingRef.current = false;
  }, [isReelTransitioning, goToNextReel]);

  // Auto-advance reels (optional - can be disabled for manual control only)
  useEffect(() => {
    if (prefersReducedMotion || !visible) return;
    
    if (reelIntervalRef.current) window.clearInterval(reelIntervalRef.current);
    reelIntervalRef.current = window.setInterval(() => {
      goToNextReel();
    }, 8000); // 8 seconds per reel
    
    return () => {
      if (reelIntervalRef.current) window.clearInterval(reelIntervalRef.current);
    };
  }, [goToNextReel, prefersReducedMotion, visible]);

  // Play current video when index changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentReelIndex];
    if (currentVideo && !isReelTransitioning) {
      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentReelIndex) {
          safePause(video);
          video.currentTime = 0; // Reset to beginning
        }
      });
      
      // Play current video
      setTimeout(() => {
        safePlay(currentVideo);
      }, 100);
    }
  }, [currentReelIndex, isReelTransitioning, safePlay, safePause]);

  return (
    <section ref={sectionRef} id="creators" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            See GoLiveGram in Action 📱
          </h2>
          <p className="text-xl text-gray-600">
            Experience the power of our platform across all devices
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Phone 0: Home Feed */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[280px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                      aria-hidden="true"
                    />

                    {/* Status Bar Content */}
                    <div className="absolute top-[56px] left-3 right-3 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white font-bold text-lg">GoLiveGram</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Messages">
                          <svg className="w-4 h-4 stroke-white stroke-[2] fill-none" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Notifications">
                          <svg className="w-4 h-4 stroke-white stroke-[2] fill-none" viewBox="0 0 24 24">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Home Feed Content */}
                    <div className="absolute top-[100px] left-0 right-0 bottom-[70px] px-4 overflow-hidden">
                      <div className="space-y-4">
                        {/* Stories Section */}
                        <div className="flex gap-3 justify-between px-1">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="text-center relative">
                              <div className={`w-14 h-14 rounded-full p-0.5 ${i === 2 ? 'bg-gradient-to-br from-red-500 to-pink-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                                <div className="w-full h-full rounded-full overflow-hidden">
                                  <img
                                    src={`https://images.unsplash.com/photo-${
                                      ['1472099645785-5658abf4ff4e', '1507591064344-4c6ce005b128', '1494790108755-2616c6137a1d', '1500648767791-00dcc994a43e', '1438761681033-6461ffad8d80', '1507003211169-0a1dd7228f2d'][i]
                                    }?w=150&h=150&fit=crop&crop=face`}
                                    alt={`Story ${i + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              {i === 2 && (
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 px-1.5 py-0.5 rounded text-white text-[8px] font-bold">
                                  LIVE
                                </div>
                              )}
                              <span className="text-white text-xs mt-1 block truncate w-14">
                                {['Your Story', 'arjun_dev', 'priya_vlogs', 'dev_gupta', 'neha_life', 'raj_music'][i]}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Feed Posts */}
                        <div className="space-y-4">
                          {/* Post 1 */}
                          <div className="bg-gray-800/50 rounded-xl p-3">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">A</span>
                              </div>
                              <div>
                                <p className="text-white font-semibold text-sm">arjun_travels</p>
                                <p className="text-gray-400 text-xs">2 hours ago</p>
                              </div>
                            </div>
                            <div className="relative bg-gray-700 rounded-lg aspect-square mb-2 overflow-hidden">
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                onError={(e) => {
                                  // Hide broken video and show fallback
                                  (e.currentTarget as HTMLVideoElement).style.display = 'none';
                                }}
                              >
                                <source src="https://www.pexels.com/download/video/17169505/" type="video/mp4" />
                              </video>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                              <button className="flex items-center gap-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                                <span className="text-xs">124</span>
                              </button>
                              <button className="flex items-center gap-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-xs">23</span>
                              </button>
                            </div>
                          </div>

                          {/* Post 2 */}
                          <div className="bg-gray-800/50 rounded-xl p-3">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">P</span>
                              </div>
                              <div>
                                <p className="text-white font-semibold text-sm">priya_vlogs</p>
                                <p className="text-gray-400 text-xs">Live • 1.2K watching</p>
                              </div>
                              <div className="ml-auto">
                                <div className="bg-red-500 px-2 py-1 rounded text-white text-xs font-bold">LIVE</div>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg aspect-video mb-2"></div>
                            <p className="text-white text-sm">Join my cooking stream! 🍳</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Home - Active">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Live">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" />
                          <circle cx="11" cy="11" r="3" fill="white" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Search">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Camera - Go Live">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M23 7l-7 5 7 5V7z" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
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
            <h3 className="text-xl font-bold mt-4 mb-2">Home Feed 🏠</h3>
            <p className="text-gray-600">Discover content from creators you follow</p>
          </div>

          {/* Phone 1: Live Streaming */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[280px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Camera Feed */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'saturate(1.05) contrast(1.05) brightness(0.8)', zIndex: 0 }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={(e) => {
                        // Hide broken video
                        (e.currentTarget as HTMLVideoElement).style.display = 'none';
                      }}
                    >
                      <source src="https://www.pexels.com/download/video/30061654/" type="video/mp4" />
                      <source src="https://www.pexels.com/download/video/3468587/" type="video/mp4" />
                    </video>

                    {/* Fallback image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1609466032539-214fbc49d8e8?auto=format&fit=crop&q=80&w=687')",
                        zIndex: -1,
                      }}
                      aria-hidden="true"
                    />

                    {/* Vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(120% 90% at 50% 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
                        zIndex: 2,
                      }}
                    />

                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                      aria-hidden="true"
                    />

                    {/* Top Bar */}
                    <div className="absolute top-[56px] left-3 right-3 flex items-center justify-between gap-1 z-10">
                      <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded-[8px] bg-black/45 backdrop-blur-sm border border-white/8 flex items-center justify-center" aria-label="Back">
                          <svg className="w-4 h-4 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/55 backdrop-blur-sm font-semibold text-[10px] text-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_0_2px_rgba(255,51,85,0.18)]" />
                          LIVE
                          <span className="text-white/70">• {formatLiveTime(liveSeconds)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="bg-black/45 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-white border border-white/8 flex items-center gap-1" aria-label="Viewers">
                          <svg className="w-3 h-3 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          1.2K
                        </div>
                        <div className="bg-black/45 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-white border border-white/8 flex items-center gap-1" aria-label="Likes">
                          <svg className="w-3 h-3 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          {likesCount}
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="absolute left-[10px] right-[10px] bottom-[70px] z-10 h-[120px] overflow-hidden" aria-live="polite">
                      <div
                        className="flex flex-col gap-[3px] transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateY(-${commentIndex * 33}px)` }}
                      >
                        {liveComments.map((comment, i) => (
                          <div key={i} className="flex items-center gap-2 px-2 py-[6px] text-xs leading-tight min-h-[30px]">
                            <img
                              src={comment.avatar}
                              alt={`${comment.handle} avatar`}
                              className="w-6 h-6 rounded-full object-cover shadow-[0_1px_3px_rgba(0,0,0,0.3)] border border-white/20 flex-shrink-0"
                              loading="lazy"
                              width={24}
                              height={24}
                            />
                            <div className="bg-transparent text-white flex-1 min-w-0 flex items-center gap-1">
                              <span className="font-semibold text-[10px] text-white/90 flex-shrink-0">{comment.handle}</span>
                              <span className="text-white text-[11px] leading-tight truncate">{comment.message}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute left-0 right-0 bottom-0 h-14 px-[8px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-[10px] border-t border-white/10 z-10" aria-label="Live streaming controls">
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/10 backdrop-blur-sm" aria-label="Microphone">
                        <svg className="w-4 h-4 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="23" />
                          <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/10 backdrop-blur-sm" aria-label="Camera">
                        <svg className="w-4 h-4 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M23 7l-7 5 7 5V7z" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/10 backdrop-blur-sm" aria-label="Flip Camera">
                        <svg className="w-4 h-4 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <polyline points="1 4 1 10 7 10" />
                          <polyline points="23 20 23 14 17 14" />
                          <path d="m20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/10 backdrop-blur-sm" aria-label="Messages">
                        <svg className="w-4 h-4 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-red-500/50 bg-red-500/20 backdrop-blur-sm" aria-label="End Live Stream">
                        <svg className="w-5 h-5 fill-red-400" viewBox="0 0 24 24">
                          <rect x="6" y="6" width="12" height="12" rx="2" ry="2" />
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

          {/* Phone 2: Reels with Swipe Gestures */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[280px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div 
                    className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {/* Reels container with smooth scrolling */}
                    <div className="relative w-full h-full">
                      {reelSources.map((videoSrc, index) => {
                        const isCurrentReel = index === currentReelIndex;
                        const isPreviousReel = index === currentReelIndex - 1 || (currentReelIndex === 0 && index === reelSources.length - 1);
                        const isNextReel = index === currentReelIndex + 1 || (currentReelIndex === reelSources.length - 1 && index === 0);
                        
                        let translateY = 0;
                        let zIndex = 1;
                        
                        if (isCurrentReel) {
                          translateY = 0;
                          zIndex = 3;
                        } else if (isPreviousReel) {
                          translateY = -100;
                          zIndex = 2;
                        } else if (isNextReel) {
                          translateY = 100;
                          zIndex = 2;
                        } else if (index < currentReelIndex) {
                          translateY = -100;
                          zIndex = 1;
                        } else {
                          translateY = 100;
                          zIndex = 1;
                        }

                        return (
                          <div
                            key={index}
                            className="absolute inset-0 w-full h-full"
                            style={{
                              transform: `translateY(${translateY}%)`,
                              transition: isReelTransitioning 
                                ? 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                                : 'none',
                              zIndex: zIndex,
                            }}
                          >
                            <video
                              ref={(el) => {
                                if (videoRefs.current) {
                                  videoRefs.current[index] = el;
                                }
                              }}
                              className="w-full h-full object-cover"
                              style={{ filter: 'saturate(1.1) contrast(1.1) brightness(0.85)' }}
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              src={videoSrc}
                              onError={() => console.warn(`Reel ${index} video error`)}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                      aria-hidden="true"
                    />

                    {/* Top Bar */}
                    <div className="absolute top-[56px] left-3 right-3 flex items-center justify-between z-10">
                      <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Back">
                        <svg className="w-4 h-4 stroke-white stroke-[2] fill-none" viewBox="0 0 24 24">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-red-500 text-white text-[10px] font-bold">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        LIVE
                      </div>
                    </div>

                    {/* Swipe Up Indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <div className="animate-pulse">
                        <div className="flex flex-col items-center text-white bg-black/40 backdrop-blur-sm rounded-full px-4 py-3">
                          <svg className="w-6 h-6 mb-1 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5 5 5M7 19l5-5 5 5" />
                          </svg>
                          <span className="text-xs font-bold text-white">Swipe up</span>
                        </div>
                      </div>
                    </div>

                    {/* Username */}
                    <div className="absolute bottom-[80px] left-4 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                            indianUsernames[currentReelIndex % indianUsernames.length].gradient
                          } flex items-center justify-center text-white font-bold text-xs`}
                        >
                          {indianUsernames[currentReelIndex % indianUsernames.length].initial}
                        </div>
                        <span className="text-white font-bold text-sm">
                          @{indianUsernames[currentReelIndex % indianUsernames.length].name}
                        </span>
                      </div>
                    </div>

                    {/* Right Controls */}
                    <div className="absolute bottom-[80px] right-4 z-10 flex flex-col items-center gap-4">
                      <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Like">
                        <svg className="w-5 h-5 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                      
                      <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Comment">
                        <svg className="w-5 h-5 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                      
                      <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="Share">
                        <svg className="w-5 h-5 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
                        </svg>
                      </button>
                      
                      <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center" aria-label="More options">
                        <svg className="w-5 h-5 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute left-0 right-0 bottom-0 h-14 px-[14px] py-[6px] flex items-center justify-between bg-gradient-to-t from-black/70 to-black/25 backdrop-blur-[10px] border-t border-white/8 z-10" aria-label="Bottom navigation">
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Home">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border bg-white/8 border-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" aria-label="Live - Active">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" />
                          <circle cx="11" cy="11" r="3" fill="white" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Search">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      </button>
                      <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/6 bg-black/25" aria-label="Camera - Go Live">
                        <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                          <path d="M23 7l-7 5 7 5V7z" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
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
            <h3 className="text-xl font-bold mt-4 mb-2">Reels Discovery 📱</h3>
            <p className="text-gray-600">Swipe up for smooth reel transitions</p>
          </div>

          {/* Phone 3: Monetization Dashboard */}
          <div className="text-center">
            <div className="relative z-10">
              <div className="w-[280px] mx-auto" style={{ aspectRatio: '9 / 19.5' }}>
                <div
                  className="relative w-full h-full bg-black rounded-[44px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_2px_0_rgba(255,255,255,0.04)_inset,0_-2px_0_rgba(255,255,255,0.02)_inset]"
                  style={{ isolation: 'isolate' }}
                >
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-900">
                    {/* Dynamic Island */}
                    <div
                      className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[38px] bg-black rounded-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      style={{ zIndex: 5 }}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col text-white p-4 pt-16">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold mb-2">Earnings 💰</h2>
                        <p className="text-white/70 text-sm">Your creator income</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                        <div className="text-green-400 font-bold text-3xl mb-1">$1,247</div>
                        <div className="text-green-300 text-sm">This Month</div>
                        <div className="text-green-200 text-xs mt-1">↗️ +23% from last month</div>
                      </div>

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

                      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-2xl text-sm font-semibold mb-4 shadow-lg">
                        💳 Withdraw Earnings
                      </button>

                      <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl backdrop-blur-sm">
                        <div className="text-yellow-400 text-sm font-medium">🏆 Achievement Unlocked: Rising Star</div>
                      </div>

                      <div className="flex-grow" />
                    </div>

                    {/* Bottom Nav */}
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
