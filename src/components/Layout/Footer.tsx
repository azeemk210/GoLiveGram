import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone,
  MapPin,
  Smartphone
} from 'lucide-react';
import { handleDownloadClick, getRecommendedPlatform } from '../../utils/downloads';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Features 🌟", href: "#features" },
      { name: "Pricing 💰", href: "#monetization" },
      { name: "Support 🛡️", href: "#support" },
      { name: "Blog 📝", href: "#blog" }
    ],
    company: [
      { name: "About Us 👥", href: "#about" },
      { name: "Creator Program 🎬", href: "#creators" },
      { name: "Business 🏢", href: "#business" },
      { name: "Careers 🚀", href: "#careers" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ],
    resources: [
      { name: "Creator Guide 📚", href: "#guide" },
      { name: "API Documentation", href: "#api" },
      { name: "Community Forum", href: "#forum" },
      { name: "Press Kit", href: "#press" }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter 🐦" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram 📸" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook 👍" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube 📺" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/Go.svg" 
                alt="GoLiveGram - Stream, Connect & Monetize Your Passion" 
                className="h-10 w-auto"
                style={{ maxWidth: '160px', filter: 'brightness(0) invert(1)' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/Go.png';
                  target.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Stream. Connect. Earn. 💰⚡📺
              <br />
              The world's leading platform for creators to monetize their passion 
              and build sustainable income streams.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <button 
                onClick={() => handleDownloadClick(getRecommendedPlatform())}
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download App 📱</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@golivegram.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Creator Tips 💡
            </h3>
            <p className="text-gray-300 mb-6">
              Get weekly insights, monetization strategies, and platform updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email 📧"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                Subscribe 🚀
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GoLiveGram Inc. Stream. Connect. Earn. 💰⚡📺
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;