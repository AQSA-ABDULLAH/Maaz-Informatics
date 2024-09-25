import React, { useState } from 'react';
import axios from 'axios'; 
import Button from "../../../atoms/button/Button";
import Swal from 'sweetalert2';
import styles from "./login.module.css";
import * as validate from "../../../../utils/validations/Validations"; 
import { API_URL } from '../../../constant/WebsiteConstants';

function Login({ handleSignupClick, handleForgotPasswordClick, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: "", password: "" }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));

    // Reset error when user types
    if (name === "email" && error.email) {
      setError({ ...error, email: "" });
    }
    if (name === "password" && error.password) {
      setError({ ...error, password: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    // Validate email and password
    let hasError = false;
    if (!validate.email(email)) {
      setError((prev) => ({ ...prev, email: "Provide a valid email." }));
      hasError = true;
    }
    if (!validate.password(password)) {
      setError((prev) => ({ ...prev, password: "Enter Valid Password" }));
      hasError = true;
    }

    if (hasError) return;

    // API call for login
    try {
      const response = await axios.post(`${API_URL}/api/user/user_signIn`, {
        email,
        password,
      });

      // Check for successful response and token
      if (response.status === 200 && response.data.token) {
        // Store the token in local storage
        localStorage.setItem("access_token", response.data.token);

        console.log("API response:", response.data);
        Swal.fire('Login Successful!', 'You have successfully logged in.', 'success').then(() => {
          window.location.reload();
        });

        onClose(); 
      } else {
        // Handle unexpected response
        Swal.fire('Login Failed!', 'Please check your email and password.', 'error');
      }

    } catch (error) {
      // Handle API error
      Swal.fire('Login Failed!', 'Please check your internet connection and try again.', 'error');
    }

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
      {error.email && <span className={styles.text_danger}>{error.email}</span>} {/* Show email error */}

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
      {error.password && <span className={styles.text_danger}>{error.password}</span>}

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