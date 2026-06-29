import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Banknote, Users, CloudSun, Clock, ArrowLeft, CheckCircle2, ChevronRight, MessageSquare, Sparkles, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { countriesData } from '../data/countriesData';
import PremiumAIModal from '../components/PremiumAIModal';
import SEO from '../components/SEO';
import { useState } from 'react';

const CountryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  
  // Find the country data
  const country = countriesData.find(c => c.id === id);

  // If country not found, show a beautiful error state
  if (!country) {
    return (
      <main className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center bg-gray-50 px-4">
        <SEO title="Destination Not Found" description="The requested immigration destination could not be found." />
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-500 mb-8 text-lg">We couldn't find the immigration destination you're looking for. It may have been removed or the link is incorrect.</p>
          <button 
            onClick={() => navigate('/countries')}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Destinations
          </button>
        </div>
      </main>
    );
  }

  // Generative AI FAQs for GEO
  const countryFaqs = [
    {
      question: `Is it easy for an Indian citizen to get PR in ${country.name}?`,
      answer: `The permanent residency process in ${country.name} depends heavily on your age, education, and work experience. Skilled professionals with a job offer or high points in immigration systems generally have a straightforward pathway. Consult our VisaVaani AI Advisor to calculate your specific eligibility.`
    },
    {
      question: `How long does the visa process take for ${country.name}?`,
      answer: `Processing times for ${country.name} vary by visa type. Tourist visas may take a few weeks to months depending on consulate wait times, while work and student visas often have expedited processing if all documents are perfectly in order.`
    },
    {
      question: `Do I need an IELTS score to move to ${country.name}?`,
      answer: `In most English-speaking regions, an English proficiency test like IELTS, TOEFL, or PTE is mandatory for work or study visas. Some exemptions exist if you have completed a degree in English, but a strong IELTS score often boosts your overall points for PR.`
    },
    {
      question: `Can I take my family with me to ${country.name}?`,
      answer: `Yes, ${country.name} generally allows main applicants of long-term study, work, or PR visas to bring their spouse and dependent children. They usually need to apply for dependent or family reunification visas.`
    }
  ];

  // Combined Schema for AEO/LLMO/GEO
  const countrySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "name": country.name,
        "description": country.description,
        "image": `https://visavaani.com${country.image}`,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Visa Pathways for ${country.name}`,
          "itemListElement": country.keyVisas?.map((visa, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": visa.name,
              "description": visa.description,
              "url": `https://visavaani.com/countries/${country.id}/visa/${visa.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`
            },
            "position": index + 1
          })) || []
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": countryFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title={`Immigration & Visas for ${country.name}`}
        description={`Explore PR, work, and study visa options for ${country.name}. Requirements, costs, and processing times.`}
        url={`/countries/${country.id}`}
        schema={countrySchema}
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={country.image} 
            alt={country.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <button 
            onClick={() => navigate('/countries')}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 w-fit backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Countries
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-14 rounded-lg shadow-2xl overflow-hidden border-2 border-white/20 hidden sm:block">
              <img src={`https://flagcdn.com/w80/${country.id === 'bali' ? 'id' : country.id === 'maldives' ? 'mv' : country.id}.png`} alt={`${country.name} Flag`} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center text-secondary font-medium mb-2">
                <MapPin className="w-5 h-5 mr-1" /> {country.region}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{country.name}</h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">{country.description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Facts Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><Globe className="w-4 h-4 mr-1"/> Capital</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.capital}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><Banknote className="w-4 h-4 mr-1"/> Currency</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.currency}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><MessageSquare className="w-4 h-4 mr-1"/> Language</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.language}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><Users className="w-4 h-4 mr-1"/> Population</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.population}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><CloudSun className="w-4 h-4 mr-1"/> Climate</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.climate}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm flex items-center mb-1"><Clock className="w-4 h-4 mr-1"/> Time to PR</span>
                  <span className="font-semibold text-gray-900">{country.quickFacts.timeToPR}</span>
                </div>
              </div>
            </motion.div>

            {/* Visa Pathways */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Visa Pathways</h2>
              <div className="space-y-4">
                {country.keyVisas.map((visa, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 hover:shadow-lg transition-shadow relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <Link to={`/countries/${country.id}/visa/${visa.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`} className="group inline-flex items-center">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{visa.name}</h3>
                          <ChevronRight className="w-5 h-5 ml-1 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                        </Link>
                        <div className="mt-1">
                          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            {visa.type}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('open-ai-modal', {
                            detail: { context: `The user wants to check their eligibility for the ${visa.name} visa in ${country.name}. Act as an AI Visa Eligibility Checker. Ask them simple questions one by one (like age, education, experience, language skills) to determine if they qualify.` }
                          }));
                        }}
                        className="text-primary font-medium flex items-center hover:text-secondary transition-colors text-sm whitespace-nowrap bg-blue-50/50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100"
                      >
                        <Sparkles className="w-4 h-4 mr-1.5 text-secondary" />
                        AI Eligibility Check <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {visa.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500 flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1.5" /> Duration: {visa.duration}
                        </div>
                        <Link to={`/countries/${country.id}/visa/${visa.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`} className="text-primary hover:text-primary-light font-medium text-sm flex items-center">
                          View Details <ArrowLeft className="w-4 h-4 ml-1 transform rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* EEAT Trust Signal Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start shadow-sm"
            >
              <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-green-900 text-lg mb-1">Expertly Verified</h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  The immigration pathways and timelines for {country.name} have been reviewed and verified by certified VisaVaani immigration experts for accuracy in 2026.
                </p>
              </div>
            </motion.div>

            {/* Benefits Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary text-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Why {country.name}?</h2>
              <ul className="space-y-4">
                {country.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to move to {country.name}?</h3>
              <p className="text-gray-500 mb-6 text-sm">Get a personalized roadmap from our AI Advisor or connect with an immigration expert.</p>
              
              <div className="space-y-3">
                <Link to="/advisor">
                  <button className="w-full bg-primary hover:bg-primary-light text-white px-4 py-3 rounded-xl font-semibold transition-colors shadow-md">
                    Start AI Assessment
                  </button>
                </Link>
                <button 
                  onClick={() => setIsAIModalOpen(true)}
                  className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center group"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-500 group-hover:scale-110 transition-transform" />
                  Talk to AI Expert
                </button>
              </div>
            </motion.div>

          </div>

        </div>

        {/* On-Page GEO FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto pb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Direct answers to the most common queries about immigrating to {country.name}.</p>
          </div>
          
          <div className="space-y-4">
            {countryFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>

      <PremiumAIModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </main>
  );
};

export default CountryDetail;
