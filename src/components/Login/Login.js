import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  console.log(location.state?.form);
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new to eam-john ?<Link to="/register">Create Account</Link>
        </p>
        <div>------------or------------</div>
        <button className="btn-regular" onClick={signInUsingGoogle}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
