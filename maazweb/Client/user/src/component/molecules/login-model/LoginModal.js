import React, { useState } from "react";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import ForgetPassword from "./forget-password/ForgetPassword";
import ForgetPasswordOtp from "./forget-password/ForgetPasswordOtp";
import UpdatePassword from "./forget-password/UpdatePassword"; // Import UpdatePassword component

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [isUpdatePasswordMode, setIsUpdatePasswordMode] = useState(false); // State for UpdatePassword mode
  const [emailForOtp, setEmailForOtp] = useState(""); // Store email for OTP verification

  const handleSignupClick = () => {
    setIsSignupMode(true);
    setIsForgotPasswordMode(false);
    setIsOtpMode(false);
    setIsUpdatePasswordMode(false);
  };

  const handleLoginClick = () => {
    setIsSignupMode(false);
    setIsForgotPasswordMode(false);
    setIsOtpMode(false);
    setIsUpdatePasswordMode(false);
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordMode(true);
    setIsSignupMode(false);
    setIsOtpMode(false);
    setIsUpdatePasswordMode(false);
  };

  const handleOtpSent = (email) => {
    setIsOtpMode(true); // Switch to OTP mode when the reset link is sent
    setIsForgotPasswordMode(false);
    setEmailForOtp(email); // Save the email to pass it to ForgetPasswordOtp
  };

  const handleOtpSuccess = () => {
    setIsUpdatePasswordMode(true); // Switch to UpdatePassword mode on OTP success
    setIsOtpMode(false);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content1">
        <div className="logo-container">
          <img
            height="60px"
            alt="Logo"
            src={process.env.PUBLIC_URL + "/assest/logo/logo.jpg"}
          />
        </div>
        <div className="login-form-container">
          {isSignupMode ? (
            <Signup onClose={onClose} />
          ) : isUpdatePasswordMode ? (
            <UpdatePassword email={emailForOtp} onClose={handleLoginClick} />
          ) : isOtpMode ? (
            <ForgetPasswordOtp
              email={emailForOtp}
              onClose={handleLoginClick}
              onOtpSuccess={handleOtpSuccess}
            />
          ) : isForgotPasswordMode ? (
            <ForgetPassword onClose={handleLoginClick} onOtpSent={handleOtpSent} />
          ) : (
            <Login
              handleSignupClick={handleSignupClick}
              handleForgotPasswordClick={handleForgotPasswordClick}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default LoginModal;

