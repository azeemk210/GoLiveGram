import React from 'react';
import { Mail, MessageCircle, Send, Youtube, Twitter, Globe, ExternalLink, User } from 'lucide-react';

const ConnectWithUs: React.FC = () => {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 bg-white">
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Connect with Us</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Follow and subscribe to stay updated with the latest information, opportunities, and support.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a
              href="https://whatsapp.com/channel/0029Vb7NzeS6xCSMD5qgro3N"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500">
                <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-sm text-gray-600">Join our channel</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-green-500" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/thegolivegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-500">
                <Send className="w-6 h-6 text-pink-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Instagram</h3>
                <p className="text-sm text-gray-600">@thegolivegram</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-pink-500" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/golivegramapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500">
                <Send className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telegram</h3>
                <p className="text-sm text-gray-600">Follow updates</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-500" />
            </a>

            {/* Telegram Support */}
            <a
              href="https://t.me/+_20KK9i-6KpmOWI1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-500">
                <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Support & Help</h3>
                <p className="text-sm text-gray-600">Telegram Support</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-cyan-500" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@golivegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-500">
                <Youtube className="w-6 h-6 text-red-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">YouTube</h3>
                <p className="text-sm text-gray-600">@golivegram</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-red-500" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/golivegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900">
                <Twitter className="w-6 h-6 text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">X (Twitter)</h3>
                <p className="text-sm text-gray-600">@golivegram</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gray-900" />
            </a>

            {/* GoLiveGram Official Profile */}
            <a
              href="https://share.golivegram.com/profile/golivegram_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-red-600 hover:bg-red-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600">
                <User className="w-6 h-6 text-red-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Official Profile</h3>
                <p className="text-sm text-gray-600">GoLiveGram Official</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-red-600" />
            </a>

            {/* Official Website */}
            <a
              href="https://www.golivegram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600">
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Official Website</h3>
                <p className="text-sm text-gray-600">www.golivegram.com</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
