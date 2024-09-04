import React from "react";
import styles from "./Slider.module.css";
import AddSliderForm from "../../atoms/addSlider/AddSliderForm";
const SliderForm = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.space}>
          <AddSliderForm />
        </div>
      </section>
    </>
  );
};

export default SliderForm;
