import React from 'react';

const MobilePreview: React.FC = () => {
  return (
    <section id="creators" className="pt-16 lg:pt-20 ">
      <div className="container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            See GoLiveGram in Action 📱
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience how creators connect, grow, and earn — all in one platform
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="relative flex items-start">

                {/* iPhone Upper Half Frame */}
                <div className="relative w-[240px] h-[300px] bg-black rounded-t-[40px] rounded-b-[20px] overflow-visible shadow-lg border-l-[2px] border-r-[2px] border-t-[2px] border-black">

                  {/* Side Buttons on Left Edge */}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                    <div className="w-[3px] h-[26px] bg-gray-800 rounded-full" />
                    <div className="w-[3px] h-[26px] bg-gray-800 rounded-full" />
                    <div className="w-[3px] h-[40px] bg-gray-800 rounded-full" />
                  </div>

                  {/* Screen Area - Upper Half Display */}
                  <div className="absolute top-[8px] left-[8px] right-[8px] h-[284px] rounded-t-[30px]  overflow-hidden bg-white">
                    <img
                      src="/mockup_1.jpeg"
                      alt="GoLiveGram preview"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                </div>

              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Home Feed 🏠
            </h3>
            <p className="text-gray-600 text-sm">
              Discover content from creators you follow
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-[240px]">
                <img
                  src="/mockup_2.jpeg"
                  alt="GoLiveGram live preview"
                  className="w-full h-auto rounded-[28px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Story Sharing 📹
            </h3>
            <p className="text-gray-600 text-sm">Share stories with your audience
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-[240px]">
                <img
                  src="/mockup_3.jpeg"
                  alt="GoLiveGram reels preview"
                  className="w-full h-auto rounded-[28px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Instant Messaging 📱
            </h3>
            <p className="text-gray-600 text-sm">
              Communicate with your loved ones in real-time
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
