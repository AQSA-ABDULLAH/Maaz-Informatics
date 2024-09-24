import React, { useState } from "react";
import style from './jobs.module.css';
import Button from "../../atoms/buttons/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../../constants/WebsiteConstants";
import { category as validateCategory, title as validateTitle } from "../../../utils/validations/Validations";

const AddJob = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!title || !category || !location || !description) {
            setError(true);
            return;
        }

        // Validation checks
        if (!validateTitle(title)) {
            Swal.fire('Validation Error', 'Please provide a valid title (letters and spaces only).', 'error');
            return;
        }
        if (!validateCategory(category)) { 
            Swal.fire('Validation Error', 'Please provide a valid category (Letters Only).', 'error');
            return;
        }
        if (!validateTitle(location)) {
            Swal.fire('Validation Error', 'Please provide a valid Location letters and spaces only)', 'error');
            return;
        }

        // Form data is valid
        console.log("Submitting form with data:", { title, category, location, description });

        const jobData = { title, category, location, description };

        try {
            const response = await axios.post(`${API_URL}/api/career/create-job`, jobData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.status === "success") {
                Swal.fire(
                    'Job Added!',
                    'You have successfully added a new job.',
                    'success'
                );
                onClose();
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }

        } catch (error) {
            console.error("An error occurred while submitting the data:", error);
            Swal.fire(
                'FAILED!',
                'You have failed to upload a new Job. </br> Plz Check your internet connection and try again',
                'error'
            );
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
            <div style={overlayStyle} onClick={onClose}></div>
            <div className={style.popupForm}>
                <h3>Add New Job</h3>
                <div className={style.first_row}>
                    <label htmlFor="title">Title <span>(word limit: 200)</span></label>
                    <input type="text"
                        name="title"
                        id="title"
                        className={style.sliderTextArea}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {error && !title && <span className={style.text_danger}>Title is required</span>}

                    <div className={style.colItem}>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input type="text"
                                name="category"
                                id="category"
                                className={style.sliderTextArea}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {error && !category && <span className={style.text_danger}>Category is required</span>}
                        </div>

                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="text"
                                name="location"
                                id="location"
                                className={style.sliderTextArea}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            {error && !location && <span className={style.text_danger}>Location is required</span>}
                        </div>
                    </div>

                    <div className={style.minorSpace}>
                        <label htmlFor="description">Description <span>(word limit: 5000)</span></label>
                        <textarea
                            name="description"
                            id="description"
                            rows={8}
                            className={style.sliderTextArea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        {error && !description && <span className={style.text_danger}>Description is required</span>}
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

export default AddJob;