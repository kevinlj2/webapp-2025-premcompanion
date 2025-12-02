"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { env } from "cloudflare:workers";
import type { Env } from "@/env";
import { verifyPassword } from "../lib/hash";

export async function loginUser(email: string, password: string) {
  const db = getDb(env as unknown as Env);

  const row = await db.select().from(users).where(eq(users.email, email)).get();
  if (!row) return { ok: false, message: "User not found" };

  const valid = await verifyPassword(password, row.password);
  if (!valid) return { ok: false, message: "Incorrect password" };

  return { ok: true, email: row.email };
}
