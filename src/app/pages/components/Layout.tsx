import { LayoutProps } from "rwsdk/router";
import Nav from "./Nav";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main>
        <>{children}</>
      </main>
    </>
  );
}
