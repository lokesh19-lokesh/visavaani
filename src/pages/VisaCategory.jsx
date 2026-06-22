import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Plane, UserCheck, Heart, Home, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const visaData = {
  'work-visas': {
    title: 'Work Visas',
    icon: Briefcase,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    gradient: 'from-blue-600 to-cyan-500',
    description: 'Pathways for skilled professionals, intra-company transfers, and temporary workers. Navigate global career opportunities with our detailed requirements guide.',
    requirements: [
      'Valid passport with at least 6 months validity',
      'Job offer from a recognized employer in the destination country',
      'Proof of qualifications (degrees, certificates)',
      'Relevant work experience letters',
      'Language proficiency test results (if applicable)'
    ],
    types: ['Skilled Worker Visa', 'Intra-Company Transfer', 'Temporary Work Permit', 'Freelancer/Digital Nomad Visa']
  },
  'student-visas': {
    title: 'Student Visas',
    icon: GraduationCap,
    color: 'text-green-600',
    bg: 'bg-green-50',
    gradient: 'from-green-600 to-emerald-500',
    description: 'Opportunities for higher education, vocational training, and post-study work permits. Start your global education journey today.',
    requirements: [
      'Acceptance letter from a recognized educational institution',
      'Proof of financial support for tuition and living expenses',
      'Language proficiency test results (IELTS, TOEFL, etc.)',
      'Previous academic transcripts and certificates',
      'Statement of Purpose (SOP)'
    ],
    types: ['Undergraduate Student Visa', 'Postgraduate Student Visa', 'Short-term Study Visa', 'Exchange Student Visa']
  },
  'tourist-visitor-visas': {
    title: 'Tourist/Visitor Visas',
    icon: Plane,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    gradient: 'from-yellow-500 to-orange-400',
    description: 'Short-term visas for tourism, business visits, and visiting family or friends. Plan your next global adventure seamlessly.',
    requirements: [
      'Valid passport',
      'Travel itinerary and confirmed flight tickets',
      'Proof of accommodation (hotel bookings, invitation letter)',
      'Proof of sufficient funds for the duration of stay',
      'Ties to home country (employment letter, property ownership)'
    ],
    types: ['Tourist Visa', 'Business Visitor Visa', 'Family Visit Visa', 'Medical Treatment Visa']
  },
  'family-dependent': {
    title: 'Family/Dependent',
    icon: Heart,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    gradient: 'from-pink-500 to-rose-400',
    description: 'Reunite with family members who are permanent residents or citizens. Bring your loved ones closer across borders.',
    requirements: [
      'Proof of relationship (marriage certificate, birth certificate)',
      'Sponsor\'s proof of citizenship or permanent residency',
      'Sponsor\'s proof of income/financial stability',
      'Medical and police clearance certificates',
      'Proof of genuine relationship (for spouses/partners)'
    ],
    types: ['Spouse/Partner Visa', 'Child Dependent Visa', 'Parent Visa', 'Fiancé(e) Visa']
  },
  'permanent-residency': {
    title: 'Permanent Residency',
    icon: Home,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    gradient: 'from-purple-600 to-indigo-500',
    description: 'Long-term settlement options, points-based systems, and direct PR pathways. Make your dream destination your permanent home.',
    requirements: [
      'Points-based system assessment (age, education, experience)',
      'High level of language proficiency',
      'Extensive work experience in in-demand occupations',
      'Clean criminal record and good health',
      'Proof of settlement funds'
    ],
    types: ['Skilled Migration PR', 'Employer-Sponsored PR', 'Family-Sponsored PR', 'Investment-based PR']
  },
  'investor-startup': {
    title: 'Investor/Startup',
    icon: UserCheck,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    gradient: 'from-orange-500 to-amber-500',
    description: 'Visas for entrepreneurs, investors, and business owners looking to expand globally. Scale your business on an international stage.',
    requirements: [
      'Proof of investment funds (varies by country)',
      'Comprehensive business plan',
      'Endorsement from a recognized body (for startup visas)',
      'Source of funds declaration',
      'Intention and ability to create local jobs'
    ],
    types: ['Golden Visa', 'Startup Visa', 'Entrepreneur Visa', 'Innovator Visa']
  },
  'digital-nomad-visas': {
    title: 'Digital Nomad Visas',
    icon: Briefcase,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    gradient: 'from-teal-500 to-emerald-400',
    description: 'For remote workers and freelancers looking to live abroad while keeping their current job.',
    requirements: [
      'Proof of remote employment or freelance contracts outside destination country',
      'Minimum monthly income threshold',
      'Comprehensive health insurance coverage',
      'Clean criminal record',
      'Accommodation arrangements'
    ],
    types: ['Remote Worker Visa', 'Freelance Visa', 'Digital Nomad Residence Permit']
  },
  'working-holiday': {
    title: 'Working Holiday',
    icon: Compass,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    gradient: 'from-indigo-500 to-blue-500',
    description: 'Allows young adults to undertake extended holidays and work to fund their travels.',
    requirements: [
      'Age limit (typically 18-30 or 18-35)',
      'Citizenship from an eligible participating country',
      'Sufficient funds to support initial stay and return flight',
      'Health and character requirements',
      'Cannot be accompanied by dependent children'
    ],
    types: ['Working Holiday Visa', 'Youth Mobility Scheme', 'Work and Holiday Visa']
  },
  'transit-visas': {
    title: 'Transit Visas',
    icon: Plane,
    color: 'text-gray-600',
    bg: 'bg-gray-50',
    gradient: 'from-gray-500 to-slate-400',
    description: 'Short-duration visas required for passing through a country en route to a final destination.',
    requirements: [
      'Confirmed onward flight ticket',
      'Valid visa for final destination',
      'Must stay within the designated transit area (for some)',
      'Valid passport',
      'Short duration stay (usually 24 to 72 hours)'
    ],
    types: ['Airport Transit Visa', 'Direct Airside Transit Visa', 'Stopover Visa']
  },
  'medical-visas': {
    title: 'Medical Visas',
    icon: Heart,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    gradient: 'from-rose-500 to-pink-500',
    description: 'For patients needing to travel internationally to receive specialized medical treatment.',
    requirements: [
      'Letter from a recognized hospital or doctor in the destination country',
      'Proof of medical condition requiring treatment abroad',
      'Proof of sufficient funds to cover medical and living expenses',
      'Pre-paid medical fees receipt',
      'Accompanying attendant documentation (if applicable)'
    ],
    types: ['Medical Treatment Visa', 'Medical Attendant Visa']
  },
  'diplomatic-visas': {
    title: 'Diplomatic Visas',
    icon: UserCheck,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    gradient: 'from-slate-600 to-gray-500',
    description: 'Issued to foreign government officials, diplomats, and representatives of international organizations.',
    requirements: [
      'Diplomatic or Official Passport',
      'Note Verbale or official letter from government/organization',
      'Traveling for official duties or representing a government',
      'Recognized by the host country\'s Ministry of Foreign Affairs'
    ],
    types: ['A-1 / A-2 Visa (US)', 'Diplomatic Visa', 'Official Visa', 'UN/International Organization Visa']
  },
  'refugee-asylum': {
    title: 'Refugee/Asylum',
    icon: Home,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    gradient: 'from-amber-500 to-yellow-500',
    description: 'Protection visas for individuals fleeing persecution or danger in their home countries.',
    requirements: [
      'Well-founded fear of persecution based on race, religion, nationality, social group, or political opinion',
      'Cannot or will not return to home country due to this fear',
      'Physical presence in the destination country or port of entry (for asylum)',
      'Registered with UNHCR (often required for refugee resettlement)'
    ],
    types: ['Asylum Seeker Visa', 'Refugee Resettlement Visa', 'Humanitarian Protection Visa', 'Temporary Protected Status']
  }
};

