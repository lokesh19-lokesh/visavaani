import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAdvisor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! I am your AI Immigration Advisor. How can I help you today? You can ask me about visa options, PR points, or which country is best for your profile.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm currently running in demo mode. In the full version, I will analyze your query using advanced AI to provide precise immigration advice, tailored to Indian applicants. Let's get your profile analyzed soon!" 
      }]);
    }, 1000);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-[calc(100vh-72px)] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[800px] border border-gray-100">
        
        {/* Header */}
        <div className="bg-primary p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <Bot className="text-white w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center">VisaVaani AI <Sparkles className="w-4 h-4 ml-2 text-secondary" /></h2>
              <p className="text-sm text-gray-300">Always online &bull; Ready to guide</p>
            </div>
          </div>
          <button className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/10">
            Clear Chat
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-gray-50/50">
          {messages.map((msg, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-secondary ml-3' : 'bg-primary mr-3'}`}>
                  {msg.role === 'user' ? <User className="text-white w-5 h-5" /> : <Bot className="text-white w-5 h-5" />}
                </div>
                <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-secondary text-white rounded-tr-sm' : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-sm'}`}>
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
           {/* Suggested Prompts */}
           <div className="flex flex-wrap gap-2 mb-4">
             {['What is the CRS score for Canada?', 'How to get a UK student visa?', 'Best PR options for IT professionals'].map(prompt => (
               <button 
                 key={prompt}
                 onClick={() => setInput(prompt)}
                 className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
               >
                 {prompt}
               </button>
             ))}
           </div>
           
           <form onSubmit={handleSend} className="relative">
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Ask anything about immigration..."
               className="w-full pl-6 pr-16 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800"
             />
             <button 
               type="submit"
               disabled={!input.trim()}
               className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-primary hover:bg-primary-hover disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center transition-colors"
             >
               <Send className="w-5 h-5 ml-1" />
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
