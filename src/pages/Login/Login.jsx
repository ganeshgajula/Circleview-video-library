import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isUserLoggedIn, setLogin, loginUserWithCredentials } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    loginUserWithCredentials(username, password);
    navigate(state?.from ? state.from : "/");
  };

  const logoutHandler = () => {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      {!isUserLoggedIn ? (
        <div className="login-container">
          <h1>Login</h1>
          <input
            type="email"
            className="login-form-field"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="login-form-field"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn-sm btn-primary" onClick={loginHandler}>
            Login
          </button>
        </div>
      ) : (
        <div className="logout-container">
          <h1>Logout</h1>
          <button className="btn-primary btn-sm" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
