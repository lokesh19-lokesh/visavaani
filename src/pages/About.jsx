import React from 'react';
import { Info, Users, Globe, Target, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="About Us"
        description="Learn about VisaVaani's mission to simplify global immigration for Indians."
        url="/about"
      />
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <Info className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">About VisaVaani</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              India's Trusted Immigration Guidance Platform. We empower global citizens with accurate, AI-driven immigration insights and expert support.
            </p>
         </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Navigating global immigration can be complex, stressful, and fraught with misinformation. At VisaVaani, our mission is to democratize access to high-quality, verified immigration information. 
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By combining cutting-edge AI technology with a network of certified human experts, we provide tailored strategies that maximize your chances of success, whether you're seeking to study, work, or settle abroad.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl text-center">
                    <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-2xl mb-1">50K+</h3>
                    <p className="text-sm text-gray-600 font-medium">Happy Users</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl text-center">
                    <Globe className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-2xl mb-1">120+</h3>
                    <p className="text-sm text-gray-600 font-medium">Countries Covered</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl text-center">
                    <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-2xl mb-1">98%</h3>
                    <p className="text-sm text-gray-600 font-medium">Success Rate</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-2xl text-center">
                    <ShieldCheck className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-2xl mb-1">100+</h3>
                    <p className="text-sm text-gray-600 font-medium">Certified Experts</p>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
