import React from 'react';

const Monetization: React.FC = () => {

  const creatorTiers = [
    {
      name: 'Emerging Creators',
      followers: '0 – 5,000',
      icon: '🌱',
      objective: 'Creator onboarding and early-stage growth',
      criteria: ['Minimum 10 original posts', 'Active within the last 7 days', 'No copyright violations'],
      monetization: ['₹5 – ₹20 per 1,000 views', 'Daily engagement incentives'],
      benefits: ['Basic analytics', 'Limited boost']
    },
    {
      name: 'Growth Creators',
      followers: '5,000 – 50,000',
      icon: '📈',
      objective: 'Consistency and audience building',
      criteria: ['Minimum 25 posts', 'Engagement ≥ 3%'],
      monetization: ['₹50 – ₹200 per 10K views', 'Weekly bonuses'],
      benefits: ['Explore placement', 'Brand access']
    },
    {
      name: 'Verified Creators',
      followers: '50,000 – 200,000',
      icon: '✓',
      objective: 'Influence & brand readiness',
      criteria: ['Verified identity', 'High content quality'],
      monetization: ['₹200 – ₹500 per 100K views', 'Affiliate + brand deals'],
      benefits: ['Verified badge', 'Advanced analytics']
    },
    {
      name: 'Premium Creators',
      followers: '200,000+',
      icon: '👑',
      objective: 'Scale revenue & leadership',
      criteria: ['High watch time', 'Consistent quality'],
      monetization: ['₹500 – ₹1500 per 100K views', 'Subscriptions'],
      benefits: ['Account manager', 'Featured placement']
    }
  ];

  const programs = [
    {
      name: 'Live Streaming Creators',
      icon: '🔴',
      monetization: ['Virtual gifting', '30% – 70% revenue share', 'Leaderboard rewards']
    },
    {
      name: 'Reels & Stories Earnings',
      icon: '🎬',
      monetization: [
        'Earn per 10K / 100K reel views',
        'Story engagement bonuses',
        'Swipe-up affiliate earnings',
        'Viral reel bonus rewards'
      ]
    },
    {
      name: 'Education Creators',
      icon: '📚',
      monetization: ['Paid courses', 'Subscriptions', 'Workshops']
    },
    {
      name: 'Campaign Creators',
      icon: '🏆',
      monetization: ['Hashtag rewards', 'Viral bonuses', 'Contests']
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            📊 Monetization Framework
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Earn from day one and scale your income as you grow
          </p>
        </div>

        {/* CREATOR TIERS */}
        <h3 className="text-2xl font-bold text-black mb-8 text-center">
          Creator Tiers
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {creatorTiers.map((tier, i) => (
            <div key={i} className="border-2 border-gray-300 rounded-xl p-6 bg-white hover:shadow-lg transition">
              <div className="text-3xl mb-3">{tier.icon}</div>
              <h4 className="font-bold text-black mb-2">{tier.name}</h4>
              <p className="text-sm text-gray-700 mb-3">{tier.followers}</p>

              <p className="text-xs italic mb-4 text-gray-600">{tier.objective}</p>

              <div className="mb-3">
                <p className="font-semibold text-xs text-black mb-1">Eligibility</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {tier.criteria.map((c, idx) => <li key={idx}>• {c}</li>)}
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-semibold text-xs text-black mb-1">Earnings</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {tier.monetization.map((m, idx) => <li key={idx}>• {m}</li>)}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-xs text-black mb-1">Benefits</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {tier.benefits.map((b, idx) => <li key={idx}>• {b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* PROGRAMS */}
        <h3 className="text-2xl font-bold text-black mb-8 text-center">
          Monetization Programs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((p, i) => (
            <div key={i} className="border-2 border-gray-300 rounded-xl p-6 bg-white">
              <h4 className="text-lg font-bold mb-3">{p.icon} {p.name}</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                {p.monetization.map((m, idx) => <li key={idx}>• {m}</li>)}
              </ul>
            </div>
          ))}
        </div>

       

        {/* PERFORMANCE MODEL */}
        <h3 className="text-2xl font-bold text-black mb-2 text-center">
          📊 Performance Model
        </h3>
        <p className="text-center text-gray-600 mb-10">Earnings based on key performance metrics:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Views', value: '40%', icon: '👁️', desc: 'Total video views' },
            { label: 'Engagement', value: '30%', icon: '💬', desc: 'Likes, comments, shares' },
            { label: 'Watch Time', value: '20%', icon: '⏱️', desc: 'Average view duration' },
            { label: 'Quality', value: '10%', icon: '⭐', desc: 'Content & community score' }
          ].map((item, i) => (
            <div key={i} className="border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-3xl font-bold text-red-600 mb-2">{item.value}</p>
              <p className="text-sm font-semibold text-black mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LEVEL SYSTEM */}
<h3 className="text-2xl font-bold text-black mb-10 text-center">
  🎖️ Creator Levels
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      name: 'Bronze',
      icon: '🥉',
      gradient: 'from-[#cd7f32] to-[#a97142]',
      shadow: 'shadow-[0_15px_40px_rgba(205,127,50,0.4)]',
      content: [
        'Start earning from day 1',
        'Basic reel & post monetization',
        'Limited reach boost',
        'Access to analytics dashboard'
      ]
    },
    {
      name: 'Silver',
      icon: '🥈',
      gradient: 'from-[#c0c0c0] to-[#8e8e8e]',
      shadow: 'shadow-[0_15px_40px_rgba(192,192,192,0.5)]',
      content: [
        'Higher payout per 100K views',
        'Reels + Stories bonuses',
        'Explore & trending access',
        'Early brand campaign access'
      ]
    },
    {
      name: 'Gold',
      icon: '🥇',
      gradient: 'from-[#FFD700] to-[#d4af37]',
      shadow: 'shadow-[0_15px_40px_rgba(255,215,0,0.5)]',
      content: [
        'Brand collaborations enabled',
        'Affiliate & link monetization',
        'Priority content distribution',
        'Advanced analytics + insights'
      ]
    },
    {
      name: 'Platinum',
      icon: '💎',
      gradient: 'from-[#e5e4e2] to-[#9acbd0]',
      shadow: 'shadow-[0_15px_40px_rgba(154,203,208,0.5)]',
      content: [
        'Maximum payout rates',
        'Direct brand deals (managed)',
        'Subscription-based earnings',
        'Dedicated account manager'
      ]
    }
  ].map((level, i) => (
    <div
      key={i}
      className={`relative rounded-2xl p-[2px] bg-gradient-to-br ${level.gradient} transform transition-all duration-300 hover:-translate-y-2`}
    >
      {/* Inner Card */}
      <div className={`bg-white rounded-2xl p-6 text-center ${level.shadow}`}>
        
        {/* Badge */}
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${level.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
          {level.icon}
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-black mb-4">
          {level.name}
        </h4>

        {/* Content */}
        <div className="text-sm text-gray-700 space-y-2">
          {level.content.map((item, idx) => (
            <div key={idx}>• {item}</div>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Monetization;