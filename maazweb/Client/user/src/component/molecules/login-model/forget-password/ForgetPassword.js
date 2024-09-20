import React, { useState } from "react";
import Button from "../../../atoms/button/Button";
import axios from "axios";
import { API_URL } from "../../../constant/WebsiteConstants";
import styles from "./forgetpassword.module.css";

function ForgetPassword({ onClose, onOtpSent }) {  // Add onOtpSent prop to trigger OTP form
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(`${API_URL}/api/user/forget-password`, {
        email,
      });
      alert("Password reset link has been sent to your email.");
      onOtpSent(email); // Trigger OTP form and pass email to ForgetPasswordOtp
    } catch (error) {
      setErrorMessage("Failed to send reset link. Please try again.");
      console.error("Error resetting password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Button btnText={loading ? "Sending..." : "Send OTP"} primary type="submit" />
      <small>
        <a href="#" onClick={onClose}>Back to Login</a>
      </small>
    </form>
  );
}

export default ForgetPassword;

