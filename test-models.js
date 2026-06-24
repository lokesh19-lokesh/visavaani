const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.VITE_GEMINI_API_KEY}`);
    const data = await response.json();
    console.log("Models:", data.models?.map(m => m.name).join(", "));
  } catch(e) {
    console.error("Error:", e.message);
  }
}
test();
