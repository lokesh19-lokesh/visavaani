import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Sparkles, Globe2, Mic, MicOff, Volume2, ChevronDown, PhoneOff } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const LANGUAGES = [
  { code: 'en-US', name: 'English' },
  { code: 'hi-IN', name: 'Hindi (हिंदी)' },
  { code: 'bn-IN', name: 'Bengali (বাংলা)' },
  { code: 'te-IN', name: 'Telugu (తెలుగు)' },
  { code: 'mr-IN', name: 'Marathi (मराठी)' },
  { code: 'ta-IN', name: 'Tamil (தமிழ்)' },
  { code: 'ur-IN', name: 'Urdu (اردو)' },
  { code: 'gu-IN', name: 'Gujarati (ગુજરાતી)' },
  { code: 'kn-IN', name: 'Kannada (ಕನ್ನಡ)' },
  { code: 'ml-IN', name: 'Malayalam (മലയാളം)' },
  { code: 'pa-IN', name: 'Punjabi (ਪੰਜਾਬੀ)' }
];

const GREETINGS = {
  'en-US': 'Hello! I am your AI Immigration Expert. Tap the mic to speak to me.',
  'hi-IN': 'नमस्ते! मैं आपका एआई इमिग्रेशन विशेषज्ञ हूं। बात करने के लिए माइक पर टैप करें।',
  'bn-IN': 'নমস্কার! আমি আপনার এআই ইমিগ্রেশন विशेषज्ञ। কথা বলতে মাইকে ট্যাপ করুন।',
  'te-IN': 'నమస్కారం! నేను మీ AI ఇమ్మిగ్రేషన్ నిపుణుడిని. మాట్లాడటానికి మైక్ నొక్కండి.',
  'mr-IN': 'नमस्कार! मी तुमचा एआय इमिग्रेशन तज्ज्ञ आहे. बोलण्यासाठी माइकवर टॅप करा.',
  'ta-IN': 'வணக்கம்! நான் உங்கள் ஏஐ இமிகிரேஷன் நிபுணர். பேச மைக்கை தட்டவும்.',
  'ur-IN': 'ہیلو! میں آپ کا اے آئی امیگریشن ماہر ہوں۔ بات کرنے کے لئے مائک پر ٹیپ کریں۔',
  'gu-IN': 'નમસ્તે! હું તમારો એઆઈ ઈમિગ્રેશન નિષ્ણાત છું. વાત કરવા માટે માઈક પર ટેપ કરો.',
  'kn-IN': 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಎಐ ಇಮಿಗ್ರೇಷನ್ ತಜ್ಞ. ಮಾತನಾಡಲು ಮೈಕ್ ಟ್ಯಾಪ್ ಮಾಡಿ.',
  'ml-IN': 'നമസ്കാരം! ഞാൻ നിങ്ങളുടെ AI ഇമിഗ്രേഷൻ വിദഗ്ദ്ധനാണ്. സംസാരിക്കാൻ മൈക്കിൽ ടാപ്പ് ചെയ്യുക.',
  'pa-IN': "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਇਮੀਗ੍ਰੇਸ਼ਨ ਮਾਹਰ ਹਾਂ। ਗੱਲ ਕਰਨ ਲਈ ਮਾਈਕ 'ਤੇ ਟੈਪ ਕਰੋ।"
};

