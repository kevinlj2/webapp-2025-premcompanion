"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { env } from "cloudflare:workers";
import { hashPassword } from "@/app/lib/hash";

export async function registerUser(email: string, password: string) {
  const db = getDb(env);

  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get();

  if (existing) {
    return { ok: false, message: "User already exists" };
  }

  const hashed = await hashPassword(password);

  await db.insert(users).values({ email, password: hashed }).run();

  return { ok: true, email };
}
