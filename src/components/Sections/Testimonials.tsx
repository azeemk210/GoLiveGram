import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      handle: "@priya_cooking",
      avatar: "👩‍🍳",
      earnings: "₹12,47,000",
      period: "First Month",
      quote: "I made 12 lakhs in my first month! GoLiveGram's monetization features are incredible.",
      rating: 5,
      verified: true,
      followers: "4.5L",
      category: "Cooking"
    },
    {
      name: "Arjun Patel",
      handle: "@arjun_fitness",
      avatar: "�‍💪",
      earnings: "₹6,80,000",
      period: "Monthly Average",
      quote: "Getting 10x more engagement than other platforms! My community loves the live features.",
      rating: 5,
      verified: true,
      followers: "2.8L",
      category: "Fitness"
    },
    {
      name: "Kavya Reddy",
      handle: "@kavya_art",
      avatar: "👩‍🎨",
      earnings: "₹9,60,000",
      period: "Last Month",
      quote: "The brand partnership opportunities are amazing. Finally earning what I deserve!",
      rating: 5,
      verified: true,
      followers: "3.5L",
      category: "Art & Design"
    },
    {
      name: "Rohit Gupta",
      handle: "@rohit_tech",
      avatar: "👨‍💻",
      earnings: "₹16,00,000",
      period: "Monthly Record",
      quote: "Best creator platform I've ever used. The analytics help me optimize everything perfectly.",
      rating: 5,
      verified: true,
      followers: "5.2L",
      category: "Technology"
    }
  ];

  const brandPartners = [
    "Flipkart", "Zomato", "Paytm", "Myntra", "BigBasket", "Swiggy"
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-yellow-100 rounded-full text-yellow-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
            🌟 Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Real Creators,
            <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Real Success</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of creators who are already building their empire on GoLiveGram 🚀
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm mb-1 truncate">{testimonial.handle}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {testimonial.followers} followers • {testimonial.category}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg sm:text-2xl font-bold text-green-600">{testimonial.earnings}</div>
                  <div className="text-xs text-gray-500">{testimonial.period}</div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Verified Creator ✅
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partners */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">
            Trusted by Top Brands 🏢
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            {brandPartners.map((brand, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20 hidden sm:block">
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white rounded-full -translate-x-10 sm:-translate-x-16 lg:-translate-x-20 -translate-y-10 sm:-translate-y-16 lg:-translate-y-20 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-yellow-300 rounded-full translate-x-8 sm:translate-x-12 lg:translate-x-16 animate-bounce delay-300"></div>
            <div className="absolute bottom-0 left-1/3 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-cyan-300 rounded-full translate-y-6 sm:translate-y-9 lg:translate-y-12 animate-pulse delay-700"></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-300 rounded-full animate-bounce delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">🚀</span>
                <span className="text-xs sm:text-sm font-semibold">JOIN THE REVOLUTION</span>
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent leading-tight">
                Join 25L+ Successful Indian Creators!
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
                Turn your passion into profit with GoLiveGram's creator-first platform 🎉
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-10">
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 text-emerald-200">₹16Cr+</div>
                  <div className="text-white/90 font-semibold text-sm sm:text-base">💰 Paid to Creators</div>
                  <div className="text-xs text-emerald-200 mt-1">+25% this month</div>
                </div>
              </div>
              
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 text-amber-200">4.8⭐</div>
                  <div className="text-white/90 font-semibold text-sm sm:text-base">📱 Play Store Rating</div>
                  <div className="text-xs text-amber-200 mt-1">1.5L+ reviews</div>
                </div>
              </div>
              
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 text-cyan-200">300%</div>
                  <div className="text-white/90 font-semibold text-sm sm:text-base">📈 Monthly Growth</div>
                  <div className="text-xs text-cyan-200 mt-1">Fastest growing</div>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6">
              <button className="group relative bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl">🎬</span>
                  <span>Start Creating Now</span>
                  <span className="text-base sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button className="group relative border-2 sm:border-3 border-white text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl">📚</span>
                  <span>Learn More</span>
                  <span className="text-base sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  <span>Free to Start</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;