const PremiumAIModal = ({ isOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        await handleSend(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      console.error("Speech Recognition API not supported in this browser.");
    }
    
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = selectedLanguage.code;
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (!isOpen) {
      if (synthRef.current) synthRef.current.cancel();
      return;
    }

    const startChat = async () => {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash",
          systemInstruction: `You are a highly premium, elite immigration AI expert voice assistant. You MUST communicate with the user exclusively in the following language: ${selectedLanguage.name}. Your role is to clarify any doubts regarding visas, immigration, studying, or working abroad. Maintain a highly professional, reassuring, and clear tone. Always answer strictly in ${selectedLanguage.name}. Keep your answers EXTREMELY concise, conversational, and easy to listen to. Never use long lists, bullet points, or complex formatting. Speak as if you are on a phone call.`,
        });
        
        const chat = model.startChat({
          history: [],
          generationConfig: {
            temperature: 0.7,
          },
        });
        
        setChatSession(chat);
        const initialGreeting = GREETINGS[selectedLanguage.code] || GREETINGS['en-US'];
        setCurrentSubtitle(initialGreeting);
        
      } catch (e) {
        console.error("Failed to initialize chat session", e);
      }
    };
    
    startChat();
  }, [isOpen, selectedLanguage]);

  const speakText = useCallback((text) => {
    if (!synthRef.current) return;
    
    synthRef.current.cancel();
    const cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/#/g, '');
    setCurrentSubtitle(cleanText);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = selectedLanguage.code;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
  }, [selectedLanguage]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setCurrentSubtitle('Listening cancelled.');
    } else {
      if (synthRef.current) synthRef.current.cancel();
      setIsSpeaking(false);
      
      try {
        setCurrentSubtitle('Listening to your voice...');
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Failed to start recognition", e);
      }
    }
  };

  const handleSend = async (userMessage) => {
    if (!userMessage.trim() || !chatSession) return;

    setIsLoading(true);
    setCurrentSubtitle(`You: "${userMessage}"`);

    try {
      const result = await chatSession.sendMessage(userMessage);
      const responseText = result.response.text();
      speakText(responseText);
    } catch (error) {
      console.error("Chat API Error:", error);
      const errorMsg = "I'm sorry, I'm experiencing technical difficulties. Please try again.";
      speakText(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const closeAndStop = () => {
    if (synthRef.current) synthRef.current.cancel();
    if (isListening && recognitionRef.current) recognitionRef.current.stop();
    setIsSpeaking(false);
    setIsListening(false);
    onClose();
  };

  // Determine current active color theme based on state
  const getThemeColor = () => {
    if (isSpeaking) return { hex: '#10b981', tw: 'emerald' };
    if (isListening) return { hex: '#3b82f6', tw: 'blue' };
    if (isLoading) return { hex: '#a855f7', tw: 'purple' };
    return { hex: '#94a3b8', tw: 'slate' }; // Idle
  };

  const theme = getThemeColor();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAndStop}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal - True Voice Assistant UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg bg-slate-950 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.8)] z-[101] overflow-hidden flex flex-col h-[80vh] max-h-[750px] border border-white/10"
          >
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                  x: [0, 30, 0],
                  y: [0, -30, 0]
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className={`absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000 ${
                  isSpeaking ? 'bg-emerald-600/40' : isListening ? 'bg-blue-600/40' : isLoading ? 'bg-purple-600/40' : 'bg-indigo-600/20'
                }`}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, -40, 0],
                  y: [0, 40, 0]
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                className={`absolute -bottom-[10%] -right-[10%] w-[80%] h-[80%] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ${
                  isSpeaking ? 'bg-teal-600/30' : isListening ? 'bg-cyan-600/30' : isLoading ? 'bg-fuchsia-600/30' : 'bg-blue-900/30'
                }`}
              />
            </div>

            {/* Header */}
            <div className="p-6 flex items-center justify-between shrink-0 z-20">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                <span className="text-white font-semibold text-lg tracking-wide drop-shadow-md">VisaVaani Voice</span>
              </div>
              
              {/* Language Selector */}
              <div className="relative group">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-lg hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 cursor-pointer transition-all shadow-lg">
                  <Globe2 className="w-4 h-4 text-blue-300" />
                  <select 
                    value={selectedLanguage.code}
                    onChange={(e) => {
                      const lang = LANGUAGES.find(l => l.code === e.target.value);
                      setSelectedLanguage(lang);
                      if (synthRef.current) synthRef.current.cancel();
                    }}
                    className="bg-transparent text-slate-100 text-sm font-medium focus:outline-none cursor-pointer appearance-none pr-5 z-10 relative"
                  >
                    {LANGUAGES.map(lang => (
                      <option key={lang.code} value={lang.code} className="text-gray-900 bg-white">
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* AI Visualization Area (The Premium Orb) */}
            <div className="flex-grow flex flex-col items-center justify-center relative p-6 z-10">
              
              <div className="relative w-56 h-56 flex items-center justify-center mb-10">
                
                {/* Reactive Outer Rings */}
                <AnimatePresence>
                  {isListening && (
                    <>
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-blue-500 rounded-full"
                      />
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0 bg-blue-400 rounded-full"
                      />
                    </>
                  )}
                  
                  {/* Speaking Waveforms */}
                  {isSpeaking && (
                    <>
                      <motion.div 
                        animate={{ scale: [1, 1.25, 0.95, 1.35, 1], opacity: [0.4, 0.1, 0.5, 0.1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-emerald-500 rounded-full"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.45, 1.15, 1.55, 1], opacity: [0.3, 0.05, 0.4, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        className="absolute inset-0 bg-emerald-400 rounded-full"
                      />
                    </>
                  )}

                  {/* Thinking Spinner */}
                  {isLoading && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-t-4 border-l-4 border-purple-500 border-opacity-50"
                      style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                    />
                  )}
                </AnimatePresence>

                {/* Core AI Orb */}
                <motion.div 
                  animate={{ 
                    scale: isSpeaking ? [1, 1.1, 0.95, 1.1, 1] : isListening ? [1, 1.05, 1] : [1, 1.02, 1],
                    boxShadow: isSpeaking 
                      ? '0 0 80px rgba(16, 185, 129, 0.6), inset 0 0 40px rgba(16, 185, 129, 0.6)' 
                      : isListening 
                      ? '0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 40px rgba(59, 130, 246, 0.6)'
                      : isLoading
                      ? '0 0 60px rgba(168, 85, 247, 0.6), inset 0 0 40px rgba(168, 85, 247, 0.6)'
                      : '0 0 40px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: isSpeaking ? 1.5 : isListening ? 1.2 : 4,
                    ease: "easeInOut" 
                  }}
                  className={`relative w-40 h-40 rounded-full flex items-center justify-center z-10 backdrop-blur-xl border border-white/20 overflow-hidden transition-colors duration-500 ${
                    isSpeaking ? 'bg-emerald-500/20' 
                    : isListening ? 'bg-blue-500/20'
                    : isLoading ? 'bg-purple-500/20'
                    : 'bg-white/5'
                  }`}
                >
                  {/* Internal rotating gradient for idle state */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-[-50%] opacity-50 mix-blend-overlay"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${theme.hex} 50%, transparent 100%)`
                    }}
                  />
                  <Bot className={`w-16 h-16 relative z-10 drop-shadow-2xl transition-colors duration-500 ${
                    isSpeaking ? 'text-emerald-100' : isListening ? 'text-blue-100' : isLoading ? 'text-purple-100' : 'text-slate-300'
                  }`} />
                </motion.div>
              </div>

              {/* Status & Subtitle Area */}
              <div className="text-center z-20 w-full max-w-sm flex flex-col items-center">
                <motion.h3 
                  key={theme.tw}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-3xl font-light tracking-wide mb-4 drop-shadow-md transition-colors duration-500 text-${theme.tw}-400`}
                >
                  {isSpeaking ? "Speaking" : isLoading ? "Thinking" : isListening ? "Listening" : "Ready"}
                </motion.h3>
                
                <div className="h-24 overflow-y-auto flex items-start justify-center w-full">
                  <motion.p 
                    key={currentSubtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-300 text-lg leading-relaxed font-medium px-4 text-center italic opacity-90"
                  >
                    "{currentSubtitle}"
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Bottom Controls (Glass Pill) */}
            <div className="pb-10 flex justify-center z-20 shrink-0">
              <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-2xl border border-white/20 px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* End Call / Close */}
                <button 
                  onClick={closeAndStop}
                  className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                >
                  <PhoneOff className="w-6 h-6" />
                </button>

                {/* Main Mic Toggle */}
                <button
                  onClick={toggleListening}
                  disabled={isLoading}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 scale-105 shadow-[0_0_30px_rgba(239,68,68,0.6)] text-white' 
                      : isLoading
                        ? 'bg-slate-700 opacity-50 cursor-not-allowed text-slate-400'
                        : 'bg-white hover:bg-slate-100 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] text-slate-900'
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8" />
                  ) : (
                    <Mic className="w-8 h-8" />
                  )}
                </button>
              </div>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PremiumAIModal;
