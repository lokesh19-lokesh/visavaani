import React, { useState } from 'react';
import { MessageSquare, Star, Send } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-primary pt-24 pb-32 text-white text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Provide Feedback</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are constantly improving VisaVaani. Your input helps us build better tools for global citizens.
            </p>
         </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">How would you rate your experience?</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star} 
                      type="button" 
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star className={`w-10 h-10 ${rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select id="category" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50">
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Content Suggestion</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-bold text-gray-700 mb-2">Your Feedback</label>
                <textarea 
                  id="comments" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 resize-none"
                  placeholder="Tell us what you love or what we could do better..."
                ></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" /> Submit Feedback
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
