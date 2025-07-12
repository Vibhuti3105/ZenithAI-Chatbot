
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBwqlOO09jI9GWGJX-KpaRxO7k9CODylLs",
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      maxOutputTokens: 500,
      temperature: 0.1,
    },
  });
  console.log(response.text);
  return response.text;
}
export default main;""