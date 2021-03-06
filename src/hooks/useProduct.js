import { useEffect, useState } from "react";

/* const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //return necessary thing
  return [products];
};

export default useProducts;
 */

const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return [products];
};

export default useProduct;
