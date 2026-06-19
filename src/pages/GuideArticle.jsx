import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Star, Download, CheckCircle } from 'lucide-react';
import { guides } from './Guides';

const GuideArticle = () => {
  const { id } = useParams();
  const guide = guides.find(item => item.id === id);

  const renderContent = () => {
    switch(id) {
      case 'us-h1b-visa':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              The H-1B is a non-immigrant visa that allows US companies to employ graduate level workers in specialty occupations that require theoretical or technical expertise in specialized fields such as in IT, finance, accounting, architecture, engineering, mathematics, science, medicine, etc.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
            <p className="mb-6 leading-relaxed">
              To qualify for the H-1B visa, you must hold a bachelor's degree or higher (or equivalent) in a field related to the specialty occupation. You also need an employer sponsor who will file a Labor Condition Application (LCA) on your behalf.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Job offer from a US employer in a specialty occupation.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Bachelor's degree or higher in a relevant field.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Employer must demonstrate a lack of qualified US applicants for the role.</span>
                 </li>
               </ul>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Step-by-Step Application Process</h2>
            <div className="space-y-8 mt-6">
               <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">1</div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Employer Submits LCA</h3>
                     <p>Your prospective employer must file a Labor Condition Application with the Department of Labor, certifying they will pay the prevailing wage.</p>
                  </div>
               </div>
               <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">2</div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">H-1B Lottery Registration</h3>
                     <p>Enter the electronic registration process in March. If selected in the lottery, your employer can proceed to file the full petition.</p>
                  </div>
               </div>
               <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-6">3</div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">File Form I-129</h3>
                     <p>The employer files Form I-129 (Petition for a Nonimmigrant Worker) with USCIS. Once approved, you can apply for the visa stamp at a US embassy.</p>
                  </div>
               </div>
            </div>
          </>
        );
      case 'canada-express-entry':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              Express Entry is an online system that Canada uses to manage immigration applications from skilled workers. It's designed to facilitate fast processing for candidates who fill labor market shortages.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
            <p className="mb-6 leading-relaxed">
              You must qualify for one of three programs: the Federal Skilled Worker Program, the Federal Skilled Trades Program, or the Canadian Experience Class. Points are awarded via the Comprehensive Ranking System (CRS).
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Minimum language proficiency in English or French.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Educational Credential Assessment (ECA) for foreign degrees.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>At least one year of continuous full-time skilled work experience.</span>
                 </li>
               </ul>
            </div>
          </>
        );
      case 'uk-tier-4-checklist':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              The UK Student Visa (formerly Tier 4) allows international students aged 16 or over to study in the UK. This comprehensive checklist covers everything you need.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Document Checklist</h2>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Confirmation of Acceptance for Studies (CAS) reference number.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Valid passport or travel documentation.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Proof of funds (bank statements showing tuition and living costs).</span>
                 </li>
               </ul>
            </div>
          </>
        );
      case 'australia-skilled-migration':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              Australia's General Skilled Migration (GSM) program targets skilled workers whose professions are in demand. The most popular visas are Subclasses 189, 190, and 491.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
            <p className="mb-6 leading-relaxed">
              You must pass a points test based on age, English language ability, skilled employment, and educational qualifications. Your occupation must be on the relevant skilled occupation list.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Positive skills assessment for your nominated occupation.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Competent English (e.g., IELTS 6.0 in each band).</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Score at least 65 points on the points test.</span>
                 </li>
               </ul>
            </div>
          </>
        );
      case 'schengen-visa-apply':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              A Schengen visa is a short-stay visa that allows a person to travel to any member of the Schengen Area, per stays up to 90 days for tourism or business purposes.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
            <p className="mb-6 leading-relaxed">
              You must apply at the embassy/consulate of the country you will be spending the most days in.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Completed visa application form and two recent passport photos.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Travel medical insurance covering €30,000 minimum.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Proof of accommodation and flight itinerary.</span>
                 </li>
               </ul>
            </div>
          </>
        );
      case 'dubai-golden-visa':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-6 leading-relaxed">
              The UAE Golden Visa is a long-term residency visa (5 or 10 years) that enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Eligibility Requirements</h2>
            <p className="mb-6 leading-relaxed">
              Investors, entrepreneurs, specialized talents, researchers, and outstanding students are eligible.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Real estate investment of at least AED 2 million (for investors).</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Approval from relevant UAE ministries (for talents/professionals).</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                   <span>Comprehensive health insurance coverage.</span>
                 </li>
               </ul>
            </div>
          </>
        );
      default:
        return (
          <p>Guide information not found.</p>
        );
    }
  };

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
              {renderContent()}
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
