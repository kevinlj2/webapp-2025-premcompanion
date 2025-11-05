import { defineApp } from "rwsdk/worker";
import { prefix, render, route } from "rwsdk/router";
import { Document } from "@/app/Document";

import { User, users } from "./db/schema/user-schema";
import { setCommonHeaders } from "./app/headers";
import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import { Home } from "./app/pages/Home";
import { TeamsPage } from "./app/pages/TeamsPage";
import { ProfilePage } from "./app/pages/ProfilePage";
import { TransactionHistory } from "./app/pages/TransactionHistory";
import { TicketsPage } from "./app/pages/TicketsPage";

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
    route("/:id", (ctx) => {
      const { id } = ctx.params;
      return new Response(
        JSON.stringify({ message: `Prem Root ${id}`, success: true }),
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
    route("/tickets", TicketsPage),
    route("/history", TransactionHistory),
    //route("/help", HelpPage),
    //route("/contact", ContactPage),
    route("/profile", ProfilePage),
  ]),
]);
