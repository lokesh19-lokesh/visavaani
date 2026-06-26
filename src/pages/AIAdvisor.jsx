import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import SEO from '../components/SEO';
import { canUseAi, incrementAiUsage, checkIsAdmin } from '../utils/paymentManager';
import PaymentModal from '../components/PaymentModal';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
  model: "gemini-3.1-flash-lite",
  systemInstruction: "You are VisaVaani AI, an expert, highly knowledgeable, and empathetic immigration advisor specifically helping Indian citizens. Your goal is to guide them on global visas, permanent residency, study permits, and immigration pathways to countries like USA, Canada, UK, Australia, Germany, and Singapore. Always maintain a highly professional, encouraging, and clear tone. Structure your advice using bullet points where helpful. CRITICAL INSTRUCTION: You MUST ONLY answer questions related to immigration, visas, travel, studying abroad, or working abroad. If the user asks a question about ANY OTHER TOPIC (e.g. coding, math, general trivia, 'who is html', politics, etc.), you must politely decline to answer and remind them that you are strictly an immigration advisor.",
});

const AIAdvisor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! I am your AI Immigration Advisor. How can I help you today? You can ask me about visa options, CRS points, or which country is best for your profile.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const messagesEndRef = useRef(null);

  // Initialize chat session once
  useEffect(() => {
    const startChat = async () => {
      try {
        const chat = model.startChat({
          history: [],
          generationConfig: {
            temperature: 0.7,
          },
        });
        setChatSession(chat);
      } catch (e) {
        console.error("Failed to initialize chat session", e);
      }
    };
    startChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || !chatSession || isLoading) return;

    const isAdmin = await checkIsAdmin();
    if (!isAdmin && !canUseAi()) {
      setShowPaymentModal(true);
      return;
    }

    const userMessage = input;

    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Send message to Gemini
      const result = await chatSession.sendMessage(userMessage);
      const responseText = result.response.text();

      // Add AI response to UI
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
      
      incrementAiUsage();
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting to my knowledge base right now. try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    // Reset messages and chat session
    setMessages([
      { role: 'assistant', content: 'Namaste! I am your AI Immigration Advisor. How can I help you today? You can ask me about visa options, CRS points, or which country is best for your profile.' }
    ]);
    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
      },
    });
    setChatSession(chat);
  };

  // Helper to format text with simple bold/italic from markdown
  const formatText = (text) => {
    // A very simple markdown parser for bold (**) and newlines
    return text.split('\n').map((line, i) => {
      if (line.trim() === '') return <br key={i} />;

      // Handle bold tags
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="mb-2">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-gray-900">{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-[calc(100vh-72px)] flex flex-col items-center justify-center md:p-4 md:py-8">
      <SEO 
        title="AI Immigration Advisor"
        description="Get instant answers to your visa and immigration questions using VisaVaani's advanced AI Advisor."
        url="/advisor"
      />
      <PaymentModal 
        isOpen={showPaymentModal} 
        onClose={() => setShowPaymentModal(false)} 
        onSuccess={() => setShowPaymentModal(false)}
      />
      <div className="w-full max-w-4xl bg-white md:rounded-3xl shadow-xl overflow-hidden flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-140px)] md:max-h-[800px] border border-gray-100">

        {/* Header */}
        <div className="bg-primary p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <Bot className="text-white w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center">VisaVaani AI <Sparkles className="w-3 h-3 md:w-4 md:h-4 ml-2 text-secondary" /></h2>
              {/* Removed Powered by Gemini text per user request */}
            </div>
          </div>
          <button onClick={handleClearChat} className="text-xs md:text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors border border-white/10">
            Clear
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
                  <div className="leading-relaxed text-[15px]">
                    {msg.role === 'user' ? msg.content : formatText(msg.content)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex max-w-[80%] flex-row">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-primary mr-3">
                  <Bot className="text-white w-5 h-5" />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
          {/* Suggested Prompts */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['What is the CRS score for Canada?', 'How to get a UK student visa?', 'Best PR options for IT professionals'].map(prompt => (
              <button
                key={prompt}
                onClick={() => {
                  setInput(prompt);
                }}
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
              disabled={isLoading}
              className="w-full pl-6 pr-16 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-primary hover:bg-primary-hover disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center transition-colors disabled:cursor-not-allowed"
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
