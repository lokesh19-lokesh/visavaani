import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-[calc(100vh-72px)] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Construction className="w-12 h-12 text-primary" />
        </motion.div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          We're currently crafting a world-class experience for this page. 
          Check back soon for the best immigration resources tailored for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          <Link 
            to="/advisor" 
            className="flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e67e22] hover:-translate-y-1 transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <span>Ask AI Advisor</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
