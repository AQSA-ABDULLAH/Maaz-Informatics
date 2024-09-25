import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { API_URL, WEBSITE_NAME } from "../../../constant/WebsiteConstants";
import OTP from "../opt-verification/OTP";
import Button from "../../../atoms/button/Button";
import * as validate from "../../../../utils/validations/Validations";

function Signup({ onClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    userName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    consent: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "userName":
        if (!validate.name(value)) {
          errorMessage = "Provide a valid User Name.";
        }
        break;
      case "country":
        if (!validate.name(value)) {
          errorMessage = "Provide a valid Country.";
        }
        break;
      case "email":
        if (!validate.email(value)) {
          errorMessage = "Provide a valid Email.";
        }
        break;
      case "password":
      case "confirmPassword":
        if (!validate.password(value)) {
          errorMessage = "Pasword must have (A-Z), (a-z), (0-9) or sepecial charcter.";
        }
        break;
      default:
        break;
    }

    setError((prevError) => ({
      ...prevError,
      [name]: errorMessage,
    }));

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, country, email, password, confirmPassword } = formData;

    // Validation checks
    if (!userName || !country || !email || !password || !confirmPassword || !isChecked) {
      setError((prevError) => ({
        ...prevError,
        userName: !userName ? "User Name is required." : "",
        country: !country ? "Country is required." : "",
        email: !email ? "Email is required." : "",
        password: !password ? "Password is required." : "",
        confirmPassword: !confirmPassword ? "Confirm Password is required." : "",
        consent: !isChecked ? "You must consent to the processing of your personal information." : "",
      }));
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        password: "Passwords do not match",
      }));
      return;
    }

    try {
      setApiError(""); // Clear any previous API error
      const response = await axios.post(`${API_URL}/api/user/user_signUp`, formData);
      console.log("API response:", response.data);

      const token = response.data.token; // Assuming the token is in response.data.token
      localStorage.setItem("access_token", token);

      setEmail(formData.email);
      setShowOtpForm(true);
    } catch (error) {
      setApiError("API ERROR, Please check your information and try again.");
    }
  };

  const closeModal = () => {
    setApiError(""); // Clear the error message when closing
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
                <div className={styles.colItem}>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="UserName"
                  />
                  {error.userName && <span className={styles.text_danger}>{error.userName}</span>}
                </div>

                <div className={styles.colItem}>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                  {error.country && <span className={styles.text_danger}>{error.country}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.colMail}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  {error.email && <span className={styles.text_danger}>{error.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.colItem}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {error.password && <span className={styles.text_danger}>{error.password}</span>}
                </div>
                <div className={styles.colItem}>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {error.confirmPassword && <span className={styles.text_danger}>{error.confirmPassword}</span>}
                </div>
              </div>

              <div className={styles.check}>
                <div className={styles.checked}>
                  <label>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    &nbsp; By clicking submit, I consent to my personal information being
                    processed by {WEBSITE_NAME} to address my request. &nbsp;
                  </label>
                  {error.consent && <span className={styles.text_danger}>{error.consent}</span>}
                </div>
              </div>

              {apiError && (
                <div className={styles.backdrop}>
                  <div className={styles.alertModal}>
                    <div>{apiError}</div>
                    <button className={styles.closeButton} onClick={closeModal}>Close</button>
                  </div>
                </div>
              )}

              <div className={styles.btns}>
                <Button
                  btnClick={handleSubmit}
                  size="16px"
                  radius="5px"
                  btnText="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
