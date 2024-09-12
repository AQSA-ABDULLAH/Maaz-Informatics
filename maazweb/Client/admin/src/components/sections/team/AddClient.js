import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from './addclient.module.css';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import Button from "../../atoms/buttons/Button";
import { API_URL } from "../../../constants/WebsiteConstants";

const AddClient = ({ onClose }) => {
    const [Image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(false);

    // Firebase file upload handler
    useEffect(() => {
        if (Image) {
            uploadFile(Image);
        }
    }, [Image]);

    // Function to upload image to Firebase
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'Team/' + file.name);
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
                    setImageUrl(downloadURL);
                    console.log('File available at', downloadURL);
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
            const response = await axios.post(`${API_URL}/api/teams/add-partner`, teamData, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });

            if (response.data.status === "success") {
                Swal.fire('Add New Partner!', 'You have successfully added a new Partner.', 'success');
                onClose();
            } else {
                Swal.fire('Error', 'Failed to submit data. Please try again.', 'error');
            }
        } catch (error) {
            console.error("Error submitting data: ", error);
            Swal.fire('Error', 'An error occurred while submitting the data. Please try again.', 'error');
        }
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '999',
        backdropFilter: 'blur(1px)',
    };

    return (
        <>
            <div style={overlayStyle}></div>
            <div className={style.popupForm}>
                <h3>Add New Partner</h3>
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

                        <div className={style.image_view}>
                            {Image ? (
                                <img
                                    src={URL.createObjectURL(Image)}
                                    alt="Uploaded"
                                />
                            ) : (
                                <div className={style.image_container}>
                                    <MdCloudUpload className={style.icon} />
                                    <p>click here to upload an image</p>
                                </div>
                            )}
                        </div>
                        {error && !Image && <span className={style.text_danger}>Please select an image.</span>}
                    </div>
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
            </div>
        </>
    );
};

export default AddClient;
