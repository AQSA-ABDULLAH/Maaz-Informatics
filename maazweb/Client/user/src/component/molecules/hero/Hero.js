import React, { useEffect, useState } from "react";
import axios from "axios";
import SwiperSlider from "../../atoms/slider/SwiperSlider";
import "./hero.module.css";
import { API_URL } from "../../constant/WebsiteConstants";  // Adjust the path as per your project structure

const Hero = () => {
  const [sliderData, setSliderData] = useState([]);

  // Fetch slider images from the backend API
  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/slider/get-slider`);
        if (response.data && response.data.status === "success") {
          setSliderData(response.data.data);  // Assuming the slider images array is in response.data.data
        } else {
          console.error("Failed to fetch slider images");
        }
      } catch (error) {
        console.error("Error fetching slider images:", error);
      }
    };

    fetchSliderImages();
  }, []);

  // Pass the fetched slider data to SwiperSlider component
  return <SwiperSlider data={sliderData} />;
};

export default Hero;
