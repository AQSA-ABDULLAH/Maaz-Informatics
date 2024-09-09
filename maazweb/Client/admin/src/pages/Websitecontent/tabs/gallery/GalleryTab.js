import React from "react";
// import Galleryhero from "./Galleyhero";
// import Galleryimg from "../../../components/molecules/gallerySlider/Galleryimg";
import style from "./gallerytab.module.css";

const GalleryTab = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.outerContainer}>
        <div className={style.container}>
          {/* <Galleryimg />
          <Galleryhero /> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;