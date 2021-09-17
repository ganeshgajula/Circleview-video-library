import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setUsername, setUserId, loginUser, logoutUser } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const {
        data: {
          userDetails: { userId, firstname, token },
        },
        status,
      } = await axios({
        method: "POST",
        url: "https://api-circleview.herokuapp.com/users/login",
        headers: { email, password },
      });

      if (status === 200) {
        setUserId(userId);
        setUsername(firstname);
        loginUser(token);
        localStorage?.setItem(
          "userInfo",
          JSON.stringify({
            token,
            userId,
            username: firstname,
          })
        );
        toast.success("Login Successful!", {
          position: "bottom-center",
          autoClose: 2000,
        });
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      {!token && (
        <div className="login-container">
          <h1 className="login-heading">Log in to Circleview</h1>
          <form onSubmit={loginHandler} className="login-form">
            <input
              type="email"
              className="input-area w-100"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-area w-100"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-sm btn-primary w-100">
              Login
            </button>
          </form>
          <p>
            <span className="signup-msg">Don't have an account?</span>
            <Link style={{ color: "inherit" }} to="/signup">
              Sign up Now
            </Link>
          </p>
        </div>
      )}
    </>
  );
};
