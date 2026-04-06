import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail
} from 'lucide-react';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Features", href: "/" },
      { name: "Support", href: "/support" },
      { name: "Blog", href: "/blog" }
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Creator Program", href: "/creator-program" },
      { name: "Business", href: "/business" },
      { name: "Careers", href: "/careers" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR", href: "/gdpr" }
    ],
    resources: [
      { name: "Creator Guide", href: "/creator-guide" },
      { name: "API Documentation", href: "/api-docs" },
      { name: "Community Forum", href: "/community" },
      { name: "Press Kit", href: "/press" }
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
    <footer className="bg-black text-white mt-0 pb-6">
      {/* Main Footer */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 pb-[10.4rem] md:pb-[11.2rem] lg:pb-[14rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 pt-[11.2rem] pb-16 md:pt-[16.8rem] lg:pt-[4rem]">
          {/* Brand Column */}
          <div className="lg:col-span-2 max-w-sm pt-6">
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Stream. Connect. Earn.
              <br />
              The world's leading platform for creators to monetize their passion 
              and build sustainable income streams.
            </p>
            


            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>creators@golivegram.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-6">
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
          <div className="pt-6">
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
          <div className="pt-6">
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
      <div className="border-t border-white/0">
        <div className="container mx-auto px-6 pt-16 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Futurelink Technologies
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
                  className="w-10 h-10 md:w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
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