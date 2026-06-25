import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Facebook, Instagram, YouTube as Youtube, LinkedIn as Linkedin, X as XIcon } from '@mui/icons-material';
import { Menu, X, Bot } from 'lucide-react';
import PremiumAIModal from '../components/PremiumAIModal';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [aiContext, setAiContext] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOpenAiModal = (e) => {
      if (e.detail && e.detail.context) {
        setAiContext(e.detail.context);
      } else {
        setAiContext("");
      }
      setIsAIModalOpen(true);
    };
    window.addEventListener('open-ai-modal', handleOpenAiModal);
    return () => window.removeEventListener('open-ai-modal', handleOpenAiModal);
  }, []);

  useEffect(() => {
    // Add the callback function to the window object
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: 'en', 
          includedLanguages: 'en,hi,bn,te,mr,ta,ur,gu,kn,ml,pa'
        },
        'google_translate_element'
      );
    };

    // Create the script tag if it doesn't already exist
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Aggressively hide the Google Translate banner using a MutationObserver
  useEffect(() => {
    const hideTranslateElements = () => {
      const banners = document.querySelectorAll('.goog-te-banner-frame');
      banners.forEach(banner => {
        if (banner.style.display !== 'none') {
          banner.style.setProperty('display', 'none', 'important');
        }
      });
      
      if (document.body.style.top !== '0px' && document.body.style.top !== '') {
        document.body.style.setProperty('top', '0px', 'important');
      }
      
      if (document.documentElement.style.top !== '0px' && document.documentElement.style.top !== '') {
        document.documentElement.style.setProperty('top', '0px', 'important');
      }
    };

    hideTranslateElements(); // initial check

    const observer = new MutationObserver(() => {
      hideTranslateElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Also run on interval for the first few seconds just to be safe
    const interval = setInterval(hideTranslateElements, 100);
    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-primary text-white border-b border-gray-800/50 sticky top-0 z-50">
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
              <Link to="/compare" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">Compare</Link>
              <Link to="/advisor" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">AI Advisor</Link>
              <Link to="/resources" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-300 font-medium text-sm hover:text-white transition-colors">About Us</Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div id="google_translate_element" className="translate-wrapper"></div>

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
              <Link to="/compare" onClick={toggleMobileMenu} className="text-gray-300 font-medium text-base hover:text-white transition-colors block py-2 border-b border-gray-800/50">Compare</Link>
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
                <li><Link to="/compare" className="text-gray-400 hover:text-white transition-colors">Compare Options</Link></li>
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
                <div className="flex space-x-3">
                  {[
                    { Icon: Facebook, href: '#', label: 'Facebook' },
                    { Icon: Instagram, href: '#', label: 'Instagram' },
                    { Icon: Youtube, href: '#', label: 'YouTube' },
                    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { Icon: XIcon, href: '#', label: 'X' },
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                    >
                      <social.Icon size={16} strokeWidth={2} />
                    </a>
                  ))}
                </div>
             </div>

             {/* Powered By */}
             <div className="text-[14px] text-gray-400 text-center lg:text-right order-2 lg:order-3">
               Powered by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">Patterns Infotech Private Limited</a>
             </div>
          </div>
        </div>
      </footer>
      
      {/* Global AI Expert Floating Button */}
      <button
        onClick={() => setIsAIModalOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-secondary text-primary p-4 rounded-full shadow-2xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
      >
        <Bot className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold text-[15px]">
          Talk to AI Expert
        </span>
      </button>

      {/* Global AI Modal */}
      <PremiumAIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} context={aiContext} />
    </div>
  );
};

export default MainLayout;
