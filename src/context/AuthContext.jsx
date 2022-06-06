import React, { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(false)
  const navigate = useNavigate();

  const login = (email,password) => {
    setAuth(true);
    navigate("/");
  }

  const logout = () => {
    setAuth(false);
  }
  return <AuthContext.Provider value={{auth,login,logout}}>{children}</AuthContext.Provider>;
};
