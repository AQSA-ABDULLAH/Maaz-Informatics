import React, { useState } from 'react';
import Button from "../../../atoms/button/Button";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import styles from "./login.module.css";

function Login({ handleSignupClick, handleForgotPasswordClick, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    Swal.fire('Login Successful!', 'You have successfully logged in.', 'success');
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>Welcome Back!</div>
      <p className="subtitle">Stay up-to-date with the latest news by signing in to our newsletter.</p>
      <input
        name="email"
        type="text"
        placeholder="Email"
        required
        onChange={handleChange}
        value={loginData.email}
      />
      <div id="passwordInput">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          onChange={handleChange}
          value={loginData.password}
        />
        <img
          className={styles.password_toggle_icon}
          alt="Toggle visibility"
          onClick={togglePasswordVisibility}
          src={process.env.PUBLIC_URL + "/assest/images/login-model/View_icon.png"}
        />
      </div>
      <label>
        <input type="checkbox" name="keepLoggedIn" />
        Keep me logged in 
        <a href="#" onClick={handleForgotPasswordClick}> Forgot Password?</a>
      </label>

      <Button btnText="LOGIN" primary radius="0px" type="submit" />

      <small>
        <br />
        Don't have an account? 
        <Button
          btnText={"Signup"}
          textColor={"#9f29bd"}
          size={"14px"}
          btnClick={handleSignupClick}
        />
      </small>
    </form>
  );
}

export default Login;


