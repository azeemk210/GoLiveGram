import React from 'react';
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const MobilePreview: React.FC = () => {
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
          {/* Phone 1: Live Streaming */}
          <div className="text-center">
            <div className="bg-black rounded-[2rem] p-4 inline-block shadow-2xl">
              <div className="bg-gray-900 rounded-[1.5rem] p-4 w-64 h-96 relative overflow-hidden">
                <div className="text-white space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  <div className="bg-red-500 text-center py-2 rounded-lg">
                    <div className="text-sm font-bold">🔴 LIVE</div>
                    <div className="text-xs">1.2K watching 👥</div>
                  </div>
                  <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎬</div>
                      <div className="text-xs">Live Stream</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>💬 Amazing stream!</div>
                    <div>🔥 Love your content</div>
                    <div className="bg-yellow-500/30 p-2 rounded">
                      🎁 Gift received: $47
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Live Streaming 📹</h3>
            <p className="text-gray-600">Real-time broadcasting with audience interaction</p>
          </div>

          {/* Phone 2: Discovery Feed */}
          <div className="text-center">
            <div className="bg-black rounded-[2rem] p-4 inline-block shadow-2xl">
              <div className="bg-gray-900 rounded-[1.5rem] p-4 w-64 h-96 relative overflow-hidden">
                <div className="text-white space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  <div className="text-center font-bold">Discover 🔍</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-700 h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg">👩‍🍳</div>
                        <div className="text-xs">❤️ 15.2K</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg">🏋️‍♂️</div>
                        <div className="text-xs">🔥 8.7K</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg">🎵</div>
                        <div className="text-xs">💜 22.1K</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg">🎨</div>
                        <div className="text-xs">✨ 12.5K</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-400">
                    #LiveStream #GoViral #Trending
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">Discovery Feed 🔍</h3>
            <p className="text-gray-600">Find amazing creators and trending content</p>
          </div>

          {/* Phone 3: Monetization Dashboard */}
          <div className="text-center">
            <div className="bg-black rounded-[2rem] p-4 inline-block shadow-2xl">
              <div className="bg-gray-900 rounded-[1.5rem] p-4 w-64 h-96 relative overflow-hidden">
                <div className="text-white space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  <div className="text-center font-bold">Earnings 💰</div>
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">$1,247</div>
                    <div className="text-green-300 text-xs">This Month</div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>🎁 Gifts</span>
                      <span>$567</span>
                    </div>
                    <div className="flex justify-between">
                      <span>👑 Subscriptions</span>
                      <span>$480</span>
                    </div>
                    <div className="flex justify-between">
                      <span>💸 Donations</span>
                      <span>$200</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 py-2 rounded-lg text-sm font-medium">
                    💳 Withdraw Earnings
                  </button>
                  <div className="text-center text-xs text-gray-400">
                    🏆 Achievement Unlocked: Rising Star
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