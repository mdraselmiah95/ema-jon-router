import React, { useEffect, useState } from "react";
import "./Order.css";
const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Total Orders: {orders.length}</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Name: {order.name}: Email: {order.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
