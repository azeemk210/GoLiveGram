import React, { useState, useEffect } from 'react';
import { Users, Eye, Clock } from 'lucide-react';

const Statistics: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [liveStreams, setLiveStreams] = useState(0);
  const [paidToCreators, setPaidToCreators] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveUsers(2500000);
      setLiveStreams(50000);
      setPaidToCreators(2000000);
      setUptime(99.9);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Platform Statistics 📊
          </h2>
          <p className="text-xl text-white/90">
            Join millions of creators and viewers in the GoLiveGram community
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Users className="w-16 h-16 mx-auto mb-4 text-white" />
            <div className="text-4xl font-bold mb-2">{formatNumber(activeUsers)}+</div>
            <div className="text-white/80">Active Users 👥</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Eye className="w-16 h-16 mx-auto mb-4 text-white" />
            <div className="text-4xl font-bold mb-2">{formatNumber(liveStreams)}+</div>
            <div className="text-white/80">Live Streams 📺</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-4xl font-bold mb-2">${formatNumber(paidToCreators)}+</div>
            <div className="text-white/80">Paid to Creators</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Clock className="w-16 h-16 mx-auto mb-4 text-white" />
            <div className="text-4xl font-bold mb-2">{uptime}%</div>
            <div className="text-white/80">Uptime ⚡</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;