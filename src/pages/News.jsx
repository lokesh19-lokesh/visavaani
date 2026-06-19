import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export const newsItems = [
  {
    id: 'uk-post-study-2026',
    title: 'UK Announces New Post-Study Work Visa Rules for 2026',
    date: 'June 18, 2026',
    excerpt: 'The Home Office has released new guidelines regarding the duration and eligibility criteria for international students wishing to stay and work after graduation.',
    tag: 'Policy Update',
    image: '/news/uk_news.png'
  },
  {
    id: 'canada-express-entry-481',
    title: 'Canada Express Entry Draw: Lowest CRS Score in 6 Months',
    date: 'June 15, 2026',
    excerpt: 'IRCC invited 4,500 candidates in the latest all-program draw, with the cutoff score dropping to 481, providing new hope for many applicants.',
    tag: 'Draw Results',
    image: '/news/canada_news.png'
  },
  {
    id: 'uscis-h1b-premium',
    title: 'USCIS Speeds Up Premium Processing for H-1B Petitions',
    date: 'June 10, 2026',
    excerpt: 'In a bid to clear backlogs, USCIS has expanded its premium processing categories and reduced the maximum processing time to just 15 days.',
    tag: 'Processing Times',
    image: '/news/us_news.png'
  }
];

const News = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="Immigration News & Updates"
        description="Stay updated with the latest immigration news, visa policy changes, and international travel updates."
        url="/news"
      />
      <div className="bg-primary pt-20 pb-24 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <TrendingUp className="w-96 h-96" />
         </div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">News & Updates</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay ahead with the latest global immigration policy changes, draw results, and breaking news.
            </p>
         </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="space-y-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row group">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {news.tag}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 text-sm mb-4 font-medium">
                  <Calendar className="w-4 h-4 mr-2" /> {news.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{news.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{news.excerpt}</p>
                <Link to={`/news/${news.id}`} className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors w-max">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
