import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity } = props.product;
  return (
    <div className="product">
      <h4 className="product-name">{name}</h4>
      <p>Price: {price}</p>
      <p> Quantity:{quantity}</p>
      <button className="btn-regular">Remove</button>
    </div>
  );
};

export default ReviewItem;
