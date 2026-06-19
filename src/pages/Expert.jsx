import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageSquare, Video, CheckCircle2, Star, ShieldCheck, Award } from 'lucide-react';

const Expert = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-primary pt-20 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/20 backdrop-blur-sm"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-sm font-medium">Licensed Immigration Experts</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Talk to an Immigration <span className="text-secondary">Expert</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get personalized, strategic advice tailored to your unique profile. 
            Skip the guesswork and secure your global future with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Consultation</h2>
            <p className="text-gray-500 mb-8">Fill out the details below and we'll connect you with the right specialist.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Target Country</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                  <option>Select a country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Visa Category</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                  <option>Select visa type</option>
                  <option>Work Visa</option>
                  <option>Student Visa</option>
                  <option>Permanent Residency</option>
                  <option>Investor/Startup Visa</option>
                  <option>Family Sponsorship</option>
                  <option>Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your situation</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Briefly describe your background and immigration goals..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg shadow-gray-900/20">
                Request Consultation
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-green-500" /> Your information is secure and confidential.
              </p>
            </form>
          </motion.div>

          {/* Right Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Consult Our Experts?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4 mt-1">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Professionals</h4>
                    <p className="text-sm text-gray-500 mt-1">Regulated immigration advisors with decades of combined experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tailored Strategy</h4>
                    <p className="text-sm text-gray-500 mt-1">We analyze your specific profile to find the fastest, safest pathway.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Success Rate</h4>
                    <p className="text-sm text-gray-500 mt-1">Thousands of successful visas and PRs processed globally.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* How it works */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                  <Video className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6">How It Works</h3>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-800">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-gray-900 bg-secondary text-white font-bold text-xs shrink-0 z-10">1</div>
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] text-left ml-4 md:ml-0">
                        <p className="text-sm font-medium">Submit your details</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-gray-900 bg-secondary text-white font-bold text-xs shrink-0 z-10">2</div>
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] text-left ml-4 md:ml-0">
                        <p className="text-sm font-medium">Expert review</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-gray-900 bg-secondary text-white font-bold text-xs shrink-0 z-10">3</div>
                      <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] text-left ml-4 md:ml-0">
                        <p className="text-sm font-medium">1-on-1 Video Call</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
