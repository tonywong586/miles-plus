import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string().default("3001"),
    AZURE_OPENAI_API_KEY: z.string(),
    AZURE_OPENAI_ENDPOINT: z.string(),
    AZURE_OPENAI_DEPLOYMENT_NAME: z.string(),
    AZURE_OPENAI_EMBEDDINGS_DEPLOYMENT_NAME: z.string(),
    AZURE_OPENAI_INSTANCE_NAME: z.string(),
    AZURE_OPENAI_API_VERSION: z.string(),
  },
  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,
});
