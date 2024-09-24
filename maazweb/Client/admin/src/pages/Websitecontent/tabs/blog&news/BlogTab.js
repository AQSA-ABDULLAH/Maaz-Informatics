import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase";
import Button from "../../../../components/atoms/buttons/Button";
import { useNavigate } from 'react-router-dom';
import styles from "./blogtab.module.css";
import { API_URL } from "../../../../constants/WebsiteConstants";
import { category as validateCategory, title as validateTitle } from "../../../../utils/validations/Validations";

const BlogTab = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [heading, setHeading] = useState("");
    const [category, setCategory] = useState("");  
    const [writtenby, setWrittenby] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handelImage = () => {
        inputRef.current.click();
    }

    useEffect(() => {
        image && uploadFile(image, "imageUrl");
    }, [image]);


    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'BlogImages/' + file.name);
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
                    setImageUrl(downloadURL); // Update imageUrl directly
                    console.log('File available at', downloadURL);
                    setUploadProgress(0);
                });


            }
        );
    }


    // API SETUP
    const handleSubmit = async (e) => {
        e.preventDefault();


        // Check if required fields are filled
        if (!imageUrl || !heading || !category || !writtenby || !content) {
            setError(true);
            return;
        }
        setError(false);

        // Validation checks
        if (!validateTitle(heading)) {
            Swal.fire('Validation Error', 'Please provide a valid title (letters and spaces only).', 'error');
            return;
        }
        if (!validateCategory(category)) { 
            Swal.fire('Validation Error', 'Please provide a valid category (Letters Only).', 'error');
            return;
        }
        if (!validateTitle(writtenby)) {
            Swal.fire('Validation Error', 'Please provide a valid name for the author.', 'error');
            return;
        }

        const blogData = {
            image: imageUrl,
            heading,
            category,
            writtenby,
            content
        };


        try {
            const response = await axios.post(`${API_URL}/api/blogs/create-blog`, blogData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.status === "success") {
                Swal.fire(
                    'Add New Blog!',
                    'You have successfully added a new blog.',
                    'success'
                );
                navigate('/');
            } else {
                alert("Failed to submit data. Please try again.");
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }

        } catch (error) {
            console.error("An error occurred while submitting the data:", error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };






    return (
        <>
            <section className={styles.blogContainer}>
                <div className={styles.addFormContainer}>
                    <FormTop text={"Write New Blog"} />
                    <form action="" className={styles.addForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="">background image</label>
                                <div className={`${styles.imgUpload} ${styles.sliderUpload}`} onClick={handelImage}>
                                    {image ? (
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="icon"
                                        />
                                    ) : (
                                        <label htmlFor="sliderImg">
                                            <MdCloudUpload className={styles.icon} />
                                        </label>
                                    )}

                                    <input type="file" name="sliderImg" id="sliderImg"
                                        accept="image/png, image/jpeg"
                                        ref={inputRef}
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />

                                </div>

                                {/* Progress Bar */}
                                {uploadProgress > 0 && (
                                    <div className={styles.progressBarContainer}>
                                        <div className={styles.progressBar} style={{ width: `${uploadProgress}%` }}></div>
                                    </div>
                                )}
                                {error && !image && <span className={styles.text_danger}>Plz Select Any Image</span>}
                            </div>

                            <div className={`${styles.formField} ${styles.formInput}`}>
                                <div className={styles.colItem}>
                                    <label htmlFor="heading">Title <span>(word limit : 200)</span></label>
                                    <input type="text"
                                        name="heading"
                                        id="heading"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={heading}
                                        onChange={(e) => setHeading(e.target.value)}
                                    />

                                    {error && !heading && <span className={styles.text_danger}>Heading is required</span>}
                                </div>

                                <div className={styles.colItem}>
                                    <label htmlFor="category">Category</label>
                                    <input type="text"
                                        name="category"
                                        id="category"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    {error && !category && <span className={styles.text_danger}>Select Any category</span>}
                                </div>

                                <div className={styles.colItem}>
                                    <label htmlFor="writtenby">Written By</label>
                                    <input type="text"
                                        name="writtenby"
                                        id="writtenby"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={writtenby}
                                        onChange={(e) => setWrittenby(e.target.value)}
                                    />
                                    {error && !writtenby && <span className={styles.text_danger}>Writer name required</span>}
                                </div>
                            </div>
                        </div>

                        <div className={styles.minorSpace}>
                            <label htmlFor="content">content <span>(word limit : 5000)</span></label>
                            <textarea
                                name="content"
                                id="content"
                                rows={8}
                                className={styles.sliderTextArea}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            {error && !content && <span className={styles.text_danger}>Description required</span>}
                        </div>
                    </form>
                    <FormBottom text={"Save Slider"} handleSubmit={handleSubmit} />
                </div>
            </section>
        </>
    );
};

export const FormBottom = ({ handleSubmit }) => {
    return (
        <>
            <div className={styles.formBottom}>
                <Button btnText="Cancel" textColor="#7A28C2" />
                <button type="button" className={styles.uploadbtn} onClick={handleSubmit}>
                    UPLOAD BLOG
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

export default BlogTab;