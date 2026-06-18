import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countriesData as countries } from '../data/countriesData';

const Countries = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary pt-16 pb-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Immigration Destinations</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Discover top countries, compare visa pathways, and find your ideal destination for work, study, or settlement.</p>
        
        {/* Search */}
        <div className="max-w-3xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for a country or visa type..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={country.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="h-48 relative">
                <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-10 h-7 rounded shadow-sm overflow-hidden border border-white/20">
                  <img src={`https://flagcdn.com/w40/${country.id}.png`} alt={`${country.name} Flag`} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" /> {country.region}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{country.name}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {country.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex space-x-3 text-gray-400">
                    <Briefcase className="w-5 h-5 hover:text-gray-600" title="Work Opportunities" />
                    <GraduationCap className="w-5 h-5 hover:text-gray-600" title="Study Opportunities" />
                  </div>
                  <Link to={`/countries/${country.id}`} className="text-primary font-medium flex items-center hover:text-secondary transition-colors">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
