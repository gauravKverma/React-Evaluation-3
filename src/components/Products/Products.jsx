import React, {useState} from "react";
import { useEffect } from "react";
import Product from "./Product/Product"
import styles from "./products.module.css"

const Products = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const list = async () => {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      setProducts(data);
    }
    list();
  },[])
  return (
    <div>
      <h1>Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <Product pro={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
