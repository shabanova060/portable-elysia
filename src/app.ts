import { Elysia } from "elysia";
import { staticPlugin } from "@elysia/static";
import { home } from "~/routes/home/controller";

export const app = new Elysia()
  .use(
    staticPlugin({
      assets: "public",
      prefix: "/public",
    }),
  )
  .use(home);

export type App = typeof app;
