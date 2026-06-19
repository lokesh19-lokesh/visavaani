import React from 'react';
import { Shield, Lock, Eye, Server, UserCheck, Cookie, Megaphone } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="Privacy Policy"
        description="Read VisaVaani's privacy policy to understand how we collect, use, and protect your data."
        url="/privacy"
      />
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we protect your personal and immigration data.
            </p>
         </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12 p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              
              <div className="flex items-start mb-8">
                <Eye className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">1. Information We Collect</h2>
                  <p className="leading-relaxed">
                    We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, nationality, and immigration history (if voluntarily provided to our AI or Experts).
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Lock className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">2. How We Protect Your Data</h2>
                  <p className="leading-relaxed">
                    We use industry-standard encryption protocols (SSL/TLS) to secure your data during transmission. All sensitive immigration documents and personal details shared with our Expert portal are stored in highly secure, encrypted servers.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Server className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">3. Information Sharing and Disclosure</h2>
                  <p className="leading-relaxed">
                    We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers. Data is only shared with certified immigration experts upon your explicit request.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Cookie className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">4. Cookies and Web Beacons</h2>
                  <p className="leading-relaxed">
                    Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. We use these cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Megaphone className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">5. Third-Party Advertising and Google Ads</h2>
                  <p className="leading-relaxed mb-4">
                    We use third-party advertising companies, including Google, to serve ads when you visit our website. These companies may use cookies and web beacons to collect non-personally identifiable information (such as your IP address, pages visited, and time of visit) to provide advertisements about goods and services of interest to you.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Google Ads Remarketing:</strong> We use Google Ads Remarketing features to advertise VisaVaani across the Internet. Google uses cookies to serve ads to you based on your past visits to our website.</li>
                    <li><strong>Opt-Out:</strong> You can opt out of Google's use of cookies or device identifiers by visiting Google's <a href="https://myadcenter.google.com/" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies by visiting the <a href="https://optout.networkadvertising.org/" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <UserCheck className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">6. Your Rights</h2>
                  <p className="leading-relaxed">
                    You have the right to access, correct, or delete your personal data at any time. You may also opt-out of future promotional communications from us. To exercise these rights, please contact our Data Protection Officer at privacy@visavaani.com.
                  </p>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
