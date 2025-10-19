import { defineApp } from "rwsdk/worker";
import { prefix, render, route } from "rwsdk/router";
import { Document } from "@/app/Document";

import { User, users } from "./db/schema/user-schema";
import { setCommonHeaders } from "./app/headers";
import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import TeamsPage from "./components/TeamsPage";
import TransHisPage from "./components/TransHisPage";
import HelpPage from "./components/HelpPage";
import TicketsPage from "./components/TicketsPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import ContactPage from "./components/ContactPage";

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
    route("/", HomePage),
    route("/teams", TeamsPage),
    route("/tickets", TicketsPage),
    route("/history", TransHisPage),
    route("/help", HelpPage),
    route("/contact", ContactPage),
    route("/profile", ProfilePage),
  ]),
]);