const VisaCategory = () => {
  const { id } = useParams();
  const data = visaData[id];

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Category Not Found</h2>
        <Link to="/visas" className="text-primary hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Visa Types
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header Banner */}
      <div className={`bg-gradient-to-r ${data.gradient} pt-16 pb-24 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Icon className="w-96 h-96" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/visas" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all visas
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Requirements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Requirements</h2>
            <div className="space-y-4">
              {data.requirements.map((req, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                  <CheckCircle2 className={`w-6 h-6 ${data.color} flex-shrink-0 mr-4 mt-0.5`} />
                  <p className="text-gray-700 text-[15px] font-medium leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Need Help Assessing Your Profile?</h3>
              <p className="text-blue-800/80 mb-4 text-sm leading-relaxed">Our AI Advisor can analyze your specific situation and tell you exactly which visa you qualify for.</p>
              <Link to="/advisor">
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors">
                  Consult AI Advisor
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Common Sub-types */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Common Pathways</h3>
              <ul className="space-y-3">
                {data.types.map((type, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer">
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-[15px] font-medium">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-900 rounded-3xl shadow-sm border border-gray-800 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Talk to an Expert</h3>
                <p className="text-gray-400 text-sm mb-6">Get personalized guidance for your specific case.</p>
                <Link to="/expert">
                  <button className="w-full bg-white text-gray-900 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default VisaCategory;
