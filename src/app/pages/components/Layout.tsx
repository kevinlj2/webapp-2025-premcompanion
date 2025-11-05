import { LayoutProps } from "rwsdk/router";
import Nav from "./Nav";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Nav />

      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
