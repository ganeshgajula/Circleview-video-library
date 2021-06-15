import { useReducer } from "react";
import { signupReducer } from "../../reducer";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export const Signup = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [signupState, dispatch] = useReducer(signupReducer, initialState);

  const { setLogin, setUsername, setUserId } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();

    const {
      status,
      data: {
        savedUser: { _id, firstname },
      },
    } = await axios.post("https://api-circleview.herokuapp.com/users/signup", {
      firstname: signupState.firstname,
      lastname: signupState.lastname,
      email: signupState.email,
      password: signupState.password,
    });

    if (status === 201) {
      setLogin(true);
      setUserId(_id);
      setUsername(firstname);
      localStorage?.setItem(
        "userInfo",
        JSON.stringify({
          isUserLoggedIn: true,
          username: firstname,
          userId: _id,
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={signupHandler}>
        <input
          type="text"
          className="input-area"
          placeholder="Enter first name"
          value={signupState.firstname}
          onChange={(e) =>
            dispatch({ type: "FIRST_NAME", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="input-area"
          placeholder="Enter last name"
          value={signupState.lastname}
          onChange={(e) =>
            dispatch({ type: "LAST_NAME", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="input-area"
          placeholder="Enter email"
          value={signupState.email}
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
        />
        <input
          type="password"
          className="input-area"
          placeholder="set password"
          value={signupState.password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", payload: e.target.value })
          }
        />
        <button type="submit" className="btn-sm btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};
