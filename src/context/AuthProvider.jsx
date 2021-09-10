import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const { token, userId, username } = JSON.parse(
      localStorage.getItem("userInfo")
    ) || { token: null, username: null, userId: null };
    token && setToken(token);
    userId && setUserId(userId);
    username && setUsername(username);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        username,
        userId,
        setToken,
        setUsername,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
