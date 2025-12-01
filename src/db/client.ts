import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb(env: { premcompanion_db: D1Database }) {
  return drizzle(env.premcompanion_db, { schema });
}
