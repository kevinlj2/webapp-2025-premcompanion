"use client";
import { useState } from "react";

export function ProfilePage() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", emailOrUsername, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username/Email</label>
        <input
          type="text"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Dont have an account? <a href="/register">Register here</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot password?</a>
      </p>

      <h2>Profile Page</h2>
      <p>This is where the user profile information will be displayed.</p>
    </div>
  );
}
