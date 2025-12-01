"use server";

import { getDb } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifyPassword } from "../lib/hash";

type LoginSuccess = { ok: true; email: string };
type LoginFail = { ok: false; message: string };

export async function loginUser(
  email: string,
  password: string
): Promise<LoginSuccess | LoginFail> {
  // THIS is the ONLY correct way in rwsdk server actions
  const env = process.env as unknown as { premcompanion_db: D1Database };

  const db = getDb(env);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get();

  if (!user) {
    return { ok: false, message: "User not found" };
  }

  const valid = await verifyPassword(password, user.password);

  if (!valid) {
    return { ok: false, message: "Incorrect password" };
  }

  return { ok: true, email: user.email };
}
