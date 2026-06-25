import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, CheckCircle2, Globe2, Clock, Users, Building, Coins, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { countriesData } from '../data/countriesData';

const Compare = () => {
  const [countryAId, setCountryAId] = useState(countriesData[0].id);
  const [countryBId, setCountryBId] = useState(countriesData[1].id);

  const countryA = countriesData.find(c => c.id === countryAId);
  const countryB = countriesData.find(c => c.id === countryBId);

  const availableCountriesA = countriesData.filter(c => c.id !== countryBId);
  const availableCountriesB = countriesData.filter(c => c.id !== countryAId);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 md:py-16 px-4">
      <SEO 
        title="Compare Immigration Options"
        description="Compare different countries, visa pathways, and requirements side-by-side to find your ideal immigration destination."
        url="/compare"
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare Immigration Destinations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select two countries to compare their quick facts, visa options, and benefits side-by-side to make an informed decision.</p>
        </div>

        {/* Selectors */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-2/5">
            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Destination 1</label>
            <select 
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-xl focus:ring-secondary focus:border-secondary block p-3.5 transition-all"
              value={countryAId}
              onChange={(e) => setCountryAId(e.target.value)}
            >
              {availableCountriesA.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          
          <div className="shrink-0 bg-blue-50 p-4 rounded-full text-primary hidden md:block">
            <ArrowLeftRight className="w-6 h-6" />
          </div>

          <div className="w-full md:w-2/5">
            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Destination 2</label>
            <select 
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-xl focus:ring-secondary focus:border-secondary block p-3.5 transition-all"
              value={countryBId}
              onChange={(e) => setCountryBId(e.target.value)}
            >
              {availableCountriesB.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${countryAId}-${countryBId}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Country A Column */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="bg-primary p-8 text-center relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src={countryA.image} alt={countryA.name} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-20">
                  <h2 className="text-3xl font-extrabold mb-2">{countryA.name}</h2>
                  <p className="text-blue-100 font-medium">{countryA.region}</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Quick Facts</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Capital</span> <span className="font-semibold text-gray-900">{countryA.quickFacts.capital}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Coins className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Currency</span> <span className="font-semibold text-gray-900">{countryA.quickFacts.currency}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Globe2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Language</span> <span className="font-semibold text-gray-900">{countryA.quickFacts.language}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Time to PR</span> <span className="font-semibold text-gray-900">{countryA.quickFacts.timeToPR}</span></div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Top Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {countryA.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Popular Visa Paths</h3>
                <div className="space-y-3">
                  {countryA.keyVisas.slice(0, 3).map((visa, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="font-semibold text-gray-900">{visa.name}</div>
                      <div className="text-sm text-gray-500">{visa.type} • {visa.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to={`/countries/${countryA.id}`} className="w-full block text-center py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors">
                  View full {countryA.name} profile
                </Link>
              </div>
            </div>

            {/* Country B Column */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="bg-primary p-8 text-center relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src={countryB.image} alt={countryB.name} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-20">
                  <h2 className="text-3xl font-extrabold mb-2">{countryB.name}</h2>
                  <p className="text-blue-100 font-medium">{countryB.region}</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Quick Facts</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Capital</span> <span className="font-semibold text-gray-900">{countryB.quickFacts.capital}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Coins className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Currency</span> <span className="font-semibold text-gray-900">{countryB.quickFacts.currency}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Globe2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Language</span> <span className="font-semibold text-gray-900">{countryB.quickFacts.language}</span></div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <div><span className="text-gray-500 block text-sm">Time to PR</span> <span className="font-semibold text-gray-900">{countryB.quickFacts.timeToPR}</span></div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Top Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {countryB.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Popular Visa Paths</h3>
                <div className="space-y-3">
                  {countryB.keyVisas.slice(0, 3).map((visa, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="font-semibold text-gray-900">{visa.name}</div>
                      <div className="text-sm text-gray-500">{visa.type} • {visa.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to={`/countries/${countryB.id}`} className="w-full block text-center py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors">
                  View full {countryB.name} profile
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Call to action */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center flex flex-col items-center">
           <ShieldCheck className="w-16 h-16 text-secondary mb-4" />
           <h3 className="text-2xl font-bold text-gray-900 mb-2">Still Unsure Which is Best For You?</h3>
           <p className="text-gray-600 max-w-xl mx-auto mb-6">Our AI Advisor can analyze your personal profile, including education, experience, and budget, to recommend the optimal destination and visa path.</p>
           <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-ai-modal', {
                  detail: { context: `The user was comparing ${countryA.name} and ${countryB.name}. Help them decide which destination is better based on their specific background and goals.` }
                }));
              }}
              className="flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5"
            >
              Get AI Recommendation <ArrowRight className="w-5 h-5 ml-2" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Compare;
