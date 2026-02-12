import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail, 
  Phone,
  MapPin
} from 'lucide-react';
import { handleDownloadClick } from '../../utils/downloads';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#monetization" },
      { name: "Support", href: "#support" },
      { name: "Blog", href: "#blog" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Creator Program", href: "#creators" },
      { name: "Business", href: "#business" },
      { name: "Careers", href: "/careers" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ],
    resources: [
      { name: "Creator Guide", href: "#guide" },
      { name: "API Documentation", href: "#api" },
      { name: "Community Forum", href: "#forum" },
      { name: "Press Kit", href: "#press" }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/golivegram", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/thegolivegram/", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/golivegram", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@golivegram", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/golivegram", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center mb-6 cursor-pointer"
              aria-label="Go to top of page"
            >
              <img 
                src="/Go.svg" 
                alt="GoLiveGram - Stream, Connect & Monetize Your Passion" 
                width="160"
                height="40"
                className="h-10 w-auto hover:scale-105 transition-transform duration-200"
                style={{ maxWidth: '160px', filter: 'brightness(0) invert(1)' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/Go.png';
                  target.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </button>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Stream. Connect. Earn.
              <br />
              The world's leading platform for creators to monetize their passion 
              and build sustainable income streams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button 
                onClick={() => handleDownloadClick('ios')}
                aria-label="Download GoLiveGram on the App Store"
                className="bg-white text-black border border-gray-300 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] font-medium">Download on the</div>
                  <div className="text-sm font-bold -mt-0.5">App Store</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleDownloadClick('android')}
                aria-label="Download GoLiveGram on Google Play"
                className="bg-white text-black border border-gray-300 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <img 
                  src="/google-play-store-icon.webp" 
                  alt="Google Play" 
                  width="24"
                  height="24"
                  loading="lazy"
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-left">
                  <div className="text-[9px] font-medium">GET IT ON</div>
                  <div className="text-sm font-bold -mt-0.5">Google Play</div>
                </div>
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
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GoLiveGram Inc. Stream. Connect. Create.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  aria-label={`Follow us on ${social.label}`}
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