import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Star, Download, CheckCircle } from 'lucide-react';
import { guides } from './Guides';

const GuideArticle = () => {
  const { id } = useParams();
  const guide = guides.find(item => item.id === id);

  if (!guide) {
    return (
      <div className="bg-gray-50 min-h-screen pt-32 pb-20 font-sans flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guide Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">We couldn't find the guide you were looking for. It may have been moved or removed.</p>
        <Link to="/guides" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors">
          Return to Guides
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-center space-x-4">
               <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${guide.color}`}>
                 {guide.category}
               </span>
               <div className="flex items-center text-yellow-400 text-sm font-medium">
                 <Star className="w-4 h-4 fill-current mr-1" /> {guide.rating}
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{guide.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {guide.description}
            </p>
         </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12 p-8 md:p-12">
            <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
               <div className="flex items-center text-gray-500 font-medium">
                  <BookOpen className="w-5 h-5 mr-2" /> {guide.readTime}
               </div>
               <button className="flex items-center text-primary font-bold hover:text-blue-700 transition-colors">
                  <Download className="w-5 h-5 mr-2" /> Download PDF Version
               </button>
            </div>
            
            <div className="prose prose-lg text-gray-700 max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
              <p className="mb-6 leading-relaxed">
                Before you begin your application, it's crucial to ensure you meet all the baseline eligibility criteria. Failure to do so will result in an immediate rejection and loss of application fees.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                     <span>Valid passport with at least 6 months validity remaining.</span>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                     <span>Clean criminal record and clear security background check.</span>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                     <span>Proof of sufficient financial funds to support yourself during your stay.</span>
                   </li>
                 </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Step-by-Step Application Process</h2>
              <div className="space-y-8 mt-6">
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">1</div>
                    <div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">Gather Your Documents</h3>
                       <p>Start by compiling all necessary documentation, including birth certificates, educational transcripts, and bank statements. Ensure all documents are translated if not in the official language.</p>
                    </div>
                 </div>
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">2</div>
                    <div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Online Application</h3>
                       <p>Create an account on the official immigration portal, fill out the extensive application forms meticulously, and upload your digitized documents.</p>
                    </div>
                 </div>
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">3</div>
                    <div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">Attend Biometrics Appointment</h3>
                       <p>Schedule and attend an appointment at your local visa application center to provide your fingerprints and a digital photograph.</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
        
        <div className="flex justify-between items-center pb-10">
           <Link to="/guides" className="inline-flex items-center text-gray-500 hover:text-primary font-bold transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to all Guides
           </Link>
           <div className="flex space-x-3">
             <button className="text-gray-400 hover:text-blue-600 transition-colors font-bold text-sm">Share Guide</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GuideArticle;
