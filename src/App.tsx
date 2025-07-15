import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* можно добавить другие защищённые страницы */}
          </Route>

          {/* вне layout — например, страница логина и регистрации */}
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
