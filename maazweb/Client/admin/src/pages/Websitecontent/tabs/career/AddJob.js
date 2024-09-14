import React, { useEffect, useState } from "react";
import style from './jobs.module.css';
import Button from "../../../../components/atoms/buttons/Button";

const AddJob = ({ onClose }) => {
    // State for form fields
    const [jobtitle, setJobTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false); // State to track errors

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!jobtitle || !category || !location || !description) {
            setError(true);
            return;
        }

        // Form data is valid
        console.log("Submitting form with data:", { jobtitle, category, location, description });

        // Add your form submission logic here (e.g., API call)

        setError(false); // Reset error if the form is successfully submitted
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
                <h3>Add New Partner</h3>
                <div className={style.first_row}>
                    <label htmlFor="jobtitle">Title <span>(word limit: 200)</span></label>
                    <input type="text"
                        name="jobtitle"
                        id="jobtitle"
                        className={style.sliderTextArea}
                        value={jobtitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    {error && !jobtitle && <span className={style.text_danger}>Title is required</span>}

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
