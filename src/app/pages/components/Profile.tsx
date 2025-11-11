"use client";
import { useAuth } from "../components/Auth";

export default function Profile({ logout }: { logout: () => void }) {
  const { isAuthenticated, isLoading, username } = useAuth();

  if (isLoading) return <p>Laster inn bruker...</p>;
  if (!isAuthenticated) {
    window.location.href = "./login";
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-gray-200 border-b border-gray-400 px-6 py-3">
        <h1 className="text-3xl font-bold text-black">Prem Companion</h1>
        <button
          onClick={logout}
          className="flex items-center space-x-2 font-semibold text-black hover:opacity-80 transition"
        >
          <span>Logout</span> <span>🔓</span>
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center text-xl font-semibold text-gray-700">
        <p>Welcome back, {username}!</p>
      </main>
    </div>
  );
}
