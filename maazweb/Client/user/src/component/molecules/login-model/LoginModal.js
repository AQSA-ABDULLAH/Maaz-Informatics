import React, { useState, useEffect } from "react";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithEmail } from "../../../redux/containers/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import "./LoginModal.css";
import Signup from "./signup/Signup";
import Login from "./login/Login";

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signUpWithEmail(loginData));
      if (reduxState.isSignedIn) {
        setAlertMessage("Login successful!");
        setTimeout(() => {
          setAlertMessage("");
        }, 2000);
      }
    } catch (error) {
      setAlertMessage("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    if (reduxState.isSignedIn) {
      navigate("/");
    }
  }, [reduxState.isSignedIn, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignupClick = () => {
    setIsSignupMode(true);
  };

  const handleLoginClick = () => {
    setIsSignupMode(false);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content1">
        <div className="logo-container">
          <img height="60px" alt="Logo" src={process.env.PUBLIC_URL + "/assest/logo/logo.jpg"} />
        </div>
        <div className="login-form-container">
          {isSignupMode ? (
            <>
              <Signup onClose={onClose} /> {/* Pass onClose prop to Signup */}
            </>
          ) : (
            <Login
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              togglePasswordVisibility={togglePasswordVisibility}
              loginData={loginData}
              showPassword={showPassword}
              handleSignupClick={handleSignupClick}
              onClose={onClose}
            />
          )}
        </div>
      </div>
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
    </>
  );
}

export default LoginModal;


