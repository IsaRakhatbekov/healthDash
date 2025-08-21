import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLoggedIn, role } = useAuth();
  const navigate = useNavigate();

  console.log("isLoggedIn ", isLoggedIn, role);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
