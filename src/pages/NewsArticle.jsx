import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, TrendingUp } from 'lucide-react';
import { newsItems } from './News';

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === id);

  const renderContent = () => {
    switch(id) {
      case 'uk-post-study-2026':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Details</h2>
            <p className="mb-6 leading-relaxed">
              The UK Home Office has announced significant changes to the Post-Study Work (PSW) visa, officially known as the Graduate Route. Effective early 2026, the duration of the visa for bachelor's degree graduates will remain at two years, while PhD graduates will see an extension to four years. Furthermore, stricter compliance checks will be implemented to ensure universities are tracking graduate outcomes effectively.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What This Means For You</h2>
            <p className="mb-6 leading-relaxed">
              If you are currently enrolled in or planning to start a degree program in the UK, these changes offer both new opportunities and stricter requirements. The focus on compliance means your university's ranking and track record may impact visa processing times.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Ensure your chosen university maintains a high compliance rating with the Home Office.</li>
              <li>Start your job search early; the two-year window remains highly competitive.</li>
              <li>For PhD candidates, the four-year extension provides a massive advantage for securing permanent residency.</li>
            </ul>
          </>
        );
      case 'canada-express-entry-481':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Details</h2>
            <p className="mb-6 leading-relaxed">
              In a surprising move, Immigration, Refugees and Citizenship Canada (IRCC) conducted an all-program draw inviting 4,500 candidates to apply for permanent residency. The Comprehensive Ranking System (CRS) score cutoff dropped to 481, the lowest seen in the past six months. This draw included candidates from the Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What This Means For You</h2>
            <p className="mb-6 leading-relaxed">
              This drop indicates that IRCC is aggressively working towards its annual immigration targets. Candidates sitting in the pool with scores in the high 470s should prepare their documents, as subsequent draws may see further decreases.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Update your Express Entry profile to ensure all points (language, education, experience) are maximized.</li>
              <li>Prepare your Police Clearance Certificates and Medical Exams in advance.</li>
              <li>Consider provincial nomination programs if your score is still below the current threshold.</li>
            </ul>
          </>
        );
      case 'uscis-h1b-premium':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Details</h2>
            <p className="mb-6 leading-relaxed">
              The United States Citizenship and Immigration Services (USCIS) has announced an immediate expansion of its premium processing services. Not only are more visa categories now eligible, but the agency has committed to a strict 15-calendar-day processing timeline for H-1B petitions. This move is part of a broader initiative to clear pandemic-era backlogs and streamline legal immigration pathways for highly skilled workers.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What This Means For You</h2>
            <p className="mb-6 leading-relaxed">
              For tech professionals and their employers, this provides much-needed certainty. The ability to guarantee a decision within 15 days allows for better onboarding and relocation planning. However, the premium processing fee has also seen a marginal increase.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Coordinate with your HR department and immigration lawyer to file with premium processing immediately upon selection.</li>
              <li>Ensure your LCA is certified before requesting premium processing.</li>
              <li>Be prepared for quick turnaround times on any potential Requests for Evidence (RFEs).</li>
            </ul>
          </>
        );
      default:
        return (
          <p className="mb-6 leading-relaxed">Content unavailable.</p>
        );
    }
  };

  if (!article) {
    return (
      <div className="bg-gray-50 min-h-screen pt-32 pb-20 font-sans flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">We couldn't find the news update you were looking for. It may have been moved or removed.</p>
        <Link to="/news" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors">
          Return to News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute top-0 left-0 opacity-5 transform -translate-x-1/4 -translate-y-1/4">
            <TrendingUp className="w-96 h-96" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-center space-x-4">
               <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                 {article.tag}
               </span>
               <div className="flex items-center text-gray-300 text-sm font-medium">
                 <Calendar className="w-4 h-4 mr-2" /> {article.date}
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{article.title}</h1>
         </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="lead text-xl text-gray-900 font-medium mb-8 leading-relaxed">
                {article.excerpt}
              </p>
              {renderContent()}
              
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl mt-10">
                <p className="text-sm text-blue-900 m-0 font-medium italic">
                  "This update represents a significant shift in immigration policy, aiming to streamline the process for highly qualified candidates while maintaining robust security measures."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pb-10">
           <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-primary font-bold transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to all News
           </Link>
           <div className="flex space-x-3">
             <button className="text-gray-400 hover:text-blue-600 transition-colors font-bold text-sm">Share</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
