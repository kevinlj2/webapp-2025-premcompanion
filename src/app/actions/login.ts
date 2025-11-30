"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { env } from "cloudflare:workers";
import { verifyPassword } from "../lib/hash";

type LoginSuccess = { ok: true; email: string };
type LoginFail = { ok: false; message: string };

export async function loginUser(
  email: string,
  password: string
): Promise<LoginSuccess | LoginFail> {
  const db = getDb(env);

  const rows = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .all();

  const user = rows[0];

  if (!user) {
    return { ok: false, message: "User not found" };
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return { ok: false, message: "Incorrect password" };
  }

  return {
    ok: true,
    email: user.email,
  };
}
