import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"; // Ensure imports are correctly defined

const apiKey = 'AIzaSyBBuuzjPu337Q1qa13n55Q1zYBs37U7m5k'; // Use the correct API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text()); // Log the response text
  return result.response.text(); // Return the response text
}

export default run; // Ensure this is correctly placed at the end of the file