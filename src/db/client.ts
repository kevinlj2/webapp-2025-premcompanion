// src/db/client.ts

import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import type { Env } from "@/env";

export function getDb(env: Env) {
  return drizzle(env.premcompanion_db, { schema });
}
