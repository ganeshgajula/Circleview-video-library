import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const user = {
  username: "ganesh",
  password: "gajula",
};

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("login"));
    loginStatus?.isUserLoggedIn && setLogin(true);
  }, []);

  const loginUserWithCredentials = (username, password) => {
    if (user.username === username && user.password === password) {
      setLogin(true);
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, setLogin, loginUserWithCredentials }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
