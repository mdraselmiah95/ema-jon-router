import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity } = props.product;
  return (
    <div>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p> Quantity:{quantity}</p>
    </div>
  );
};

export default ReviewItem;
