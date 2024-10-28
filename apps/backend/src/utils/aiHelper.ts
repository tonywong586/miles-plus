import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  RequestsGetTool,
  RequestsPostTool,
  AIPluginTool,
} from "langchain/tools";
import { env } from "process";

// export const travelTools = [
//   new RequestsGetTool(),
//   new RequestsPostTool(),
//   AIPluginTool.fromPluginUrl(
//     "https://www.klook.com/v1/gptpluginsrv/public/openapi.json",
//   ),
// ];

export const llm = new ChatOpenAI({
  azureOpenAIApiKey: env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiVersion: env.AZURE_OPENAI_API_VERSION,
  azureOpenAIApiInstanceName: env.AZURE_OPENAI_INSTANCE_NAME,
  azureOpenAIApiDeploymentName: env.AZURE_OPENAI_DEPLOYMENT_NAME,
});
