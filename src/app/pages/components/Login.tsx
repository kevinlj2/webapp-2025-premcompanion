"use client";

import { useState } from "react";
import { useAuth } from "../components/Auth";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      await login(emailOrUsername, password);
      window.location.href = "/profile";
    } catch (err: any) {
      alert(err.message);
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
            <label className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>

          <button className="mt-4 bg-black text-white font-semibold py-2 rounded hover:bg-gray-800">
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create one
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
