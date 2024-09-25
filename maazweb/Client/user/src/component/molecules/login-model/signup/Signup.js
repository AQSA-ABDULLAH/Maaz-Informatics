import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { API_URL, WEBSITE_NAME } from "../../../constant/WebsiteConstants";
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
  const [apiError, setApiError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    const { userName, country, email, password, confirmPassword } = formData;

    if (!userName || !country || !email || !password || !confirmPassword || !isChecked) {
      setError(true);
      return;
    }
    setError(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
      setApiError("API ERROR, Please check your information and try again.");
    }
  };

    // Close the modal
    const closeModal = () => {
      setApiError(""); // Clear the error message when closing
    };

  const closeOtpForm = () => {
    setShowOtpForm(false);
    onClose();
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
                  {error && !formData.userName && (
                    <span className={styles.text_danger}>User Name is required</span>
                  )}
                </div>

                <div className={styles.colItem}>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                  {error && !formData.country && (
                    <span className={styles.text_danger}>Country is required</span>
                  )}
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
                  {error && !formData.email && (
                    <span className={styles.text_danger}>Email is required</span>
                  )}
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
                  {error && !formData.password && (
                    <span className={styles.text_danger}>Password is required</span>
                  )}
                </div>
                <div className={styles.colItem}>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {error && !formData.confirmPassword && (
                    <span className={styles.text_danger}>Confirm Password is required</span>
                  )}
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
                {error && !formData.isChecked && (
                  <span className={styles.text_danger}>You must consent to the processing of your personal information</span>
                )}
              </div>
          </div>

          {/* Modal for API error */}
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

          </div >
        </div >
      )
}
    </>
  );
}

export default Signup;