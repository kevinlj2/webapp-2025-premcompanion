import Layout from "./components/Layout";
import Login from "./components/Login";
import { AuthProvider } from "./components/Auth";

export function LoginPage() {
  return (
    <AuthProvider>
      <Layout>
        <Login />
      </Layout>
    </AuthProvider>
  );
}
