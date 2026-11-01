import { Elysia } from "elysia";
import { staticPlugin } from "@elysia/static";
import { home } from "~/routes/home/controller";
import { categories } from "~/routes/categories/controller";

export const app = new Elysia()
  .use(
    staticPlugin({
      assets: "public",
      prefix: "/public",
    }),
  )
  .use(home)
  .use(categories);

export type App = typeof app;
