"use client";

import Layout from "./components/Layout";
import { AuthProvider } from "./components/Auth";
import Tickets from "./components/Tickets";

interface TicketsPageProps {
  params: { fixtureId: string };
}

export function TicketsPage({ params }: TicketsPageProps) {
  const id = Number(params.fixtureId);

  return (
    <AuthProvider>
      <Layout>
        <Tickets fixtureId={id} />
      </Layout>
    </AuthProvider>
  );
}

export default TicketsPage;
