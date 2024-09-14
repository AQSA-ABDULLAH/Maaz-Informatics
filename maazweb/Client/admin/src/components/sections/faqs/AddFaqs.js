import React, { useState } from "react";
import style from './faqs.module.css';
import Button from "../../atoms/buttons/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../../constants/WebsiteConstants";

const AddFaqs = ({ onClose }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!question || !answer) {
            setError(true);
            return;
        }

        // Form data is valid
        console.log("Submitting form with data:", { question, answer });

        const jobData = { question, answer };

        try {
            const response = await axios.post(`${API_URL}/api/faqs/post-faqs`, jobData, {
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
                    <label htmlFor="question">Question <span>(word limit: 200)</span></label>
                    <input type="text"
                        name="question"
                        id="question"
                        className={style.sliderTextArea}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    {error && !question && <span className={style.text_danger}>Question is required</span>}

                    <div className={style.minorSpace}>
                        <label htmlFor="answer">Answer <span>(word limit: 5000)</span></label>
                        <textarea
                            name="answer"
                            id="answer"
                            rows={8}
                            className={style.sliderTextArea}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        ></textarea>
                        {error && !answer && <span className={style.text_danger}>Answer is required</span>}
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

export default AddFaqs;