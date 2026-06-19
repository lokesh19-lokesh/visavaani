import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, Award, GraduationCap, Briefcase, Languages, Globe2, Calculator, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  { id: 'destination', title: 'Destination', icon: Globe2 },
  { id: 'age', title: 'Age Profile', icon: User }, // Need to import User, or just use UserCircle or another imported one. Let's use Award instead for now, or just add it to imports.
  { id: 'education', title: 'Education', icon: GraduationCap },
  { id: 'experience', title: 'Work Exp.', icon: Briefcase },
  { id: 'english', title: 'Language', icon: Languages },
];

import { User } from 'lucide-react';

export default function Eligibility() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const handleSelect = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      calculateScore();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const calculateScore = () => {
    setIsCalculating(true);
    // Simulate API delay
    setTimeout(() => {
      setIsCalculating(false);
      // Mock calculation logic
      let score = 10; // Base score
      
      // Age points (younger gets more)
      if (answers.age === '18-24') score += 20;
      else if (answers.age === '25-32') score += 25;
      else if (answers.age === '33-39') score += 15;
      else score += 5;

      // Education points
      if (answers.education === 'Masters/PhD') score += 25;
      else if (answers.education === 'Bachelors') score += 20;
      else score += 10;

      // Experience points
      if (answers.experience === '5+ Years') score += 20;
      else if (answers.experience === '3-5 Years') score += 15;
      else if (answers.experience === '1-3 Years') score += 10;

      // English points
      if (answers.english === 'Excellent (IELTS 8+)') score += 20;
      else if (answers.english === 'Good (IELTS 7)') score += 15;
      else score += 5;

      setResult({
        score,
        maxScore: 100,
        probability: score >= 80 ? 'High' : score >= 60 ? 'Medium' : 'Low',
        destination: answers.destination
      });
    }, 2500);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Canada', 'Australia', 'United Kingdom', 'Germany', 'USA'].map(country => (
              <button
                key={country}
                onClick={() => handleSelect('destination', country)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  answers.destination === country 
                    ? 'border-secondary bg-orange-50/50' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-gray-900">{country}</span>
                  {answers.destination === country && <CheckCircle2 className="text-secondary w-6 h-6" />}
                </div>
              </button>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['18-24', '25-32', '33-39', '40+'].map(age => (
              <button
                key={age}
                onClick={() => handleSelect('age', age)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  answers.age === age 
                    ? 'border-secondary bg-orange-50/50' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-lg text-gray-900">{age} Years Old</span>
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['High School', 'Diploma', 'Bachelors', 'Masters/PhD'].map(edu => (
              <button
                key={edu}
                onClick={() => handleSelect('education', edu)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  answers.education === edu 
                    ? 'border-secondary bg-orange-50/50' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-lg text-gray-900">{edu}</span>
              </button>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['None', '1-3 Years', '3-5 Years', '5+ Years'].map(exp => (
              <button
                key={exp}
                onClick={() => handleSelect('experience', exp)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  answers.experience === exp 
                    ? 'border-secondary bg-orange-50/50' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-lg text-gray-900">{exp}</span>
              </button>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Excellent (IELTS 8+)', desc: 'Fluent in reading, writing, and speaking.' },
              { label: 'Good (IELTS 7)', desc: 'Comfortable with everyday professional communication.' },
              { label: 'Basic (IELTS 5-6)', desc: 'Can understand and speak basic phrases.' }
            ].map(eng => (
              <button
                key={eng.label}
                onClick={() => handleSelect('english', eng.label)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  answers.english === eng.label 
                    ? 'border-secondary bg-orange-50/50' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-semibold text-lg text-gray-900 block mb-1">{eng.label}</span>
                <span className="text-gray-500 text-sm">{eng.desc}</span>
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const isCurrentStepValid = () => {
    const key = STEPS[currentStep].id;
    return answers[key] !== undefined;
  };

  if (isCalculating) {
    return (
      <div className="min-h-[calc(100vh-72px)] bg-[#F8FAFC] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-12 text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Calculator className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing your profile...</h2>
          <p className="text-gray-500">Cross-referencing your data with immigration algorithms.</p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-[calc(100vh-72px)] bg-[#F8FAFC] flex flex-col items-center py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-primary p-10 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Award className="w-48 h-48 text-white" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Your Assessment Results</h2>
             <p className="text-blue-100 text-lg relative z-10">Estimated Eligibility for {result.destination}</p>
          </div>

          <div className="p-10 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-gray-50 bg-white shadow-inner mb-6">
              <span className="text-5xl font-extrabold text-primary">{result.score}</span>
              <span className="text-xl text-gray-400 mt-3 ml-1">/ {result.maxScore}</span>
            </div>

            <div className="mb-8">
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Success Probability</div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full font-bold text-lg ${
                result.probability === 'High' ? 'bg-green-100 text-green-700' :
                result.probability === 'Medium' ? 'bg-orange-100 text-orange-700' :
                'bg-red-100 text-red-700'
              }`}>
                {result.probability} Probability
              </div>
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
              Based on the information provided, you have a {result.probability.toLowerCase()} chance of securing a visa for {result.destination}. To improve your points or get a precise legal assessment, consult with our AI or an expert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/advisor" className="flex items-center justify-center px-6 py-3.5 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-semibold transition-colors">
                <Sparkles className="w-5 h-5 mr-2" /> Discuss with AI
              </Link>
              <button 
                onClick={() => {
                  setResult(null);
                  setCurrentStep(0);
                  setAnswers({});
                }} 
                className="flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
              >
                Recalculate
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-[calc(100vh-72px)] py-8 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eligibility Checker</h1>
          <p className="text-lg text-gray-600">Answer a few simple questions to estimate your visa chances.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-4">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;
              return (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    isActive ? 'bg-primary text-white ring-4 ring-blue-50' :
                    isPast ? 'bg-green-500 text-white' :
                    'bg-white text-gray-400 border-2 border-gray-100'
                  }`}>
                    {isPast ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:block ${isActive ? 'text-primary' : isPast ? 'text-green-600' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
            {/* Connecting lines */}
            <div className="absolute top-[84px] md:top-[124px] xl:top-[132px] left-[50%] transform -translate-x-1/2 w-[calc(100%-80px)] h-1 bg-gray-200 -z-0 hidden"></div>
            {/* Note: Connecting line omitted for simplicity across screen sizes, the progress dots look great on their own */}
          </div>
          {/* Real progress bar line */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${((currentStep) / (STEPS.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Card Content */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{STEPS[currentStep].title}</h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 border-t border-gray-100 p-6 flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center px-5 py-2.5 rounded-lg font-semibold transition-colors ${
                currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200 bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className={`flex items-center px-6 py-2.5 rounded-lg font-semibold text-white transition-all ${
                !isCurrentStepValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {currentStep === STEPS.length - 1 ? 'Calculate Score' : 'Continue'} <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
