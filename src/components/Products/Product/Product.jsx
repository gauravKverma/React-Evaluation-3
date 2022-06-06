import React from "react";
import { useContext,useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./product.module.css"

const Product = ({pro}) => {
  const {updateItem, removeItem} = useContext(CartContext)
  const [showAdd, setShowAdd] = useState(true)
  const [showRemove, setShowRemove] = useState(false)

  const addButton = () => {
    updateItem();
    setShowRemove(true);
    setShowAdd(false)
  }
  const removeButton = () => {
    removeItem();
    setShowAdd(true);
    setShowRemove(false)
  }
  const [counter, setCounter] =useState(0)
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`} className={styles.border}>
      <h3 data-cy="product-name">{pro.name}</h3>
      <h6 data-cy="product-description">{pro.description}</h6>
      {showAdd && <button data-cy="product-add-item-to-cart-button" onClick={addButton}>Add To Cart</button>}
      {showRemove && <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCounter(counter+1)}>+</button>
        <span data-cy="product-count">
          {
            counter
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCounter(counter-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={removeButton}>Remove from Cart</button>
      </div>}
    </div>
  );
};

export default Product;
