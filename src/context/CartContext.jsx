import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const updateItem = () => {
    setCount(count+1)
  }
  
  const removeItem = () => {
    setCount(count-1);
  }

  return <CartContext.Provider value={{count,updateItem,removeItem}}>{children}</CartContext.Provider>;
};
