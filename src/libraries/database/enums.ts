import { pgEnum } from "drizzle-orm/pg-core";

export const userStatusEnum = pgEnum("user_status", [
  "active",
  "limited",
  "disabled",
]);

export const adminStatusEnum = pgEnum("admin_status", ["active", "disabled"]);
