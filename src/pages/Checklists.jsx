import React from 'react';
import { FileText, Download, CheckSquare, Search } from 'lucide-react';

const checklists = [
  { title: 'Schengen Tourist Visa Full Checklist', category: 'Tourist', size: '2.4 MB PDF', downloads: '12k+' },
  { title: 'US F-1 Student Visa Document Prep', category: 'Student', size: '1.8 MB PDF', downloads: '18k+' },
  { title: 'Canada PR (Express Entry) Document List', category: 'PR', size: '3.1 MB PDF', downloads: '25k+' },
  { title: 'UK Skilled Worker Visa Checklist', category: 'Work', size: '1.5 MB PDF', downloads: '9k+' },
  { title: 'Australia Subclass 189 PR Checklist', category: 'PR', size: '2.2 MB PDF', downloads: '14k+' },
  { title: 'Dubai Golden Visa Document Requirements', category: 'Investor', size: '1.1 MB PDF', downloads: '5k+' }
];

const Checklists = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-20 pb-24 text-white text-center px-4 relative overflow-hidden">
         <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Document Checklists</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Never miss a crucial document again. Download our meticulously verified checklists for every major visa type.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for a visa or country checklist..." 
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all backdrop-blur-sm"
              />
            </div>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklists.map((list, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">{list.category}</span>
                <h3 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">{list.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>{list.size}</span>
                  <span>{list.downloads} downloads</span>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center hover:bg-primary hover:text-white transition-colors shrink-0 ml-4 group-hover:bg-primary group-hover:text-white">
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Interactive Checklist Promo */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl shadow-blue-500/20">
           <div className="md:w-2/3 mb-6 md:mb-0">
             <div className="flex items-center mb-4">
                <CheckSquare className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Interactive Digital Checklists</h2>
             </div>
             <p className="text-blue-50 max-w-xl text-lg">Create a free account to track your document collection progress online, upload securely, and get AI verification on your files.</p>
           </div>
           <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-gray-50 transition-colors shadow-lg">
             Create Free Account
           </button>
        </div>
      </div>
    </div>
  );
};

export default Checklists;
