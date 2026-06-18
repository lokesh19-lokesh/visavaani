import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AQ.Ab8RN6IeJgUW4Cepvat5mXhrw8cUmw9YiFiLuwggh32XG5LMoA';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // try gemini-2.5-flash

async function run() {
  try {
    const result = await model.generateContent('Hello');
    console.log(result.response.text());
  } catch (e) {
    console.error('Error with gemini-2.5-flash:', e.message);
    try {
      const model2 = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      const result2 = await model2.generateContent('Hello');
      console.log(result2.response.text());
    } catch (e2) {
      console.error('Error with gemini-1.5-pro:', e2.message);
    }
  }
}

run();
