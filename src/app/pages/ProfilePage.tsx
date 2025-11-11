"use client";
import { AuthProvider } from "./components/Auth";
import Layout from "./components/Layout";
import Profile from "./components/Profile";

export function ProfilePage() {
  return (
    <AuthProvider>
      <Layout>
        <Profile />
      </Layout>
    </AuthProvider>
  );
}
