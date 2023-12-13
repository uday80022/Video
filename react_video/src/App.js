import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LoginRequired from "./components/LoginRequired";
import HomePage from "./components/HomePage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import Navigationbar from "./components/Navigationbar";
import PasswordChangePage from "./components/PasswordChangePage";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log(
      "useEffect is running. Current path:",
      window.location.pathname
    );
    const checkAuthentication = async () => {
      const exemptedRoutes = ["/register", "/login", "/passwordreset", "/"];
      if (!exemptedRoutes.includes(window.location.pathname)) {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/check_authentication/"
          );
          const data = await response.json();

          if (!data.isAuthenticated) {
            navigate("/loginrequired");
          } else {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Error checking authentication:", error);
        }
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuthentication();
  }, [navigate]);

  const showNavbar =
    isAuthenticated &&
    !["/register", "/login", "/passwordreset", "/"].includes(
      window.location.pathname
    );

  return (
    <div className="App">
      {showNavbar && <Navigationbar />}
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/loginrequired"
          element={
            <Layout>
              <LoginRequired />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/passwordchange"
          element={
            <Layout>
              <PasswordChangePage />
            </Layout>
          }
        />
        <Route
          path="/passwordreset"
          element={
            <Layout>
              <ResetPasswordPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
