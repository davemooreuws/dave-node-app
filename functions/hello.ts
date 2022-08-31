import { api } from "@nitric/sdk";

const helloApi = api("main");

helloApi.get("/hello", async (ctx) => {
  const envVars = {};

  Object.entries(process.env).forEach(([string, value]) => {
    if (!string.includes("NITRIC") && !string.includes("AWS")) {
      envVars[string] = value;
    }
  });

  ctx.res.json({ env: envVars });

  return ctx;
});
