import { api } from "@nitric/sdk";

const helloApi = api("main");

helloApi.get("/hello", async (ctx) => {
  ctx.res.json({ env: process.env, cool: 1 });

  return ctx;
});
