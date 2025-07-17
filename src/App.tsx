import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Route>

          {/* вне layout — например, страница логина и регистрации */}
          <Route path="/" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
