import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const verify = async () => {
      const res = await fetch(
        `http://localhost:3001/verify-email?token=${token}`
      );
      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Email verified successfully! Now you can log in.");
      } else {
        setMessage("❌ " + result.message);
      }
    };
    if (token) verify();
  }, [token]);

  return <h2>{message}</h2>;
};

export default VerifyPage;
