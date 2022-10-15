import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardSlider from "./CardSlider";

const Carousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardSlider localidad={"Buenos Aires"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider localidad={"Cordoba"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider localidad={"Valencia"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider localidad={"Madrid"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
