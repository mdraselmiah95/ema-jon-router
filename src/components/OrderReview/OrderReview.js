import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  return (
    <div>
      <h1>{products.length}</h1>
      <h3>{cart.length}</h3>
      <h2>This is Order Review</h2>
    </div>
  );
};

export default OrderReview;
