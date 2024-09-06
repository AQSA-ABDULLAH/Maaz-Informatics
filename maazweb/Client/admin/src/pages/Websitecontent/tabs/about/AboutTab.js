import React from "react";
import Aboutus from "../../../../components/molecules/aboutus/Aboutus"
import style from "../about/aboutTab.module.css";

const AboutTab = () => {
  return (
    <>
      <div className={style.container} style={{height:window.innerHeight}}>
        <div className={style.message}>
          <Aboutus
            heading="Welcome to the Transport Hub"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eos, eum recusandae ratione odit earum quaerat assumenda magnam itaque et tempora necessitatibus consectetur a orem ipsum dolor sit amet, consectetur adipisicing elit. Ut eos, eum recusandae ratione odit earum quaerat assumenda magnam itaque et tempora necessitatibus consectetur a"
            author="Message by "
            img={"./assets/image/about-us/aboutus.jpeg"}
          />
        </div>
        <div className={style.author}>
          <Aboutus
            heading="Qoute"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eos, eum recusandae ratione odit earum quaerat assumenda magnam itaque et tempora necessitatibus consectetur a deleniti modi repellat labore q dolore ."
            author="Qoute by"
            img={"./assets/image/about-us/aboutus2.jpeg"}
          />
        </div>
      </div>
    </>
  );
};

export default AboutTab;