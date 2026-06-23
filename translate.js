import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const greetings = {
  'hi-IN': "सुप्रभात! वीसावाणी में आपका स्वागत है, मैं आपका एआई वॉयस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
  'bn-IN': "সুপ্রভাত! ভিসাবাণীতে আপনাকে স্বাগত, আমি আপনার এআই ভয়েস অ্যাসিস্ট্যান্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
  'te-IN': "శుభోదయం! వీసావాణికి స్వాగతం, నేను మీ AI వాయిస్ అసిస్టెంట్. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
  'mr-IN': "शुभ प्रभात! विसावाणीमध्ये आपले स्वागत आहे, मी आपला एआय व्हॉइस असिस्टंट आहे. आज मी तुमची कशी मदत करू शकेन?",
  'ta-IN': "காலை வணக்கம்! விஸாவாணிக்கு வரவேற்கிறோம், நான் உங்கள் AI குரல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
  'ur-IN': "صبح بخیر! ویزاوانی میں خوش آمدید، میں آپ کا اے آئی وائس اسسٹنٹ ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
  'gu-IN': "સુપ્રભાત! વિસાવાણીમાં તમારું સ્વાગત છે, હું તમારો એઆઈ વોઇસ આસિસ્ટન્ટ છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
  'kn-IN': "ಶುಭೋದಯ! ವಿಸಾವಾಣಿಗೆ ಸ್ವಾಗತ, ನಾನು ನಿಮ್ಮ AI ಧ್ವನಿ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  'ml-IN': "സുപ്രഭാതം! വിസവാണിയിലേക്ക് സ്വാഗതം, ഞാൻ നിങ്ങളുടെ AI വോയ്‌സ് അസിസ്റ്റന്റാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
  'pa-IN': "ਗੁੱਡ ਮੋਰਨਿੰਗ! ਵੀਜ਼ਾਵਾਣੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ, ਮੈਂ ਤੁਹਾਡਾ ਏਆਈ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?"
};

async function run() {
  for (const [lang, text] of Object.entries(greetings)) {
    const res = await model.generateContent(`Transliterate the following text into the Latin alphabet (English characters) so it can be read by an English text-to-speech engine. Output ONLY the transliteration, no other text:\n${text}`);
    console.log(`${lang}: ${res.response.text().trim()}`);
  }
}
run();
