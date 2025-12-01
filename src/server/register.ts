// src/app/actions/register.ts
"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { env } from "cloudflare:workers";
import type { Env } from "@/env";
import { hashPassword } from "@/app/lib/hash";

type RegisterResult = { ok: true } | { ok: false; message: string };

export async function registerUser(
  email: string,
  password: string
): Promise<RegisterResult> {
  const db = getDb(env as unknown as Env);

  const hashed = await hashPassword(password);

  await db.insert(users).values({
    email,
    password: hashed,
  });

  return { ok: true };
}
