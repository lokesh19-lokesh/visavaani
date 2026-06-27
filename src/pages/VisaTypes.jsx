import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Plane, UserCheck, Heart, Home, ArrowRight, Laptop, Clock, Compass, Stethoscope, Landmark, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const categories = [
  { icon: Briefcase, title: 'Work Visas', desc: 'Pathways for skilled professionals, intra-company transfers, and temporary workers.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: GraduationCap, title: 'Student Visas', desc: 'Opportunities for higher education, vocational training, and post-study work permits.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Plane, title: 'Tourist/Visitor Visas', desc: 'Short-term visas for tourism, business visits, and visiting family or friends.', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: Heart, title: 'Family/Dependent', desc: 'Reunite with family members who are permanent residents or citizens.', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: Home, title: 'Permanent Residency', desc: 'Long-term settlement options, points-based systems, and direct PR pathways.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: UserCheck, title: 'Investor/Startup', desc: 'Visas for entrepreneurs, investors, and business owners looking to expand globally.', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: Laptop, title: 'Digital Nomad Visas', desc: 'For remote workers and freelancers looking to live abroad while keeping their current job.', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Compass, title: 'Working Holiday', desc: 'Allows young adults to undertake extended holidays and work to fund their travels.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Clock, title: 'Transit Visas', desc: 'Short-duration visas required for passing through a country en route to a final destination.', color: 'text-gray-600', bg: 'bg-gray-50' },
  { icon: Stethoscope, title: 'Medical Visas', desc: 'For patients needing to travel internationally to receive specialized medical treatment.', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Landmark, title: 'Diplomatic Visas', desc: 'Issued to foreign government officials, diplomats, and representatives of international organizations.', color: 'text-slate-600', bg: 'bg-slate-50' },
  { icon: Shield, title: 'Refugee/Asylum', desc: 'Protection visas for individuals fleeing persecution or danger in their home countries.', color: 'text-amber-600', bg: 'bg-amber-50' }
];

const VisaTypes = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Global Visa Categories & Types",
    "description": "Explore different visa types including Skilled Worker, Student, Family, and Business visas for top immigration destinations.",
    "itemListElement": categories.map((cat, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": cat.title,
        "description": cat.desc,
        "url": `https://visavaani.com/visas/${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      }
    }))
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-20 font-sans">
      <SEO 
        title="Visa Categories & Types"
        description="Explore different visa types including Skilled Worker, Student, Family, and Business visas for top immigration destinations."
        url="/visas"
        schema={schema}
      />
      {/* Header */}
      <div className="bg-primary pt-16 pb-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Visa Types & Pathways</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Navigate the complexities of global immigration with our comprehensive guide to all major visa categories.</p>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              key={cat.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{cat.title}</h2>
              <p className="text-gray-600 mb-6 line-clamp-3">{cat.desc}</p>
              <Link to={`/visas/${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="inline-flex items-center font-semibold text-primary group-hover:text-secondary transition-colors">
                Explore Requirements <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VisaTypes;
