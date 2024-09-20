import React, { useState } from "react";
import axios from "axios";
import styles from "./forgetpassword.module.css";
import { API_URL } from "../../../constant/WebsiteConstants";
import Swal from "sweetalert2";
import "../../../../App.css";

function UpdatePassword({ email, onClose }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
      const response = await axios.patch(`${API_URL}/api/user/update-password`, {
        email,
        password,
        confirmPassword,
      });

      if (response.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password updated successfully!",
          customClass: {
            popup: "my-custom-swal",  // Apply your custom class here
          },
        });

        onClose();  // This will close the modal and return to the login page
      } else {
        Swal.fire("Error", "Failed to update the password. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      Swal.fire("Error", "Failed to update password. Please try again.", "error");
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Set a new password</h2>
        <p className={styles.subtitle}>Create a new password. Ensure it differs from previous ones for security</p>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button onClick={handleUpdatePassword} className={styles.submitBtn}>
          Update Password
        </button>
      </div>
    </div>
  );
}

export default UpdatePassword;
