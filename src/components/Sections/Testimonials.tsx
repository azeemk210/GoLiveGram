import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      handle: "@sarahcooks",
      avatar: "👩‍🍳",
      earnings: "$15,247",
      period: "First Month",
      quote: "I made $15K in my first month! The monetization features are incredible.",
      rating: 5,
      verified: true,
      followers: "450K",
      category: "Cooking"
    },
    {
      name: "Mike T.",
      handle: "@mikefitness",
      avatar: "💪",
      earnings: "$8,500",
      period: "Monthly Average",
      quote: "10x more engagement than other platforms! My community loves the live features.",
      rating: 5,
      verified: true,
      followers: "280K",
      category: "Fitness"
    },
    {
      name: "Emma L.",
      handle: "@emmacreates",
      avatar: "🎨",
      earnings: "$12,000",
      period: "Last Month",
      quote: "The brand partnership opportunities are amazing. Finally earning what I deserve!",
      rating: 5,
      verified: true,
      followers: "350K",
      category: "Art"
    },
    {
      name: "Alex R.",
      handle: "@alextech",
      avatar: "💻",
      earnings: "$20,000",
      period: "Monthly Record",
      quote: "Best creator platform I've ever used. The analytics help me optimize everything.",
      rating: 5,
      verified: true,
      followers: "520K",
      category: "Technology"
    }
  ];

  const brandPartners = [
    "Nike", "Coca-Cola", "Samsung", "Netflix", "McDonald's", "Spotify"
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-600 font-medium mb-4">
            🌟 Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Real Creators,
            <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Real Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of creators who are already building their empire on GoLiveGram 🚀
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">{testimonial.handle}</div>
                  <div className="text-xs text-gray-500">
                    {testimonial.followers} followers • {testimonial.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{testimonial.earnings}</div>
                  <div className="text-xs text-gray-500">{testimonial.period}</div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic mb-4 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Verified Creator ✅
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partners */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Top Brands 🏢
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brandPartners.map((brand, index) => (
              <div key={index} className="bg-gray-100 px-6 py-3 rounded-full">
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Join 50,000+ Successful Creators Today! 🎉
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold">$2M+</div>
                <div className="text-white/80">Paid to Creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8⭐</div>
                <div className="text-white/80">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">300%</div>
                <div className="text-white/80">Monthly Growth</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-200">
                🎬 Become a Creator
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                📚 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;