import React from "react";
import SwiperSlider from "../../atoms/slider/SwiperSlider";
import "./hero.module.css";
import useUserAction from "../../../../utils/customHooks/useUserAction";

const Hero = () => {
  const { reduxState } = useUserAction();

  const data = [
    {
      image: "/assets/image/home/image.png",
      title: "Welcome to The TransportHub",
      caption: "Discover the power within and soar to new heights.",
      buttonText: reduxState.isSignedIn ? "Welcome aboard" : "JOIN WITH US",
    },
    {
      image: "/assets/image/home/goods.png",
      title: "Unleash Your Potential",
      caption: "Embark on thrilling quests and create unforgettable memories.",
      buttonText: reduxState.isSignedIn ? "Welcome aboard" : "JOIN WITH US",
    },
    {
      image: "/assets/image/home/parcelpickup.png",
      title: "Embrace Tranquility",
      caption: "Find serenity in nature's embrace and rejuvenate your soul",
      buttonText: reduxState.isSignedIn ? "Welcome at TransportHub" : "JOIN WITH US",
    },
  ]; 

  return <SwiperSlider data={data} />;
};

export default Hero;