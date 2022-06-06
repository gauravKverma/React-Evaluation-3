import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {auth} =useContext(AuthContext);
  const {login,logout} = useContext(AuthContext);

  const handleClick= () => {
    if(auth){
      logout();
      
    }
    else{
      login("absd", "dsadda");
      // <Navigate to="/login"/>
    }
  }
  return (
    <div>
      <Navbar/>
      <input data-cy="login-email" placeholder="email"/> <br />
      <input data-cy="login-password" placeholder="password" type="password"/> <br />
      <button data-cy="login-submit" onClick={handleClick}>Login</button> <br />
    </div>
  );
};

export default Login;
