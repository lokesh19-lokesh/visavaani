import React from 'react';
import { BookOpen, ArrowRight, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: 'The Ultimate Guide to US H-1B Visa',
    description: 'Everything you need to know about the lottery, requirements, and application process for the US H-1B work visa.',
    category: 'Work Visas',
    readTime: '15 min read',
    rating: 4.9,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'Canada Express Entry: Step-by-Step',
    description: 'Master the CRS points system and learn how to secure your Canadian Permanent Residency efficiently.',
    category: 'Permanent Residency',
    readTime: '20 min read',
    rating: 4.8,
    color: 'bg-red-50 text-red-700',
  },
  {
    title: 'UK Student Visa (Tier 4) Checklist',
    description: 'A comprehensive walkthrough of the financial, academic, and language requirements for UK study.',
    category: 'Student Visas',
    readTime: '12 min read',
    rating: 4.9,
    color: 'bg-indigo-50 text-indigo-700',
  },
  {
    title: 'Australia General Skilled Migration',
    description: 'Understanding subclasses 189, 190, and 491. Discover your eligibility for Australian PR.',
    category: 'Skilled Migration',
    readTime: '18 min read',
    rating: 4.7,
    color: 'bg-green-50 text-green-700',
  },
  {
    title: 'Schengen Visa: How to Apply',
    description: 'Tips for a successful tourist visa application to travel across 27 European countries hassle-free.',
    category: 'Tourist Visas',
    readTime: '10 min read',
    rating: 4.6,
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    title: 'Dubai Golden Visa Requirements',
    description: 'Learn about the investment thresholds, specialist categories, and benefits of UAE long-term residency.',
    category: 'Investor Visas',
    readTime: '14 min read',
    rating: 4.8,
    color: 'bg-orange-50 text-orange-700',
  }
];

const Guides = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-20 pb-24 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10"></div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">In-Depth Visa Guides</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master the complexities of global immigration with our comprehensive, step-by-step handbooks.
            </p>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${guide.color}`}>
                  {guide.category}
                </span>
                <div className="flex items-center text-yellow-500 text-sm font-medium">
                  <Star className="w-4 h-4 fill-current mr-1" /> {guide.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{guide.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{guide.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-500 font-medium flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" /> {guide.readTime}
                </span>
                <button className="w-10 h-10 rounded-full bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm text-center flex flex-col items-center">
           <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
             <Download className="w-8 h-8" />
           </div>
           <h2 className="text-2xl font-bold text-gray-900 mb-4">Want all guides offline?</h2>
           <p className="text-gray-600 mb-8 max-w-xl mx-auto">Download our massive 200-page Visa Masterclass PDF containing all our expert guides, tips, and templates.</p>
           <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors shadow-lg shadow-gray-900/20">
             Download Complete E-Book
           </button>
        </div>
      </div>
    </div>
  );
};

export default Guides;
