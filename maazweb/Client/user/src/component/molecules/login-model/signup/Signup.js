import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import * as validate from "../../../../utils/validations/Validations";
import { API_URL } from "../../../constant/WebsiteConstants";
import OTP from "../opt-verification/OTP";
import Button from "../../../atoms/button/Button";

function Signup({ onClose }) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsChecked(checked);
    } else {
      switch (name) {
        case "userName":
        case "country":
          if (!validate.name(value)) {
            setError(`${name} cannot have special characters or digits`);
          } else {
            setError("");
          }
          break;
        case "email":
          if (!validate.email(value)) {
            setError("Email must fulfill requirements");
          } else {
            setError("");
          }
          break;
        case "password":
        case "confirmPassword":
          if (!validate.password(value)) {
            setError(`${name} must fulfill requirements`);
          } else {
            setError("");
          }
          break;
        default:
          break;
      }
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isChecked) {
      setError("You must consent to the processing of your personal information");
      return;
    }
  
    try {
      setError("");
      const response = await axios.post(`${API_URL}/api/user/user_signUp`, formData);
      console.log("API response:", response.data);
  
      // Assuming the token is in response.data.token
      const token = response.data.token;
  
      // Store the token in local storage
      localStorage.setItem("access_token", token);
  
      setEmail(formData.email);
      setShowOtpForm(true);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      Swal.fire("Sign Up Failed!", "Please check your information and try again.", "error");
      setError("An error occurred. Please try again.");
    }
  };
  

  const closeOtpForm = () => {
    setShowOtpForm(false);
    onClose();
  };


  return (
    <>
      {showOtpForm ? (
        <OTP email={email} closeModal={closeOtpForm} />
      ) : (
        <div className={styles.login_form_container}>
          <div className={styles.login_form}>
            <div>Be the first to hear!</div>
            <p className={styles.subtitle}>
              Stay up-to-date with the latest news by signing in to our newsletter.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <input
                  onChange={handleChange}
                  type="text"
                  name="userName"
                  value={formData.userName}
                  placeholder="UserName"
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="country"
                  value={formData.country}
                  placeholder="Country"
                />
              </div>

              <div className={styles.formRow}>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                />
              </div>

              <div className={styles.formRow}>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                />
                <input
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                />
              </div>

              <div className={styles.check}>
                <label>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={isChecked}
                    onChange={handleChange}
                  />
                  By clicking submit, I consent to my personal information being
                  processed by Touchkin to address my request
                </label>
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <div className={styles.btns}>
                <Button btnClick={handleSubmit} size="16px" radius="5px" btnText="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;

