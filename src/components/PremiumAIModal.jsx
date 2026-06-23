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

const getGreeting = (langCode) => {
  const hour = new Date().getHours();
  let timeOfDay = 'morning';
  if (hour >= 12 && hour < 18) timeOfDay = 'afternoon';
  else if (hour >= 18) timeOfDay = 'evening';

  const greetings = {
    'en-US': {
      morning: "Good morning! Welcome to VisaVaani, your AI voice assistant. How can I help you today?",
      afternoon: "Good afternoon! Welcome to VisaVaani, your AI voice assistant. How can I help you today?",
      evening: "Good evening! Welcome to VisaVaani, your AI voice assistant. How can I help you today?"
    },
    'hi-IN': {
      morning: "सुप्रभात! वीसावाणी में आपका स्वागत है, मैं आपका एआई वॉयस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      afternoon: "शुभ दोपहर! वीसावाणी में आपका स्वागत है, मैं आपका एआई वॉयस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      evening: "शुभ संध्या! वीसावाणी में आपका स्वागत है, मैं आपका एआई वॉयस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?"
    },
    'bn-IN': {
      morning: "সুপ্রভাত! ভিসাবাণীতে আপনাকে স্বাগত, আমি আপনার এআই ভয়েস অ্যাসিস্ট্যান্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      afternoon: "শুভ বিকাল! ভিসাবাণীতে আপনাকে স্বাগত, আমি আপনার এআই ভয়েস অ্যাসিস্ট্যান্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      evening: "শুভ সন্ধ্যা! ভিসাবাণীতে আপনাকে স্বাগত, আমি আপনার এআই ভয়েস অ্যাসিস্ট্যান্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?"
    },
    'te-IN': {
      morning: "శుభోదయం! వీసావాణికి స్వాగతం, నేను మీ AI వాయిస్ అసిస్టెంట్. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      afternoon: "శుభ మధ్యాహ్నం! వీసావాణికి స్వాగతం, నేను మీ AI వాయిస్ అసిస్టెంట్. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      evening: "శుభ సాయంత్రం! వీసావాణికి స్వాగతం, నేను మీ AI వాయిస్ అసిస్టెంట్. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?"
    },
    'mr-IN': {
      morning: "शुभ प्रभात! विसावाणीमध्ये आपले स्वागत आहे, मी आपला एआय व्हॉइस असिस्टंट आहे. आज मी तुमची कशी मदत करू शकेन?",
      afternoon: "शुभ दुपार! विसावाणीमध्ये आपले स्वागत आहे, मी आपला एआय व्हॉइस असिस्टंट आहे. आज मी तुमची कशी मदत करू शकेन?",
      evening: "शुभ संध्याकाळ! विसावाणीमध्ये आपले स्वागत आहे, मी आपला एआय व्हॉइस असिस्टंट आहे. आज मी तुमची कशी मदत करू शकेन?"
    },
    'ta-IN': {
      morning: "காலை வணக்கம்! விஸாவாணிக்கு வரவேற்கிறோம், நான் உங்கள் AI குரல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      afternoon: "மதிய வணக்கம்! விஸாவாணிக்கு வரவேற்கிறோம், நான் உங்கள் AI குரல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      evening: "மாலை வணக்கம்! விஸாவாணிக்கு வரவேற்கிறோம், நான் உங்கள் AI குரல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?"
    },
    'ur-IN': {
      morning: "صبح بخیر! ویزاوانی میں خوش آمدید، میں آپ کا اے آئی وائس اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      afternoon: "دوپہر بخیر! ویزاوانی میں خوش آمدید، میں آپ کا اے آئی وائس اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      evening: "شام بخیر! ویزاوانی میں خوش آمدید، میں آپ کا اے آئی وائس اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟"
    },
    'gu-IN': {
      morning: "સુપ્રભાત! વિસાવાણીમાં તમારું સ્વાગત છે, હું તમારો એઆઈ વોઇસ આસિસ્ટન્ટ છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
      afternoon: "શુભ બપોર! વિસાવાણીમાં તમારું સ્વાગત છે, હું તમારો એઆઈ વોઇસ આસિસ્ટન્ટ છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
      evening: "શુભ સાંજ! વિસાવાણીમાં તમારું સ્વાગત છે, હું તમારો એઆઈ વોઇસ આસિસ્ટન્ટ છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?"
    },
    'kn-IN': {
      morning: "ಶುಭೋದಯ! ವಿಸಾವಾಣಿಗೆ ಸ್ವಾಗತ, ನಾನು ನಿಮ್ಮ AI ಧ್ವನಿ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      afternoon: "ಶುಭ ಮಧ್ಯಾಹ್ನ! ವಿಸಾವಾಣಿಗೆ ಸ್ವಾಗತ, ನಾನು ನಿಮ್ಮ AI ಧ್ವನಿ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      evening: "ಶುಭ ಸಂಜೆ! ವಿಸಾವಾಣಿಗೆ ಸ್ವಾಗತ, ನಾನು ನಿಮ್ಮ AI ಧ್ವನಿ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
    },
    'ml-IN': {
      morning: "സുപ്രഭാതം! വിസവാണിയിലേക്ക് സ്വാഗതം, ഞാൻ നിങ്ങളുടെ AI വോയ്‌സ് അസിസ്റ്റന്റാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
      afternoon: "ശുഭ ഉച്ചതിരിഞ്ഞ്! വിസവാണിയിലേക്ക് സ്വാഗതം, ഞാൻ നിങ്ങളുടെ AI വോയ്‌സ് അസിസ്റ്റന്റാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
      evening: "ശുഭ സായാഹ്നം! വിസവാണിയിലേക്ക് സ്വാഗതം, ഞാൻ നിങ്ങളുടെ AI വോയ്‌സ് അസിസ്റ്റന്റാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?"
    },
    'pa-IN': {
      morning: "ਗੁੱਡ ਮੋਰਨਿੰਗ! ਵੀਜ਼ਾਵਾਣੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
      afternoon: "ਗੁੱਡ ਆਫਟਰਨੂਨ! ਵੀਜ਼ਾਵਾਣੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
      evening: "ਗੁੱਡ ਈਵਨਿੰਗ! ਵੀਜ਼ਾਵਾਣੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?"
    }
  };

  const langGreetings = greetings[langCode] || greetings['en-US'];
  return langGreetings[timeOfDay];
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

  const speakText = useCallback((text, langCode = null) => {
    if (!synthRef.current) return;
    
    synthRef.current.cancel();
    const cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/#/g, '');
    setCurrentSubtitle(cleanText);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCode || selectedLanguage.code;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
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
        const initialGreeting = getGreeting(selectedLanguage.code);
        
        // Short delay to ensure modal is fully open before speaking
        setTimeout(() => {
          speakText(initialGreeting, selectedLanguage.code);
        }, 500);
        
      } catch (e) {
        console.error("Failed to initialize chat session", e);
      }
    };
    
    startChat();
  }, [isOpen, selectedLanguage, speakText]);

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
          {/* Deep Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAndStop}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Premium Glass Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] bg-[#0a0a0a]/85 backdrop-blur-3xl rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] z-[101] flex flex-col min-h-[550px] border border-white/10 pb-8"
          >
            {/* Ambient Animated Glows */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none z-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[90px] transition-colors duration-1000 ${
                  isSpeaking ? 'bg-emerald-500/40' : isListening ? 'bg-blue-500/40' : isLoading ? 'bg-purple-500/40' : 'bg-indigo-500/20'
                }`}
              />
            </div>

            {/* Top Bar */}
            <div className="px-6 pt-8 pb-2 flex items-center justify-between z-20">
              <div className="flex flex-col">
                <span className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">AI Assistant</span>
                <span className="text-white/90 font-medium tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  VisaVaani Voice
                </span>
              </div>
              
              {/* Sleek Language Selector */}
              <div className="relative group">
                <div className="flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5 cursor-pointer transition-colors backdrop-blur-md">
                  <Globe2 className="w-3.5 h-3.5 text-white/60" />
                  <select 
                    value={selectedLanguage.code}
                    onChange={(e) => {
                      const lang = LANGUAGES.find(l => l.code === e.target.value);
                      setSelectedLanguage(lang);
                      if (synthRef.current) synthRef.current.cancel();
                    }}
                    className="bg-transparent text-white/80 text-xs font-medium focus:outline-none cursor-pointer appearance-none pr-4 z-10 relative"
                  >
                    {LANGUAGES.map(lang => (
                      <option key={lang.code} value={lang.code} className="text-gray-900 bg-white">
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3 h-3 text-white/40 absolute right-2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Central Fluid Orb */}
            <div className="flex-grow flex flex-col items-center justify-center relative p-6 z-10">
              <div className="relative w-64 h-64 flex items-center justify-center mb-6">
                
                {/* Expandable Soundwaves */}
                <AnimatePresence>
                  {(isListening || isSpeaking) && (
                    <>
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isSpeaking ? [1, 1.4, 1] : [1, 1.2, 1], opacity: [0, 0.2, 0] }}
                        transition={{ repeat: Infinity, duration: isSpeaking ? 1 : 1.5, ease: "easeInOut" }}
                        className={`absolute inset-0 rounded-full ${isSpeaking ? 'bg-emerald-500' : 'bg-blue-500'}`}
                      />
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isSpeaking ? [1, 1.6, 1] : [1, 1.4, 1], opacity: [0, 0.1, 0] }}
                        transition={{ repeat: Infinity, duration: isSpeaking ? 1 : 1.5, ease: "easeInOut", delay: 0.2 }}
                        className={`absolute inset-0 rounded-full ${isSpeaking ? 'bg-emerald-500' : 'bg-blue-500'}`}
                      />
                    </>
                  )}
                  {isLoading && (
                     <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     className="absolute inset-4 rounded-full border-2 border-purple-500/20 border-t-purple-500 border-l-purple-500"
                   />
                  )}
                </AnimatePresence>

                {/* The Core Gradient Orb */}
                <motion.div 
                  animate={{ 
                    scale: isSpeaking ? [1, 1.05, 0.98, 1.05, 1] : isListening ? [1, 1.02, 1] : [1, 1.01, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: isSpeaking ? 1.5 : isListening ? 1.2 : 4,
                    ease: "easeInOut" 
                  }}
                  className={`relative w-40 h-40 rounded-full flex items-center justify-center z-10 backdrop-blur-2xl border transition-colors duration-700 shadow-[0_0_50px_rgba(0,0,0,0.4),inset_0_2px_10px_rgba(255,255,255,0.15)] ${
                    isSpeaking ? 'bg-gradient-to-br from-emerald-500/30 to-teal-900/50 border-emerald-500/40' 
                    : isListening ? 'bg-gradient-to-br from-blue-500/30 to-indigo-900/50 border-blue-500/40'
                    : isLoading ? 'bg-gradient-to-br from-purple-500/30 to-fuchsia-900/50 border-purple-500/40'
                    : 'bg-gradient-to-br from-indigo-500/20 to-purple-900/30 border-white/10'
                  }`}
                >
                  {/* Internal rotating light */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    className="absolute inset-0 rounded-full opacity-40 mix-blend-screen blur-md"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${theme.hex} 50%, transparent 100%)`
                    }}
                  />
                  
                  <div className="relative w-24 h-24 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isSpeaking ? 'speaking' : isListening ? 'listening' : isLoading ? 'loading' : 'idle'}
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {isSpeaking ? <Volume2 className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" /> : 
                         isListening ? <Mic className="w-10 h-10 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" /> :
                         isLoading ? <Sparkles className="w-10 h-10 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" /> :
                         <Bot className="w-10 h-10 text-indigo-200 drop-shadow-[0_0_10px_rgba(165,180,252,0.5)]" />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Status & Subtitle Area */}
              <div className="text-center w-full max-w-sm flex flex-col items-center mt-2">
                <motion.h3 
                  key={theme.tw}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-2xl font-semibold tracking-wide mb-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent`}
                >
                  {isSpeaking ? "Speaking..." : isLoading ? "Thinking..." : isListening ? "Listening..." : "Ready"}
                </motion.h3>
                
                <div className="h-28 overflow-y-auto custom-scrollbar flex items-start justify-center w-full px-2 mask-image-b">
                  <motion.p 
                    key={currentSubtitle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/70 text-base leading-relaxed font-light text-center w-full"
                  >
                    {currentSubtitle}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Bottom Controls (Floating Capsule) */}
            <div className="flex justify-center z-20 shrink-0 mt-4">
              <div className="flex items-center p-1.5 bg-white/10 backdrop-blur-3xl border border-white/15 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                
                {/* Main Action Button */}
                <button
                  onClick={toggleListening}
                  disabled={isLoading}
                  className={`relative flex items-center justify-center h-14 px-8 rounded-full font-medium text-base transition-all duration-300 overflow-hidden ${
                    isListening 
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30' 
                      : isLoading
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    {isListening ? (
                      <>
                        <MicOff className="w-5 h-5" /> Stop
                      </>
                    ) : isLoading ? (
                      <>
                        <Sparkles className="w-5 h-5" /> Wait
                      </>
                    ) : (
                      <>
                        <Mic className="w-5 h-5" /> Tap to Speak
                      </>
                    )}
                  </span>
                </button>

                {/* Separator */}
                <div className="w-[1px] h-8 bg-white/10 mx-2" />

                {/* End Call Button */}
                <button 
                  onClick={closeAndStop}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
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
