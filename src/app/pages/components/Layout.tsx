"use client";

import { LayoutProps } from "rwsdk/router";
import Nav from "./Nav";
import PremFooter from "./PremFooter";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Nav />

      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>

        <PremFooter />
      </div>
    </div>
  );
}
