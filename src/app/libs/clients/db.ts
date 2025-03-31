import { Pool } from "pg";

export const dbclient = new Pool({
  connectionString: process.env.DB_URL,
});
