import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isUserLoggedIn, setLogin, setUsername, setUserId } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const {
      data: {
        userDetails: { userId, firstname },
      },
      status,
    } = await axios({
      method: "POST",
      url: "https://api-circleview.herokuapp.com/users/authenticate",
      headers: { email, password },
    });

    if (status === 200) {
      setLogin(true);
      setUsername(firstname);
      setUserId(userId);
      localStorage?.setItem(
        "userInfo",
        JSON.stringify({
          isUserLoggedIn: true,
          username: firstname,
          userId: userId,
        })
      );
      navigate(state?.from ? state.from : "/");
    }
  };

  const logoutHandler = () => {
    setLogin(false);
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      {!isUserLoggedIn ? (
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={loginHandler}>
            <input
              type="email"
              className="input-area"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-area"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-sm btn-primary w-100">
              Login
            </button>
          </form>
          <p>
            Don't have an account ?{" "}
            <Link style={{ color: "inherit" }} to="/signup">
              Sign up Now
            </Link>
          </p>
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
