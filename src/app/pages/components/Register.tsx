"use client";

import { useState } from "react";
import { registerUser } from "@/server/register";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await registerUser(email, password);

    if (!result.ok) {
      alert(result.message);
      return;
    }

    const userEmail = (result as { ok: true; email: string }).email;

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", userEmail);

    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow flex flex-col gap-4 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold">Register</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
