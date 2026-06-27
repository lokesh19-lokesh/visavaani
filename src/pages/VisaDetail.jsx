import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowLeft, CheckCircle2, ChevronRight, Sparkles, FileText, Briefcase, GraduationCap, Plane, Shield } from 'lucide-react';
import { countriesData } from '../data/countriesData';
import PremiumAIModal from '../components/PremiumAIModal';

// Helper function to create slugs
const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const VisaDetail = () => {
  const { countryId, visaId } = useParams();
  const navigate = useNavigate();
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  
  // Find country
  const country = countriesData.find(c => c.id === countryId);
  
  // Find visa
  const visa = country?.keyVisas.find(v => createSlug(v.name) === visaId);

  if (!country || !visa) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Visa Not Found</h1>
          <p className="text-gray-500 mb-8 text-lg">We couldn't find the visa details you're looking for.</p>
          <button 
            onClick={() => navigate('/countries')}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  // Get icon based on visa type
  const getVisaIcon = (type) => {
    const t = type.toLowerCase();
    if (t.includes('work') || t.includes('business') || t.includes('talent')) return Briefcase;
    if (t.includes('study') || t.includes('student')) return GraduationCap;
    if (t.includes('visitor') || t.includes('tourist')) return Plane;
    if (t.includes('pr') || t.includes('family') || t.includes('residency')) return Shield;
    return FileText;
  };
  
  const Icon = getVisaIcon(visa.type);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-primary pt-16 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Icon className="w-96 h-96" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to={`/countries/${country.id}`} className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to {country.name}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{visa.name}</h1>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
              {visa.type}
            </span>
            <span className="flex items-center text-white/90 text-sm">
              <MapPin className="w-4 h-4 mr-1" /> {country.name}
            </span>
          </div>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {visa.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Requirements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Requirements</h2>
                <p className="text-gray-500">What you need to qualify for this visa</p>
              </div>
              <div className="hidden sm:flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100">
                <Clock className="w-4 h-4 mr-2" />
                Duration: {visa.duration}
              </div>
            </div>

            <div className="sm:hidden mb-8 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium border border-blue-100 flex items-start">
              <Clock className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
              <span>Duration: {visa.duration}</span>
            </div>

            <div className="space-y-4">
              {visa.requirements.map((req, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mr-4 mt-0.5" />
                  <p className="text-gray-700 text-[15px] font-medium leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Sparkles className="w-24 h-24 text-blue-600" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                  Check Your Eligibility instantly
                </h3>
                <p className="text-blue-800/80 mb-6 text-base leading-relaxed max-w-lg">
                  Let our AI advisor analyze your profile and determine if you meet the requirements for the {visa.name}.
                </p>
                <button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-ai-modal', {
                      detail: { context: `The user wants to check their eligibility for the ${visa.name} visa in ${country.name}. Act as an AI Visa Eligibility Checker. Ask them simple questions one by one (like age, education, experience, language skills) to determine if they qualify.` }
                    }));
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5 flex items-center"
                >
                  Start AI Assessment <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-gray-900 rounded-3xl shadow-xl border border-gray-800 p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  Talk to AI Expert
                  <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Have complex questions about the {visa.name}? Get premium, personalized clarification in your native language.
                </p>
                <button 
                  onClick={() => setIsAIModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 px-4 py-3.5 rounded-xl font-bold text-sm hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center shadow-lg hover:shadow-blue-500/25 group"
                >
                  Start Consultation
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Application Steps Summary */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5">General Next Steps</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mr-3 border border-blue-100">1</div>
                  <p className="text-sm text-gray-600 mt-1.5">Check your eligibility using our AI tools or with an expert.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mr-3 border border-blue-100">2</div>
                  <p className="text-sm text-gray-600 mt-1.5">Gather all required documents listed above.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mr-3 border border-blue-100">3</div>
                  <p className="text-sm text-gray-600 mt-1.5">Submit application through the official {country.name} immigration portal.</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      <PremiumAIModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
};

export default VisaDetail;
