"use client";

import { useAuth } from "../components/Auth";

export default function Profile() {
  const { isAuthenticated, isLoading, username, logout } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-gray-200 border-b p-4">
        <h1 className="text-3xl font-bold">Prem Companion</h1>
        <button onClick={logout} className="font-semibold hover:opacity-80">
          Logout 🔓
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center text-xl font-semibold">
        Welcome back, {username}!
      </main>
    </div>
  );
}
