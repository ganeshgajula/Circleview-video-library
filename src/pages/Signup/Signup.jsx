import { useReducer } from "react";
import { signupReducer } from "../../reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import { toast } from "react-toastify";

export const Signup = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [{ firstname, lastname, email, password }, dispatch] = useReducer(
    signupReducer,
    initialState
  );
  const navigate = useNavigate();

  const allFieldsEntered = firstname && lastname && email && password;

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const { status } = await axios.post(
        "https://api-circleview.herokuapp.com/users/signup",
        {
          firstname,
          lastname,
          email,
          password,
        }
      );

      if (status === 201) {
        toast.success("Sign up successful. Kindly login!", {
          position: "bottom-center",
          autoClose: 2500,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-center",
        autoClose: 3500,
      });
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <form onSubmit={signupHandler} className="signup-form">
        <input
          type="text"
          className="input-area"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) =>
            dispatch({ type: "FIRST_NAME", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="input-area"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) =>
            dispatch({ type: "LAST_NAME", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="input-area"
          placeholder="Enter email"
          value={email}
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
        />
        <input
          type="password"
          className="input-area"
          placeholder="set password"
          value={password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", payload: e.target.value })
          }
        />
        <button
          type="submit"
          className="btn-sm btn-primary w-100"
          style={{ opacity: !allFieldsEntered && 0.6 }}
          disabled={!allFieldsEntered && true}
        >
          Sign Up
        </button>
      </form>
      <p>
        <span className="login-msg">Already have an account?</span>
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};
