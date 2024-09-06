import React from "react";

import SwiperSlider from "../../../../components/molecules/slider/Swiperslider";

const Hero = () => {
  const data = [
    {
      image: "/assets/image/sliderhero/image.png",
      title: "Welcome to TheBodyDoctors",
      caption: "Discover the power within and soar to new heights.",
      buttonText: "Join us",
    },
    {
      image: "/assets/image/sliderhero/image.png",
      title: "Unleash Your Potential",
      caption: "Embark on thrilling quests and create unforgettable memories.",
      buttonText: "Join us",
    },
    {
      image: "/assets/image/sliderhero/image.png",
      title: "Embrace Tranquility",
      caption: "Find serenity in nature's embrace and rejuvenate your soul",
      buttonText: "Join us",
    },
  ];

  return <SwiperSlider data={data} />;
};

export default Hero;
