import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does the typical visa process take?",
    answer: "Processing times vary wildly depending on the visa type and destination country. For instance, a US Tourist Visa interview wait time could be months, while a UK Priority Student Visa can be processed in 5 days. Our AI Advisor can give you a specific estimate based on your exact profile."
  },
  {
    question: "What is the difference between a visa and a residence permit?",
    answer: "A visa is an entry document that allows you to present yourself at the border. A residence permit is issued once you are inside the country, allowing you to live and sometimes work there for a specified duration."
  },
  {
    question: "Do I always need an immigration lawyer?",
    answer: "Not always. Many straightforward applications (like basic tourist or student visas) can be done independently using our detailed guides. However, for complex cases like business immigration, past visa refusals, or criminal records, consulting our certified experts is highly recommended."
  },
  {
    question: "How does the AI Advisor work?",
    answer: "Our AI Advisor asks you a series of questions about your background, education, financial status, and goals. It then matches your profile against thousands of current immigration policies globally to suggest the best pathways for you."
  },
  {
    question: "Can I apply for multiple visas at the same time?",
    answer: "Generally, yes, to different countries. However, applying for multiple visa categories to the same country simultaneously can sometimes cause confusion and delays. It's usually better to choose the most appropriate pathway."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="Frequently Asked Questions (FAQs)"
        description="Find answers to common immigration and visa questions."
        url="/faqs"
        schema={faqSchema}
      />
      <div className="bg-primary pt-20 pb-24 text-white text-center px-4">
         <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h1>
         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           Find quick answers to common immigration questions.
         </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
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

        {/* Still have questions? */}
        <div className="mt-12 bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl text-white">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Still have questions?</h3>
              <p className="text-gray-400 text-sm">Our support team is here to help you.</p>
            </div>
          </div>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full md:w-auto">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
