export interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  isLoading: boolean;
  login: (user: string) => void;
  logout: () => void;
}
