import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase";
import Button from "../../../../components/atoms/buttons/Button";
import { useNavigate } from 'react-router-dom';
import styles from "./blogtab.module.css";

const BlogTab = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [heading, setHeading] = useState("");
    const [category, setCategory] = useState("");
    const [writtenby, setWrittenby] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
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
                console.log('Upload is ' + progress + '% done');

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


    // API SETUP
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!imageUrl || !heading || !category || !writtenby || !content) {
            setError(true);
            return false;
        }
        setError(false);

        const formData = new FormData();
        formData.append('image', imageUrl);
        formData.append('heading', heading);
        formData.append('category', category);
        formData.append('writtenby', writtenby);
        formData.append('content', content);
        console.log("this is an iamge",imageUrl)
        console.log(formData)

        try {
            const response = await axios.post("http://localhost:5000/api/blogs/create-blog", formData, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });

            console.log(formData)
            if (response.data.status === "success") {
                Swal.fire(
                    'Add New Blog!',
                    'You have been added new blog succesfully.',
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
            console.log(error);
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
                                            <img
                                                src="./assets/images/photograph.svg"
                                                alt="icon"
                                            />
                                        </label>
                                    )}

                                    <input type="file" name="sliderImg" id="sliderImg"
                                        accept="image/png, image/jpeg"
                                        ref={inputRef}
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />

                                </div>
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