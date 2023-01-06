import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][type][$eq] =${type}`
  );

  console.log(data);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Homogeneous shopping products are those shopping products which are similar in quality. These types of products are very much alike and fall under the same product category. There are some attributes like brand image, price, style, quality and suitability which can differentiate two or more homogenous products.
        </p>
      </div>
      <div className="bottom">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >
          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/08/12/1660291519fdcf2e74cc361cb6e3d40f80c270765d_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/07/13/1657704947588787d4151594033876e38844168066_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/10/24/1666580587c742d253e8efa8b671c7d19ab1a83d6a_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2021/04/20/161890424546f22e22eead8743273297b55ffd703f_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/11/09/1667985791e26c3a2983463547fdf299d284e99b67_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/09/26/1664163077f012487eeab3c6d394f89a8be2e23478_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/05/05/1651715837bcd496e865c17062c09df05bc5fabbbe_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://img.ltwebstatic.com/images3_pi/2022/08/01/1659320087ed8963b42d4256c39ef03da4bd830f04_thumbnail_405x552.webp"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* {
          error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
