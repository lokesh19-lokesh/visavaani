import React from 'react';
import { Scale, FileText, AlertCircle, ShieldCheck } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Terms of Use</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform. Last updated: June 19, 2026.
            </p>
         </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12 p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              
              <div className="flex items-start mb-8">
                <FileText className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using VisaVaani ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <ShieldCheck className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">2. Service Description</h2>
                  <p className="leading-relaxed mb-4">
                    VisaVaani provides AI-driven immigration guidance, resource directories, and expert consultation routing. We provide informational resources, not legal advice. 
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-sm text-yellow-800 m-0 font-medium">
                      <AlertCircle className="inline w-4 h-4 mr-1 mb-0.5" />
                      Disclaimer: Our AI Advisor and guides are for informational purposes only. For legally binding advice, please book a consultation with our certified immigration lawyers via the Expert portal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Scale className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">3. User Conduct</h2>
                  <p className="leading-relaxed">
                    You agree to use the Platform only for lawful purposes. You are prohibited from violating or attempting to violate the security of the Platform, including accessing data not intended for such user or logging into a server or account which the user is not authorized to access.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FileText className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">4. Modifications to Service</h2>
                  <p className="leading-relaxed">
                    VisaVaani reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
                  </p>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
