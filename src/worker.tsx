import { defineApp } from "rwsdk/worker";
import { prefix, render, route } from "rwsdk/router";
import { Document } from "@/app/Document";

import { users } from "./db/schema/user-schema";

import { setCommonHeaders } from "./app/headers";
import { Home } from "./app/pages/Home";
import { TeamsPage } from "./app/pages/TeamsPage";
import { TransactionHistory } from "./app/pages/TransactionHistory";
import { TicketsPage } from "./app/pages/TicketsPage";
import { LoginPage } from "./app/pages/LoginPage";
import { ProfilePage } from "./app/pages/ProfilePage";
import { RegisterPage } from "./app/pages/RegisterPage";
import { drizzle } from "drizzle-orm/d1";
import { hashPassword } from "./app/lib/hash";
import { env } from "cloudflare:workers";
import { getDb } from "@/db/client";

export interface Env {
  DB: D1Database;
}

export type AppContext = {
  user: User | undefined;
  authUrl: string;
};

export default defineApp([
  setCommonHeaders(),

  prefix("/api/v1/premcompanion", [
    route(
      "/",
      () =>
        new Response(JSON.stringify({ message: "Prem Root", success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
    ),

    route("/register", {
      post: async ({ request }) => {
        try {
          const { email, password } = await request.json();

          if (!email || !password) {
            return new Response(
              JSON.stringify({
                ok: false,
                message: "Email and password required",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const db = getDb(env as unknown as Env);

          const hashed = await hashPassword(password);

          await db.insert(users).values({ email, password: hashed });

          return new Response(JSON.stringify({ ok: true, email }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          return new Response(
            JSON.stringify({
              ok: false,
              message: "Registration failed",
            }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    }),

    route("/:id", (ctx: { params: { id: string } }) => {
      return new Response(
        JSON.stringify({
          message: `Prem Root ${ctx.params.id}`,
          success: true,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }),
  ]),

  render(Document, [
    route("/", Home),
    route("/teams", TeamsPage),
    route("/tickets/:fixtureId", TicketsPage),
    route("/history", TransactionHistory),
    route("/profile", ProfilePage),
    route("/login", LoginPage),
    route("/register", RegisterPage),
  ]),
]);
