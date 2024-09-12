import React, { useState } from "react";
import axios from "axios";  // Import axios
import styles from "./contactusform.module.css";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // For status feedback

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post form data to the backend
      const response = await axios.post(
        "http://localhost:5000/api/contactus/send-message",
        formData
      );

      if (response.status === 201) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          name: "",
          country: "",
          email: "",
          phoneno: "",
          message: "",
        }); // Clear the form after success
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country" className={styles.label}>Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your country"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneno" className={styles.label}>Phone No</label>
            <input
              type="tel"
              id="phoneno"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Type your message here..."
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Send Message</button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </form>
    </div>
  );
}

export default ContactUsForm;

