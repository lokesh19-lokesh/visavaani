import React from 'react';
import { BookOpen, FileText, LayoutGrid, ArrowRight, HelpCircle, FileCheck, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resourceLinks = [
    {
      title: "In-Depth Visa Guides",
      description: "Step-by-step handbooks for navigating complex visa applications like H-1B, Express Entry, and more.",
      icon: BookOpen,
      href: "/guides",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Document Checklists",
      description: "Never miss a crucial document again. Download our verified checklists for every major visa type.",
      icon: FileCheck,
      href: "/checklists",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "News & Updates",
      description: "Stay ahead with the latest global immigration policy changes, draw results, and breaking news.",
      icon: Newspaper,
      href: "/news",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "VisaVaani Blog",
      description: "Insights, stories, and expert advice on global mobility, relocation, and living abroad.",
      icon: LayoutGrid,
      href: "/blog",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Frequently Asked Questions",
      description: "Find quick answers to common queries regarding processing times, fees, and eligibility.",
      icon: HelpCircle,
      href: "/faqs",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <LayoutGrid className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Immigration Resources</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your comprehensive library of tools, guides, and insights to make your global mobility journey seamless.
            </p>
         </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceLinks.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
              <div className="flex items-center text-primary font-bold">
                Explore <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Resources;
