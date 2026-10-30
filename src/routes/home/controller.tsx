import { Elysia } from "elysia";
import { html, Html } from "@elysia/html";
import { HomePage } from "~/routes/home/page";

export const home = new Elysia().use(html()).get("/", () => <HomePage />);
