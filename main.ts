// main.ts

import "jsr:@std/dotenv/load";

import {
  OpenAIModelProvider,
  createZypherContext,
  ZypherAgent,
  runAgentInTerminal,
} from "@corespeed/zypher";

function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

console.log("🤖 Post-Pregnancy AI Agent (Groq-Powered) is starting...\n");

const zypherContext = await createZypherContext(Deno.cwd());

const agent = new ZypherAgent(
  zypherContext,
  new OpenAIModelProvider({
    apiKey: getRequiredEnv("GROQ_API_KEY"),
    baseUrl: "https://api.groq.com/openai/v1",
  }),
);

console.log("🌸 Your Post-Pregnancy Agent (Groq Edition) is ready!");
console.log("💬 Type anything to begin.\n");

// **Use a recommended (non-deprecated) Groq model**
await runAgentInTerminal(agent, "llama-3.3-70b-versatile");
