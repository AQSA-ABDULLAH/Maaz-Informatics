import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./questions.module.css";

const Questions = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className={styles.questions}>
      {faqs.map((question, index) => (
        <div key={index} className={styles.question}>
          <div className={styles.questionTitle} onClick={() => toggleQuestion(index)}>
            <h2>{question.question}</h2>
            <span className={styles.icon}>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.questionAnswer}>
              <span>{question.answer}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Questions.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Questions;