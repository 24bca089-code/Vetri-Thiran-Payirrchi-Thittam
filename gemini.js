import {GoogleGenAI} from "@google/genai";
const ai=process.env.GEMINI_API_KEY?new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY}):null;
const model=process.env.GEMINI_MODEL||"gemini-3.8-flash";
export async function generateText(prompt){if(!ai)throw new Error("GEMINI_API_KEY is not configured");const r=await ai.models.generateContent({model,contents:prompt});return r.text?.trim()||"";}
export async function generateJSON(prompt){const t=(await generateText(prompt+"\nReturn ONLY valid JSON. No markdown fences.")).replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/\s*```$/i,"").trim();return JSON.parse(t);}
