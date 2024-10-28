import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { RequestsGetTool, RequestsPostTool } from "langchain/tools";
import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "~/trpc";
import { llm } from "~/utils/aiHelper";
import { klookPlugin } from "~/utils/klookPlugin";
import { oneLineTrim } from "common-tags";

// Define the input schema for travel details
// const travelDetailsSchema = z.object({
//   adults: z.number(),
//   children: z.number(),
//   travelDate: z.string(),
//   destination: z.string(),
// });

const travelDetailsEditSchema = z.object({
  requirement: z.string(),
  // oldPlan: z.string(),
});

export const aiRouter = createTRPCRouter({
  genTripActivitiesKlook: publicProcedure.mutation(async () => {
    const tools = [new RequestsGetTool(), new RequestsPostTool()];

    const executor = await initializeAgentExecutorWithOptions(tools, llm, {
      agentType: "chat-zero-shot-react-description",
      verbose: true,
    });

    //Inject klook plugin into executor
    const result = await executor.invoke({
      input: `${JSON.stringify(
        klookPlugin,
      )}Plan a trip to japan list of things to do in japan output in JSON format e.g.{ name: 'TeamLab Planets TOKYO Ticket',ice: '2500 or $198'...}`,
    });

    //chain the result to the next agent

    console.log({ result });

    return result;
  }),

  genTripActivities: publicProcedure
    .input(travelDetailsEditSchema)
    .mutation(async ({ input }) => {
      const messages = [
        new SystemMessage({ content: "You are a helpful assistant" }),
        new HumanMessage({
          content: oneLineTrim`
          Generate a list of travel activities in JSON format. 
          Each activity should include the name, type, asiaMiles, and price in HKD. 
          I want to change:${input.requirement}
          The output format:[
            {
              "name": "Hiking in the mountains",
              "type": "Outdoor",
              "asiaMiles": 500,
              "priceHKD": 200,
              "imageUrl": ""
            }..]
          OUTPUT JSON ONLY: 
          `,
        }),
      ];

      const chatModelResult = await llm.predictMessages(messages);

      return chatModelResult.content;
    }),
});
