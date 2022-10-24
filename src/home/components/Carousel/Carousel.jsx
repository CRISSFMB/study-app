import React, { useEffect, useState } from "react";

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
import { getDataUniversity } from "../../../Firebase/firebase-utils";



const Carousel = () => {
  
  const [data, setData] = useState()

  useEffect(() => {
    try {
      async function getData() {
        await getDataUniversity().then(setData)

      }
      getData()
    }
    catch (err) { console.log(err) }

  }, [])
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >


      {
        data !== undefined ? data.map((card, index) => {
          return <SwiperSlide>
            <CardSlider data={card} key={index} />
          </SwiperSlide>
        })
          : <p className="carrosuel__loading">Cargando..</p>}
    </Swiper>
  );
};

export default Carousel;
