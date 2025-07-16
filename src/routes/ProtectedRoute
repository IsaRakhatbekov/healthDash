import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      console.log(isLoggedIn);
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
