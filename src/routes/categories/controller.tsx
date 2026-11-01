import { Elysia, t } from "elysia";
import { html, Html } from "@elysia/html";
import { CategoriesPage } from "~/routes/categories/page";
import { CategoryPage } from "~/routes/categories/category";

export const categories = new Elysia()
  .use(html())
  .get("/categories", () => <CategoriesPage />)
  .get("/categories/:slug", ({ params: { slug } }) => {
    return <CategoryPage name={slug} />;
  });
