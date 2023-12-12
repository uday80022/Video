import React from "react";
import { useNavigate } from "react-router-dom";
import "../Designs/LoginRequired.css";

const LoginRequired = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login-required-container">
      <p className="login-required-message">Login or register</p>
      <button className="login-required-button" onClick={redirectToLogin}>
        Go to Login
      </button>
    </div>
  );
};

export default LoginRequired;
