import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import Cart from "../Cart/Cart";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="product-container"></div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
