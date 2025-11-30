export interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
