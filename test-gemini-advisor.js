import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: "You are VisaVaani AI...",
});

async function test() {
  try {
    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
      },
    });
    const result = await chat.sendMessage("hello");
    console.log("Success:", result.response.text());
  } catch(e) {
    console.error("Error:", e.message);
  }
}
test();
