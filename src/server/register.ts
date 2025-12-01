"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { env } from "cloudflare:workers";
import type { Env } from "@/env";
import { hashPassword } from "@/app/lib/hash";

export async function registerUser(email: string, password: string) {
  const db = getDb(env as unknown as Env);

  const hashed = await hashPassword(password);
  await db.insert(users).values({ email, password: hashed });

  return { ok: true };
}
