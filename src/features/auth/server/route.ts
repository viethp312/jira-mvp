import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { loginSchema, signupSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    return c.json({
      message: "Hello World",
    });
  })
  .post("/register", zValidator("json", signupSchema), (c) => {
    return c.json({
      message: "Hello World",
    });
  });

export default app;
