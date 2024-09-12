import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddSliderForm.module.css";
import Button from "../buttons/Button";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import { API_URL } from "../../../constants/WebsiteConstants";
import { MdCloudUpload } from "react-icons/md";

const AddSliderForm = () => {
  const [image, setImage] = useState(null);
  const [imgperc, setImagePerc] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Upload image to Firebase when the `image` state changes
  useEffect(() => {
    if (image) {
      uploadFile(image);
    }
  }, [image]);

  // Function to upload file to Firebase
  const uploadFile = (file) => {
    const storage = getStorage(app); // Get Firebase storage instance
    const storageRef = ref(storage, "SliderImages/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePerc(progress); // Update progress
        setIsUploading(true); // Set uploading status
      },
      (error) => {
        console.error("Error uploading file:", error);
        setIsUploading(false);
      },
      () => {
        // Once upload completes, get the download URL of the image
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL); // Set image URL
          setIsUploading(false);
          console.log("Uploaded Image URL:", downloadURL); // Log image URL for debugging
        });
      }
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please wait until the image is fully uploaded.");
      return;
    }

    try {
      const payload = {
        imageUrl: imageUrl,
      };

      // Make the API call to submit the form data
      const response = await axios.post(`${API_URL}/api/slider/add-slider`, payload, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.data.status === "success") {
        alert("Slider added successfully!");
      } else {
        alert("Failed to add slider. Please try again.");
      }

      // Handle token expiration (if needed)
      if (response.data.code === 403 && response.data.message === "Token Expired") {
        localStorage.setItem("token", null);
      }
    } catch (error) {
      console.error("Error submitting slider:", error);
      alert("An error occurred while submitting the slider. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.addFormContainer}>
        <FormTop text={"new slider"} />
        <form action="" className={styles.addForm} onSubmit={handleSubmit}>
          <div className={styles.first_row}>
            <div className={styles.image}>
              <input
                type="file"
                className={styles.form_image}
                id="Image"
                name="Image"
                accept="image/png, image/jpeg"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <div className={styles.image_view}>
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Uploaded" />
                ) : (
                  <div className={styles.image_container}>
                    <MdCloudUpload className={styles.icon} />
                    <p>Click here to upload an image</p>
                  </div>
                )}
              </div>
            </div>

            {imgperc > 0 && (
              <div>
                Uploading: {imgperc}% {/* Show the upload progress */}
              </div>
            )}
          </div>

          {/* Form Submit Button */}
          <FormBottom handleSubmit={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export const FormBottom = ({ handleSubmit }) => {
  return (
    <div className={styles.formBottom}>
      <Button btnText="Cancel" textColor="red" />
      <Button btnText="Submit" primary radius="5px" btnClick={handleSubmit} />
    </div>
  );
};

export const FormTop = () => {
  return (
    <div className={styles.formTop}>
      <h5>Add New Slider</h5>
    </div>
  );
};

export default AddSliderForm;
