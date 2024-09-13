import React, { useState } from "react";
import axios from "axios";
import styles from "./form.module.css";
import Button from "../button/Button";
import * as validate from "../../../utils/validations/Validations";

const Form = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsChecked(checked);
    } else {
      switch (name) {
        case "userName":
        case "country":
          if (!validate.name(value)) {
            setError(name + " cannot have special characters or digits");
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
            setError(name + " must fulfill requirements");
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
    console.log("submit");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isChecked) {
      setError("You must consent to the processing of your personal information");
      return;
    }

    try {
      // Clear previous errors
      setError("");

      // Submit form data
      const response = await axios.post("http://localhost:5000/api/user/user_signUp", formData);
      console.log("API response:", response.data);

    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="UserName"
        />
        <input
          onChange={handleChange}
          type="text"
          name="country"
          placeholder="Country"
        />
      </div>

      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>

      <div className={styles.formRow}>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
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
          By clicking submit, I consent to my personal information being processed by Touchkin to address my request
        </label>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.btns}>
        <Button btnClick={handleSubmit} size="16px" radius="5px" btnText="Sign Up" />
      </div>
    </form>
  );
};

export default Form;


