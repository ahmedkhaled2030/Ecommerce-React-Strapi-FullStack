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
    "https://img.ltwebstatic.com/images3_ach/2022/12/03/16700475557e96ff3636dba274e9d06d527bd1e324_thumbnail_1920x.png",
    "https://img.ltwebstatic.com/images3_ach/2022/12/16/1671176042923d0e1d0fe8dbf0f1dc9a536ae4967f_thumbnail_1920x.webp",
    "https://img.ltwebstatic.com/images3_ach/2022/12/02/1669967654b70892b308734c5f3fade235e9fef327_thumbnail_1920x.webp",
    "https://img.ltwebstatic.com/images3_ach/2022/12/02/1669971610ccc7f97074fac180e959c0bb4a3d4fd5_thumbnail_1920x.webp"
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
        <SwiperSlide><img src={data[3]} alt="" /> </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Slider;