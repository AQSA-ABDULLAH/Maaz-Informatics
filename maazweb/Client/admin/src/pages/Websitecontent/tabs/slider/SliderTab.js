import React, { useState } from "react";
import Hero from "./Hero";
import Button from "../../../../components/atoms/buttons/Button";
import SliderForm from "../../../../components/molecules/slider/SliderForm";
import style from "./slidertab.module.css";

const Slider = () => {
  const [showSliderForm, setShowSliderForm] = useState(false);

  const addSliderHandler = () => {
    setShowSliderForm(true);
    window.location.href = "#addslider";
  };

  return (
    <div className={style.container}>
      <Hero />
      <div className={style.btn}>
        <Button primary btnText="Expand Slider" radius="10px" />
        <Button primary btnText="Add New Slider" btnClick={addSliderHandler} radius="10px" />
      </div>
      <div id="addslider">{showSliderForm && <SliderForm />}</div>
    </div>
  );
};

export default Slider;

