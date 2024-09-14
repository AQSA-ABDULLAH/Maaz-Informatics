import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSlider.css";
import "swiper/css/effect-creative";
import useUserAction from "../../../utils/customHooks/useUserAction";
import { useNavigate } from "react-router-dom";
import useModalToggler from "../../../utils/customHooks/useModalToggler";

const SwiperSlider = ({ data }) => {
  const { isOpen, toggleIsOpen } = useModalToggler();
  const navigate = useNavigate();
  const { reduxState, userAction } = useUserAction(() => navigate("/gallery"));

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[
        Navigation, 
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectCreative,
      ]}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -50],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      grabCursor={true}
      className="mySwiper"
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="custcard">
            <img
              src={slide.image}
              alt={slide.caption}
              className="background-image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
