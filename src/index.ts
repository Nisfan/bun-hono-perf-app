import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

app.get("/", async (c) => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 0));
  return c.text("Hello Hono!");
});

export default {
  port: 4000,
  fetch: app.fetch,
};
