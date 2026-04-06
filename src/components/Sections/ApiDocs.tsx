import React from 'react';
import { Code } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const ApiDocs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-0">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-red-50">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <Code className="w-16 h-16 mb-4 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">API Documentation</h1>
              <p className="text-lg text-gray-700 mb-8">
                Build on top of GoLiveGram with our powerful API
              </p>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-red-100">
                  <h2 className="text-2xl font-bold text-black mb-4">Getting Started</h2>
                  <p className="text-gray-700 mb-4">
                    To use the GoLiveGram API, you'll need to obtain an API key. Visit your developer dashboard to create applications and manage your API keys.
                  </p>
                  <code className="block bg-gray-100 p-4 rounded text-sm mb-4">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.golivegram.com/v1/</code>
                </div>

                <div className="bg-white p-8 rounded-lg border border-red-100">
                  <h2 className="text-2xl font-bold text-black mb-4">Endpoints</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">GET /api/v1/creators/{'{id}'}</h3>
                      <p className="text-gray-700">Retrieve creator information</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">GET /api/v1/streams</h3>
                      <p className="text-gray-700">Get active streams</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">POST /api/v1/streams</h3>
                      <p className="text-gray-700">Create a new stream</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-red-100">
                  <h2 className="text-2xl font-bold text-black mb-4">Rate Limits</h2>
                  <p className="text-gray-700">
                    API requests are rate-limited to 1000 requests per hour for standard accounts. Contact support for higher limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApiDocs;
