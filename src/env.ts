if (!Bun.env.BUN_ENV) throw Error("Environment declaration is missing!");
if (!Bun.env.BUN_PORT) throw Error("Server port declaration is missing!");

export const env = {
  ENV: Bun.env.BUN_ENV,
  PORT: Bun.env.BUN_PORT,
};
