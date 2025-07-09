import { useState } from "react";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);

  return (
    <div className="App">
      <Header onSelect={setAuthMode} />

      {authMode === "login" && <LoginPage />}
      {authMode === "regis" && <RegisterPage />}
    </div>
  );
}

export default App;
