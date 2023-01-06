import React, { useState } from "react";
import EastOutlined from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination ,Autoplay, Navigation } from "swiper";

const Slider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <div className="slider">
      {/* <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div> */}
      <Swiper pagination={true}    modules={[Autoplay, Pagination, Navigation]} className="mySwiper"
            autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img src={data[0]} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={data[1]} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={data[2]} alt="" /> </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Slider;