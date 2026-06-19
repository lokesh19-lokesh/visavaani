import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, TrendingUp } from 'lucide-react';
import { newsItems } from './News';

const NewsArticle = () => {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === id);

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
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Details</h2>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What This Means For You</h2>
              <p className="mb-6 leading-relaxed">
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Review your eligibility based on the new criteria.</li>
                <li>Prepare documentation well in advance of the deadline.</li>
                <li>Consult with an immigration expert to maximize your chances.</li>
              </ul>
              
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
