"use client";
import { useEffect, useState } from "react";

export function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const user = localStorage.getItem("user");

    if (auth === "true") {
      setIsAuthenticated(true);
      setUsername(user || "");
    } else {
      window.location.href = "/LoginPage"; // ✅ redirect
    }
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-gray-200 border-b border-gray-400 px-6 py-3">
        <h1 className="text-3xl font-bold text-black">Prem Companion</h1>
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            localStorage.removeItem("user");
            window.location.href = "/LoginPage"; // ✅ logout redirect
          }}
          className="flex items-center space-x-2 font-semibold text-black hover:opacity-80 transition"
        >
          <span>Logout</span> <span>🔓</span>
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center text-xl font-semibold text-gray-700">
        <p>Welcome back, {username}! </p>
      </main>
    </div>
  );
}
