import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GeneralHealth from "./pages/GeneralHealth/GeneralHealth.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import VerifyPage from "./pages/VerifyPage/VerifyPage.tsx";
import Survey from "./pages/Survey/Survey.tsx";
import PatientPage from "./pages/PatientPage/PatientPage.tsx";
import DoctorsList from "./components/DoctorsList/DoctorsList.tsx";
import MyAppointments from "./pages/PatientPage/MyAppointments/MyAppointments.tsx";
import Chat from "./pages/PatientPage/Chat/Chat.tsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}></Route>
          <Route path="/patientPage" element={<PatientPage />}>
            <Route index element={<DoctorsList />} />
            <Route path="myAppointments" element={<MyAppointments />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="/patientPage/chat" element={<Chat />} />
          </Route>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/generalHealth" element={<GeneralHealth />} />2
          {/* вне layout — например, страница логина и регистрации */}
          <Route path="/" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/regis" element={<RegisterPage />} />
          <Route path="/survey" element={<Survey />} />
          {/* import VerifyPage from "./pages/VerifyPage/VerifyPage"; // ... */}
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
