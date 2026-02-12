import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header with Logo Only */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link 
            to="/" 
            className="inline-flex items-center hover:scale-105 transition-transform duration-200"
            aria-label="Go back to GoLiveGram homepage"
          >
            <img 
              src="/Go.svg" 
              alt="GoLiveGram - Stream, Connect & Monetize Your Passion" 
              className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              style={{ maxWidth: '160px' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/Go.png';
              }}
            />
          </Link>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="py-4 sm:py-8 md:py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Terms of Service</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
              <div className="prose prose-sm md:prose-lg max-w-none">
                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">1. Acceptance of Terms</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    By accessing and using GoLiveGram ("the Platform"), you accept and agree to be bound by these Terms of Service 
                    ("Terms"). If you do not agree to these Terms, please do not use our Platform. These Terms apply to all users, 
                    including viewers, streamers, and content creators.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">2. User Accounts</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">2.1 Account Creation</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    You must be at least 13 years old to use GoLiveGram. To access certain features, especially monetization 
                    features, you must be at least 18 years old. You are responsible for maintaining the confidentiality of 
                    your account credentials and for all activities that occur under your account.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">2.2 Account Security</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    You agree to immediately notify us of any unauthorized access or use of your account. We reserve the right 
                    to terminate accounts that violate these Terms or engage in suspicious activity.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">3. Content Guidelines</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">3.1 User-Generated Content</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    You retain ownership of all content you create and stream on GoLiveGram. However, by uploading or streaming 
                    content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and 
                    display your content solely for the purpose of operating and promoting the Platform.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">3.2 Prohibited Content</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-2">You may not post, stream, or share content that:</p>
                  <ul className="list-disc pl-5 mb-3 md:mb-4 space-y-1 text-sm md:text-base text-gray-700">
                    <li>Violates any laws or regulations</li>
                    <li>Infringes on intellectual property rights of others</li>
                    <li>Contains hate speech, harassment, or threats</li>
                    <li>Includes sexually explicit material or nudity (except in educational or artistic contexts)</li>
                    <li>Promotes violence or dangerous activities</li>
                    <li>Contains spam, malware, or phishing attempts</li>
                    <li>Impersonates others or misrepresents your identity</li>
                  </ul>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">4. Monetization and Payments</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">4.1 Creator Program</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    Eligible creators can monetize their content through various features including subscriptions, virtual gifts, 
                    donations, and advertisements. To participate in monetization, you must meet our Creator Program requirements 
                    and comply with all applicable tax regulations.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">4.2 Revenue Share</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    GoLiveGram takes a percentage of earnings from monetization features to cover platform costs and payment 
                    processing fees. The exact revenue split is detailed in your Creator Dashboard and may vary by region and 
                    payment method. We reserve the right to adjust our revenue share model with 30 days' notice.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">4.3 Payouts</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    Payments are processed monthly for accounts meeting the minimum payout threshold. You are responsible for 
                    providing accurate payment information and complying with tax requirements in your jurisdiction.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">5. Intellectual Property</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    The Platform, including its design, features, and branding, is owned by GoLiveGram and protected by copyright, 
                    trademark, and other intellectual property laws. You may not copy, modify, distribute, or reverse engineer 
                    any part of our Platform without written permission.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">6. Live Streaming Guidelines</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">6.1 Quality Standards</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    We encourage high-quality streams with good audio and video. While we don't enforce technical requirements, 
                    better quality content tends to attract more viewers and engagement.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">6.2 Music and Copyright</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    You are responsible for ensuring you have the rights to use any music, images, or other copyrighted material 
                    in your streams. Unauthorized use of copyrighted content may result in content takedowns or account suspension.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">7. Community Interaction</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    GoLiveGram is a community platform. We expect all users to treat each other with respect. Harassment, 
                    bullying, hate speech, or toxic behavior will not be tolerated. We have community moderators and automated 
                    systems to enforce these guidelines.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">8. Privacy and Data Protection</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    Your privacy is important to us. Please review our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> to 
                    understand how we collect, use, and protect your personal information. By using the Platform, you agree to 
                    our data practices as described in the Privacy Policy.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">9. Termination</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">9.1 By You</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    You may terminate your account at any time through your account settings. Upon termination, you will lose 
                    access to all features and any unpaid earnings below the minimum payout threshold.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">9.2 By Us</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    We reserve the right to suspend or terminate your account if you violate these Terms, engage in illegal 
                    activities, or pose a risk to other users or the Platform. We will provide notice when possible, but reserve 
                    the right to immediately terminate accounts in severe cases.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">10. Disclaimers and Limitations</h2>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">10.1 Service Availability</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    We strive to provide reliable service but cannot guarantee uninterrupted access. The Platform is provided 
                    "as is" without warranties of any kind. We are not liable for any loss of data, earnings, or other damages 
                    resulting from service interruptions.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">10.2 Limitation of Liability</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    To the maximum extent permitted by law, GoLiveGram shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages, including lost profits, lost revenue, or lost data arising from your use 
                    of the Platform.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">11. Dispute Resolution</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    Any disputes arising from these Terms or your use of the Platform will be resolved through binding arbitration 
                    rather than in court, except where prohibited by law. The arbitration will be conducted in accordance with the 
                    rules of the American Arbitration Association.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">12. Changes to Terms</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    We may update these Terms from time to time. We will notify you of significant changes via email or through 
                    the Platform. Your continued use of GoLiveGram after changes are posted constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">13. Contact Information</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-2">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <ul className="list-none space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>Email:</strong> legal@golivegram.com</li>
                    <li><strong>Address:</strong> GoLiveGram Inc., 123 Creator Street, San Francisco, CA 94102</li>
                    <li><strong>Support:</strong> hello@golivegram.com</li>
                  </ul>
                </section>

                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">14. Governing Law</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                    United States, without regard to its conflict of law provisions.
                  </p>
                </section>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    By using GoLiveGram, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-8 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GoLiveGram. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
