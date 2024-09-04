import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddSliderForm.module.css";
import Button from "../buttons/Button";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";

const AddSliderForm = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imgperc, setImagePrec] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    image && uploadFile(image, "imageUrl");
  }, [image]);
 

  // FIREBASE SETUP HERE
  const uploadFile = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, 'SliderImages/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setImagePrec(progress); // Update image upload progress
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL); // Update imageUrl directly
          console.log('File available at', downloadURL);
        });


      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('content', content);
    formData.append('image', imageUrl);


    try {
      const response = await axios.post("https://transport-hub-tawny.vercel.app/api/user/create-slider", formData, {
          headers: { 'Authorization': localStorage.getItem('token') }
      });


      if (response.data.status === "success") {
          alert("Data submitted successfully!");
      } else {
          alert("Failed to submit data. Please try again.");
      }

      if (response.data.code === 403 && response.data.message === "Token Expired") {
          localStorage.setItem('token', null);
      }
  } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the data. Please try again.");
  }
  };






  return (
    <>
      <div className={styles.addFormContainer}>
        <FormTop text={"new slider"} />
        <form action="" className={styles.addForm}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="">background image</label> {imgperc > 0 && "Uploading " + imgperc + "%"}
              <div className={`${styles.imgUpload} ${styles.sliderUpload}`}>
                <input type="file" name="sliderImg" id="sliderImg" accept="image/png, image/jpeg"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="sliderImg">
                  <img
                    src="./assets/image/trainers/photograph.svg"
                    alt="icon"
                  />
                </label>
              </div>
            </div>

            <div className={styles.formField}>
              <div className={styles.colItem}>
                <label htmlFor="heading">title</label>
                <textarea
                  name="heading"
                  id="heading"
                  rows={4}
                  className={styles.sliderTextArea}
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                ></textarea>
              </div>

              <div className={`${styles.colItem} ${styles.minorSpace}`}>
                <label htmlFor="content">caption</label>
                <textarea
                  name="content"
                  id="content"
                  rows={4}
                  className={styles.sliderTextArea}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <FormBottom text={"Save Slider"} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export const FormBottom = ({handleSubmit }) => {
  return (
    <>
      <div className={styles.formBottom}>
        <Button btnText="Cancel" textColor="red" />
        {/* <Button btnText={text} bgColor="#2E65F3" radius="5px" onClick={handleSubmit} /> */}
        <button type="button" className="btn btn-success" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
};

export const FormTop = ({ text }) => {
  return (
    <>
      <div className={styles.formTop}>
        <h5>{text}</h5>
      </div>
    </>
  );
};

export default AddSliderForm;


