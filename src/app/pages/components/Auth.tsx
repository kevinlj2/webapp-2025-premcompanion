"use client";
import { AuthContextType } from "@/app/lib/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("auth");
      const user = localStorage.getItem("user");

      if (auth === "true" && user) {
        setIsAuthenticated(true);
        setUsername(user);
      }
      setIsLoading(false);
    }
  }, []);

  const login = (user: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", user);
      setIsAuthenticated(true);
      setUsername(user);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setUsername("");
    }
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
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
