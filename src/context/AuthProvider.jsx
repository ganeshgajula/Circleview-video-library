import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("userInfo"));
    loginStatus?.isUserLoggedIn && setLogin(true);
    loginStatus?.userId && setUserId(loginStatus.userId);
    loginStatus?.username && setUsername(loginStatus.username);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        username,
        userId,
        setLogin,
        setUsername,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
