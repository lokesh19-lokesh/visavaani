import { motion } from 'framer-motion';
import { ArrowRight, Bot, Map as MapIcon, FileCheck, UserCheck, User, Cpu, Compass, FileText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { name: 'United States', code: 'us', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600' },
  { name: 'Canada', code: 'ca', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=600' },
  { name: 'United Kingdom', code: 'gb', image: 'https://images.unsplash.com/photo-1513635269975-5969336cb1f3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Australia', code: 'au', image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80&w=600' },
  { name: 'Germany', code: 'de', image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Singapore', code: 'sg', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600' },
];

const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden pt-6 pb-16 lg:pt-4 lg:pb-16 xl:pt-10 xl:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left z-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4 lg:mb-3 xl:mb-6 text-sm font-medium text-white">
              Trusted by Millions of Indians
            </div>

            <h1 className="text-5xl lg:text-[44px] xl:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-4 lg:mb-4 xl:mb-6">
              Immigration Clarity. <br />
              <span className="text-secondary block mt-2">For Every Indian.</span>
            </h1>

            <p className="text-lg lg:text-[18px] xl:text-xl text-gray-300 mb-6 lg:mb-5 xl:mb-8 max-w-xl mx-auto lg:mx-0">
              AI-powered guidance on visas, PR, work permits<br className="hidden md:block" /> and study opportunities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:scale-95 xl:scale-100 origin-left">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-secondary-hover text-white rounded-lg text-[16px] font-semibold transition-colors flex items-center justify-center">
                Check Eligibility <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white rounded-lg text-[16px] font-semibold transition-colors">
                Explore Countries
              </button>
            </div>
          </div>

          {/* Right Content - Map Illustration */}
          <div className="hidden lg:flex w-1/2 items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[650px] aspect-[1.6] xl:aspect-[1.3]">
              {/* Perfect Dotted World Map Background */}
              <div
                className="absolute inset-0 z-0 opacity-30 bg-white"
                style={{
                  WebkitMaskImage: "url('/world.svg')",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  maskImage: "url('/world.svg')",
                  maskSize: "100% 100%",
                  maskPosition: "center",
                  maskRepeat: "no-repeat"
                }}
              ></div>

              <div className="absolute inset-0 z-10 w-full h-full">
              {/* Nodes using precise geographic coordinates on the dotted map */}
              {/* India */}
              <div className="absolute top-[55%] left-[69%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-12 h-12 sm:w-[48px] sm:h-[48px] rounded-full border-[3px] border-white overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-white mb-1.5">
                  <img src="https://flagcdn.com/w160/in.png" alt="India" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-bold text-sm sm:text-base">India</span>
              </div>

              {/* Canada */}
              <div className="absolute top-[28%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white overflow-hidden mb-1 bg-white shadow-md">
                  <img src="https://flagcdn.com/w80/ca.png" alt="Canada" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[11px] font-medium tracking-wide">Canada</span>
              </div>

              {/* USA */}
              <div className="absolute top-[45%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white overflow-hidden mb-1 bg-white shadow-md">
                  <img src="https://flagcdn.com/w80/us.png" alt="USA" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[11px] font-medium tracking-wide">USA</span>
              </div>

              {/* UK */}
              <div className="absolute top-[28%] left-[47%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white overflow-hidden mb-1 bg-white shadow-md">
                  <img src="https://flagcdn.com/w80/gb.png" alt="UK" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[11px] font-medium tracking-wide">UK</span>
              </div>

              {/* Germany */}
              <div className="absolute top-[35%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white overflow-hidden mb-1 bg-white shadow-md">
                  <img src="https://flagcdn.com/w80/de.png" alt="Germany" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[11px] font-medium tracking-wide">Germany</span>
              </div>

              {/* Australia */}
              <div className="absolute top-[78%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white overflow-hidden mb-1 bg-white shadow-md">
                  <img src="https://flagcdn.com/w80/au.png" alt="Australia" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[11px] font-medium tracking-wide">Australia</span>
              </div>

              {/* Connecting Dashed Curves with Arrows and Animated Planes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,255,255,0.4))' }}
              >
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#ffffff" />
                  </marker>
                </defs>

                {/* India (69,55) to Canada (25,28) */}
                <path d="M 69 55 L 26 28.5" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1.5 2" markerEnd="url(#arrowhead)" opacity="0.8" />
                <g opacity="0">
                  <path d="M 1.5,0 L 0.5,-0.25 L 0,-1.25 L -0.25,-1.25 L 0,-0.25 L -0.75,-0.25 L -1.25,-0.75 L -1.5,-0.75 L -1,-0.25 L -1,0.25 L -1.5,0.75 L -1.25,0.75 L -0.75,0.25 L 0,0.25 L -0.25,1.25 L 0,1.25 L 0.5,0.25 Z" fill="#F97316" />
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 69 55 L 26 28.5" rotate="auto" begin="0s" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" begin="0s" />
                </g>

                {/* India (69,55) to USA (21,45) */}
                <path d="M 69 55 L 22 45.1" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1.5 2" markerEnd="url(#arrowhead)" opacity="0.8" />
                <g opacity="0">
                  <path d="M 1.5,0 L 0.5,-0.25 L 0,-1.25 L -0.25,-1.25 L 0,-0.25 L -0.75,-0.25 L -1.25,-0.75 L -1.5,-0.75 L -1,-0.25 L -1,0.25 L -1.5,0.75 L -1.25,0.75 L -0.75,0.25 L 0,0.25 L -0.25,1.25 L 0,1.25 L 0.5,0.25 Z" fill="#F97316" />
                  <animateMotion dur="4.5s" repeatCount="indefinite" path="M 69 55 L 22 45.1" rotate="auto" begin="1.2s" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4.5s" repeatCount="indefinite" begin="1.2s" />
                </g>

                {/* India (69,55) to UK (47,28) */}
                <path d="M 69 55 L 48 29" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1.5 2" markerEnd="url(#arrowhead)" opacity="0.8" />
                <g opacity="0">
                  <path d="M 1.5,0 L 0.5,-0.25 L 0,-1.25 L -0.25,-1.25 L 0,-0.25 L -0.75,-0.25 L -1.25,-0.75 L -1.5,-0.75 L -1,-0.25 L -1,0.25 L -1.5,0.75 L -1.25,0.75 L -0.75,0.25 L 0,0.25 L -0.25,1.25 L 0,1.25 L 0.5,0.25 Z" fill="#F97316" />
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 69 55 L 48 29" rotate="auto" begin="0.5s" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </g>

                {/* India (69,55) to Germany (52,35) */}
                <path d="M 69 55 L 53 36" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1.5 2" markerEnd="url(#arrowhead)" opacity="0.8" />
                <g opacity="0">
                  <path d="M 1.5,0 L 0.5,-0.25 L 0,-1.25 L -0.25,-1.25 L 0,-0.25 L -0.75,-0.25 L -1.25,-0.75 L -1.5,-0.75 L -1,-0.25 L -1,0.25 L -1.5,0.75 L -1.25,0.75 L -0.75,0.25 L 0,0.25 L -0.25,1.25 L 0,1.25 L 0.5,0.25 Z" fill="#F97316" />
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 69 55 L 53 36" rotate="auto" begin="2s" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" begin="2s" />
                </g>

                {/* India (69,55) to Australia (85,78) */}
                <path d="M 69 55 L 84 77" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="1.5 2" markerEnd="url(#arrowhead)" opacity="0.8" />
                <g opacity="0">
                  <path d="M 1.5,0 L 0.5,-0.25 L 0,-1.25 L -0.25,-1.25 L 0,-0.25 L -0.75,-0.25 L -1.25,-0.75 L -1.5,-0.75 L -1,-0.25 L -1,0.25 L -1.5,0.75 L -1.25,0.75 L -0.75,0.25 L 0,0.25 L -0.25,1.25 L 0,1.25 L 0.5,0.25 Z" fill="#F97316" />
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 69 55 L 84 77" rotate="auto" begin="0.8s" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.5s" repeatCount="indefinite" begin="0.8s" />
                </g>
              </svg>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Floating Features Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 z-30 mb-20">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-8 px-6 border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex items-start gap-4 flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Bot className="w-7 h-7 text-[#0B2D6B]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] mb-1">AI Immigration Advisor</h3>
              <p className="text-gray-500 text-[14px]">Instant answers to your<br />immigration questions</p>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
              <MapIcon className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] mb-1">Visa Roadmap</h3>
              <p className="text-gray-500 text-[14px]">Personalized roadmap<br />for your goals</p>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-1 w-full border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0">
            <div className="w-14 h-14 rounded-full bg-orange-50/50 flex items-center justify-center shrink-0">
              <div className="relative">
                <FileCheck className="w-7 h-7 text-orange-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] mb-1">Document Check</h3>
              <p className="text-gray-500 text-[14px]">AI-powered document<br />review and verification</p>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-1 w-full">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center shrink-0 overflow-hidden">
              <UserCheck className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] mb-1">Expert Consultation</h3>
              <p className="text-gray-500 text-[14px]">Connect with verified<br />immigration experts</p>
            </div>
          </div>

        </div>
      </div>

      {/* Popular Destinations */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-[28px] font-bold text-primary">Popular Destinations</h2>
            <Link to="/countries" className="text-blue-600 font-medium hover:text-blue-800 flex items-center text-[15px]">
              View all countries <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {destinations.map((dest, idx) => (
              <Link to={`/countries/${dest.code}`} key={idx} className="block group">
                <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden hover:shadow-[0_8px_25px_rgb(0,0,0,0.1)] transition-shadow">
                  {/* Image Header */}
                  <div className="h-[120px] relative">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 left-3 w-8 h-6 rounded shadow-sm overflow-hidden border border-white/20">
                      <img src={`https://flagcdn.com/w40/${dest.code}.png`} alt={`${dest.name} Flag`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-[16px] mb-1 truncate">{dest.name}</h3>
                    <p className="text-gray-500 text-[12px] mb-3">Work · Study · PR</p>
                    <span className="text-blue-600 font-medium text-[14px] flex items-center group-hover:text-blue-800 transition-colors">
                      Explore <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How VisaVaani Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Steps Left */}
            <div className="lg:w-2/3">
              <h2 className="text-[28px] font-bold text-primary mb-12">How VisaVaani Works</h2>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative">
                {/* Connecting Line */}
                <div className="hidden sm:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-blue-500">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[16px] mb-2">1. Tell Us About You</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">Answer a few simple<br />questions</p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-blue-500">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[16px] mb-2">2. Get AI Analysis</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">Our AI analyzes your profile<br />and options</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-blue-500">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[16px] mb-2">3. Explore Pathways</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">Compare countries and<br />visa options</p>
                </div>

                {/* Step 4 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-blue-500">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[16px] mb-2">4. Take Next Step</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">Get your roadmap and<br />achieve your goal</p>
                </div>
              </div>
            </div>

            {/* Social Proof Right */}
            <div className="lg:w-1/3">
              <div className="bg-primary rounded-3xl p-8 text-white h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100" fill="white" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">Join 1M+ Indians</h3>
                <p className="text-gray-300 text-[15px] mb-8 relative z-10">
                  Who made informed<br />immigration decisions
                </p>

                <div className="flex items-center space-x-[-12px] mb-6 relative z-10">
                  {[
                    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="User Avatar" />
                  ))}
                </div>

                <div className="flex items-center gap-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                    </div>
                    <div className="w-8 h-8 bg-[#00B67A] rounded flex items-center justify-center text-white font-bold text-xs p-1">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    </div>
                  </div>

                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <div className="text-white text-sm font-bold">4.8/5</div>
                    <div className="text-gray-400 text-xs">from 20K+ reviews</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
