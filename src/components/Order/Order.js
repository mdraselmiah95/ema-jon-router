import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Order.css";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
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
