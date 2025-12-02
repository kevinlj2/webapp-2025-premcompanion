"use client";

import { AuthContextType } from "@/app/lib/auth";
import { loginUser } from "@/app/actions/login";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const user = localStorage.getItem("user");

    if (auth === "true" && user) {
      setIsAuthenticated(true);
      setUsername(user);
    }

    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const result = await loginUser(email, password);

    if (!result.ok) {
      throw new Error(result.message);
    }

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", result.email);

    setIsAuthenticated(true);
    setUsername(result.email);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
