import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number("PORT must be a number."),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.coerce.number("Database port must be number"),
  ACCESS_SECRET_KEY: z.string(),
  REFRESH_SECRET_KEY: z.string(),
  ACCESS_TOKEN_TIME: z.coerce.number(),
  REFRESH_TOKEN_TIME: z.coerce.number(),
});

export const env = envSchema.parse(process.env);
