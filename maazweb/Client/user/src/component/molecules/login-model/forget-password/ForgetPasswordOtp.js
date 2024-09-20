import React, { useState } from "react";
import axios from "axios";
import styles from "../opt-verification/otp.module.css";
import { API_URL } from "../../../constant/WebsiteConstants";
import Swal from "sweetalert2";

function ForgetPasswordOtp({ email, onClose, onOtpSuccess }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      // Ensure the input is a number
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to next input if current input is filled
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = parseInt(otp.join(""), 10); // Ensure OTP is sent as a number

    if (isNaN(enteredOtp) || otp.join("").length !== 4) {
      Swal.fire("Invalid OTP", "Please enter a valid 4-digit OTP", "error");
      return;
    }

    try {
      console.log(email, enteredOtp);  // For debugging

      const response = await axios.post("http://localhost:5000/api/user/reset-pasword", {
        email,
        otp: enteredOtp,
      });

      console.log("API response:", response);

      if (response.data.success || response.data.status === "success") {
        onOtpSuccess();
      } else if (response.data.message) {
        Swal.fire("OTP Verification Failed", response.data.message, "error");
      } else {
        Swal.fire("OTP Verification Failed", "Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 404) {
        Swal.fire("API Not Found", "The endpoint you are trying to access was not found.", "error");
      } else {
        Swal.fire("Error", "Failed to verify OTP. Please try again.", "error");
      }
    }
  };

  return (
    <div className={styles.otpContainer}>
      <h2>Check your Email</h2>
      <p>Enter the 4-digit code sent to your email</p>
      <div className={styles.otpInputs}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className={styles.otpInput}
          />
        ))}
      </div>
      <button onClick={handleSubmit} className={styles.submitOtpBtn}>
        Confirm OTP
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <small>
        <a href="#" onClick={onClose}>Back to Login</a>
      </small>
    </div>
  );
}

export default ForgetPasswordOtp;