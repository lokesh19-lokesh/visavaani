import React from 'react';
import { User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Top 5 Tech Hubs in Europe for Expats in 2026',
    excerpt: 'Looking to relocate? We analyze the best cities in Europe based on tech salaries, visa ease, and quality of life.',
    author: 'Sarah Jenkins',
    date: 'June 10, 2026',
    category: 'Relocation',
    image: '/blog/tech_hubs.png'
  },
  {
    title: 'How to Build a Strong Statement of Purpose',
    excerpt: 'Your SOP can make or break your student visa application. Here are 7 expert tips to make yours stand out.',
    author: 'David Chen',
    date: 'June 5, 2026',
    category: 'Study Abroad',
    image: '/blog/sop.png'
  },
  {
    title: 'The Rise of Digital Nomad Visas: A Complete List',
    excerpt: 'Over 50 countries now offer visas specifically for remote workers. Find out which ones offer the best tax benefits.',
    author: 'Elena Rodriguez',
    date: 'May 28, 2026',
    category: 'Digital Nomad',
    image: '/blog/digital_nomad.png'
  },
  {
    title: 'Understanding the UK Points-Based Immigration System',
    excerpt: 'A deep dive into how points are calculated for the Skilled Worker visa and how you can boost your score.',
    author: 'James Wilson',
    date: 'May 15, 2026',
    category: 'Guides',
    image: '/blog/uk.png'
  },
  {
    title: 'Moving with Pets: International Pet Relocation Guide',
    excerpt: 'Relocating with your furry friends requires intense preparation. Learn about quarantine rules, microchips, and travel crates.',
    author: 'Sarah Jenkins',
    date: 'May 2, 2026',
    category: 'Relocation',
    image: '/blog/pets.png'
  },
  {
    title: 'Common Reasons for Visa Rejections (And How to Avoid Them)',
    excerpt: 'Don\'t let a simple mistake ruin your immigration dreams. We break down the most frequent reasons for visa denials.',
    author: 'David Chen',
    date: 'April 20, 2026',
    category: 'Tips & Tricks',
    image: '/blog/rejection.png'
  }
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-20 pb-20 text-white text-center px-4">
         <h1 className="text-4xl md:text-5xl font-extrabold mb-6">VisaVaani Blog</h1>
         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           Insights, stories, and expert advice on global mobility and immigration.
         </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 text-sm flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <User className="w-4 h-4 mr-1" /> <span className="mr-3">{post.author}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <Clock className="w-4 h-4 mr-1" /> <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
