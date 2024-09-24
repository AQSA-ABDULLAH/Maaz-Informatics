import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from './Slider.module.css';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import Button from "../../atoms/buttons/Button";
import { API_URL } from "../../../constants/WebsiteConstants";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SliderForm = ({ onClose }) => {
  const [Image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (Image) {
      uploadFile(Image);
    }
  }, [Image]);

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, 'Team/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log('File available at', downloadURL);
          setUploadProgress(0);
        });
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      setError(true);
      return false;
    }

    const teamData = {
      image: imageUrl,
    };

    try {
      const response = await axios.post(`${API_URL}/api/slider/add-slider`, teamData, {
        headers: { 'Authorization': localStorage.getItem('token') }
      });

      if (response.data.status === "success") {
        Swal.fire('Add New Slider!', 'You have successfully added a new Slider.', 'success');
        navigate('/');
      } else {
        Swal.fire('Error', 'Failed to submit data. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error submitting data: ", error);
      Swal.fire('FAILED!',
        'An error occurred while submitting the data. </br> Plz Check your internet connection and try again.',
        'error'
      );
    }
  };

  return (
    <>
      <div className={style.first_row}>
        <div className={style.image}>
          <input
            type="file"
            className={style.form_image}
            id="Image"
            name="Image"
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <label htmlFor="Image" className={style.image_view}>
            {Image ? (
              <img
                src={URL.createObjectURL(Image)}
                alt="Uploaded"
              />
            ) : (
              <div className={style.image_container}>
                <MdCloudUpload className={style.icon} />
                <p>Click here to upload an image</p>
              </div>
            )}
          </label>
          {error && !Image && <span className={style.text_danger}>Please select an image.</span>}
        </div>


        {/* Progress Bar */}
        {uploadProgress > 0 && (
          <div className={style.progressBarContainer}>
            <div className={style.progressBar} style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}

        <div className={style.row}>
          <Button
            btnClick={onClose}
            btnText="CANCEL"
            size="14px"
            secondary
            radius="5px"
          />

          <Button
            btnClick={handleSubmit}
            btnText="SUBMIT"
            size="14px"
            primary
            radius="5px"
          />
        </div>
      </div>
    </>
  );
};

export default SliderForm;
