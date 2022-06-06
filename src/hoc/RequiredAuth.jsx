import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {auth} =useContext(AuthContext);
  const navigate = useNavigate();
  if(auth){
    return children
  }
  else{
    return <Navigate to="/login"/>
    
  }
};

export default RequiredAuth;
