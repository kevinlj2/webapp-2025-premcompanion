"use client";
import { useState } from "react";
import { useAuth } from "../components/Auth";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (emailOrUsername && password) {
      login(emailOrUsername);
      window.location.href = "./profile";
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <header className="fixed top-0 left-0 w-full bg-gray-200 border-b border-gray-400 p-4 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-black">Prem Companion</h1>
      </header>

      <main className="bg-gray-200 border border-gray-400 rounded-lg w-full max-w-md p-8 shadow-md mt-24">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          Login <span className="ml-2">🔐</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block font-semibold mb-1">Username/email:</label>
            <input
              type="text"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
