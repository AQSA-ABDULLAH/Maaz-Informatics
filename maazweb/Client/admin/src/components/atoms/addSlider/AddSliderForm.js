// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./AddSliderForm.module.css";
// import Button from "../buttons/Button";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { app } from "../../../firebase";
// import { API_URL } from "../../../constants/WebsiteConstants";
// import { MdCloudUpload } from "react-icons/md";

// const AddSliderForm = () => {
//   const [Image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const [error, setError] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);

  
//   useEffect(() => {
//     if (Image) {
//         uploadFile(Image);
//     }
// }, [Image]);

// const uploadFile = (file) => {
//   const storage = getStorage(app);
//   const storageRef = ref(storage, 'Team/' + file.name);
//   const uploadTask = uploadBytesResumable(storageRef, file);

//   uploadTask.on('state_changed',
//       (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//       },
//       (error) => {
//           console.error('Error uploading file:', error);
//       },
//       () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//               setImageUrl(downloadURL);
//               console.log('File available at', downloadURL);
//               setUploadProgress(0);
//           });
//       }
//   );
// }

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageUrl) {
//       setError(true);
//       return false;
//   }

//   const teamData = {
//     image: imageUrl,
// };


//     try {
//       // API call to submit the form data
//       const response = await axios.post(`${API_URL}/api/slider/add-slider`, teamData, {
//         headers: { 'Authorization': localStorage.getItem('token') }
//     });

//       if (response.data.status === "success") {
//         alert("Slider added successfully!");
//         resetForm();
//       } else {
//         alert("Failed to add slider. Please try again.");
//       }

//       // Handle token expiration (if needed)
//       if (response.data.code === 403 && response.data.message === "Token Expired") {
//         localStorage.setItem("token", null);
//       }
//     } catch (error) {
//       console.error("Error submitting slider:", error);
//       alert("An error occurred while submitting the slider. Please try again.");
//     }
//   };

//   const resetForm = () => {
//     setImage(null);
//     setImageUrl("");
//     setUploadProgress(0);
//   };

//   const handleFileChange = (e) =>{
//     console.log("asjdaj")
//   }

//   // Handle file validation
//   // const handleFileChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     if (!file.type.startsWith("image/")) {
//   //       alert("Please upload a valid image file.");
//   //       return;
//   //     }

//   //     if (file.size > 5 * 1024 * 1024) {
//   //       alert("File size exceeds 5MB. Please upload a smaller image.");
//   //       return;
//   //     }

//   //     setImage(file);
//   //   }
//   // };

//   return (
//     <div className={styles.addFormContainer}>
//       <FormTop text={"new slider"} />
//       <form className={styles.addForm} onSubmit={handleSubmit}>
//       <div className={styles.first_row}>
//                     <div className={styles.image}>
//                         <input
//                             type="file"
//                             className={styles.form_image}
//                             id="Image"
//                             name="Image"
//                             accept="image/png, image/jpeg"
//                             onChange={(e) => setImage(e.target.files[0])}
//                         />

//                         <div className={styles.image_view}>
//                             {Image ? (
//                                 <img
//                                     src={URL.createObjectURL(Image)}
//                                     alt="Uploaded"
//                                 />
//                             ) : (
//                                 <div className={styles.image_container}>
//                                     <MdCloudUpload className={styles.icon} />
//                                     <p>click here to upload an image</p>
//                                 </div>
//                             )}
//                         </div>
//                         {error && !Image && <span className={styles.text_danger}>Please select an image.</span>}
//                     </div>

//                     {/* Progress Bar */}
//                     {uploadProgress > 0 && (
//                         <div className={styles.progressBarContainer}>
//                             <div className={styles.progressBar} style={{ width: `${uploadProgress}%` }}></div>
//                         </div>
//                     )}
//         </div>

//         <FormBottom handleSubmit={handleSubmit} />
//       </form>
//     </div>
//   );
// };

// export const FormBottom = ({ handleSubmit }) => (
//   <div className={styles.formBottom}>
//     <Button btnText="Cancel" textColor="red" btnClick={() => window.location.reload()} />
//     <Button btnText="Submit" primary radius="5px" btnClick={handleSubmit} />
//   </div>
// );

// export const FormTop = () => (
//   <div className={styles.formTop}>
//     <h5>Add New Slider</h5>
//   </div>
// );

// export default AddSliderForm;

