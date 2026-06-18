import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Facebook, Instagram, YouTube as Youtube, LinkedIn as Linkedin, Twitter } from '@mui/icons-material';
import { Menu, X } from 'lucide-react';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-primary text-white border-b border-gray-800/50 relative z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center pt-2">
              <Link to="/" className="flex flex-col" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-extrabold text-[22px] tracking-wider text-white leading-none mb-1">
                  VISAVAANI
                </span>
                <span className="indian-flag-underline h-[4px]"></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className="text-white font-medium text-sm hover:text-secondary transition-colors">Home</Link>
              <Link to="/countries" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">Countries</Link>
              <Link to="/visas" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">Visa Types</Link>
              <Link to="/advisor" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">AI Advisor</Link>
              <Link to="/resources" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">About Us</Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link to="/auth" className="hidden sm:block">
                <button className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors">
                  Login / Sign Up
                </button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-primary border-b border-gray-800/50 shadow-xl">
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              <Link to="/" onClick={toggleMobileMenu} className="text-white font-medium text-base hover:text-secondary transition-colors block py-2 border-b border-gray-800/50">Home</Link>
              <Link to="/countries" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">Countries</Link>
              <Link to="/visas" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">Visa Types</Link>
              <Link to="/advisor" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">AI Advisor</Link>
              <Link to="/resources" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">Resources</Link>
              <Link to="/about" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">About Us</Link>
              
              <Link to="/auth" onClick={toggleMobileMenu} className="block sm:hidden pt-4">
                <button className="w-full bg-white text-primary hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold text-base shadow-sm transition-colors">
                  Login / Sign Up
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#F8FAFC]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2 pr-0 md:pr-8">
              <div className="mb-6 inline-block">
                <span className="font-extrabold text-[28px] tracking-wider text-white leading-none mb-1 block">
                  VISAVAANI
                </span>
                <span className="indian-flag-underline h-[4px]"></span>
              </div>
              <p className="text-gray-300 text-[15px] leading-relaxed max-w-sm">
                India's Trusted Immigration<br/>Guidance Platform
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[15px]">Quick Links</h4>
              <ul className="space-y-4 text-[14px]">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/countries" className="text-gray-400 hover:text-white transition-colors">Countries</Link></li>
                <li><Link to="/visas" className="text-gray-400 hover:text-white transition-colors">Visa Types</Link></li>
                <li><Link to="/eligibility" className="text-gray-400 hover:text-white transition-colors">Eligibility</Link></li>
                <li><Link to="/advisor" className="text-gray-400 hover:text-white transition-colors">AI Advisor</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[15px]">Resources</h4>
              <ul className="space-y-4 text-[14px]">
                <li><Link to="/guides" className="text-gray-400 hover:text-white transition-colors">Visa Guides</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News & Updates</Link></li>
                <li><Link to="/checklists" className="text-gray-400 hover:text-white transition-colors">Document Checklist</Link></li>
                <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[15px]">Support</h4>
              <ul className="space-y-4 text-[14px]">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/expert" className="text-gray-400 hover:text-white transition-colors">Talk to Expert</Link></li>
                <li><Link to="/feedback" className="text-gray-400 hover:text-white transition-colors">Feedback</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-800/50 gap-6">
             <div className="text-[14px] text-gray-400 text-center lg:text-left order-3 lg:order-1">
               &copy; {new Date().getFullYear()} VisaVaani. All rights reserved.
             </div>
             
             {/* Stay Connected */}
             <div className="flex flex-col sm:flex-row items-center gap-4 order-1 lg:order-2">
                <span className="text-[14px] text-gray-300 font-medium sm:mr-2">Stay Connected</span>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"><Facebook size={16} fill="currentColor" strokeWidth={0}/></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"><Instagram size={16} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"><Youtube size={16} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"><Linkedin size={16} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity border border-gray-700"><Twitter size={16} /></a>
                </div>
             </div>

             {/* Powered By */}
             <div className="text-[14px] text-gray-400 text-center lg:text-right order-2 lg:order-3">
               Powered by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">Patterns Infotech Private Limited</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
