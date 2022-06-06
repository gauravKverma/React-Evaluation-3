import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link, Navigate, useNavigate} from "react-router-dom"
import Products from "../Products/Products";
import { AuthContext } from "../../context/AuthContext";
import styles from "./navbar.module.css"

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate= useNavigate();
  const {auth,login,logout} =useContext(AuthContext);

  const {count} = useContext(CartContext);
  const handleClick = () => {
    if(!auth){
      <Navigate to="/login"/>
    }
    else{
      logout();
    }
  }
  return (
    <div data-cy="navbar" className={styles.flex}>
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">{`Cart : ${count}`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>{auth ? "LogOut" : "Login"}</button>
      
    </div>
  );
};

export default Navbar;
