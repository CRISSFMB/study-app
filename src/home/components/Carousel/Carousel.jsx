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

const styleContainer = {
  padding: "10px",
  width: "90%",
  maxWidth: "446px",
  border: "1px solid black",
  marginTop: "2rem"
}

const styleHeader = {
  display: "flex",
  justifyContent: "space-around"
}

const Skeleton = () => {

  return <>
    <div style={styleContainer}>
      <div style={styleHeader} >
        <div className="skeleton" style={{ width: "10px", height: "10px" }}> </div>
        <div className="skeleton" style={{ width: "300px", height: "15px" }}> </div>
        <div className="skeleton" style={{ width: "50px", height: "10px" }}></div>
      </div>
      <img className="skeleton" style={{ width: "100%", height: "180px", marginTop: "1px" }}></img>

      <div className="card__footer">
        <div className="box">
          <span className="skeleton" style={{ width: "15px", height: "15px" }}></span>
          <span className="skeleton" style={{ width: "60px", height: "15px", marginTop: "8px" }}></span>
        </div>
        <div className="box">
          <span className="skeleton" style={{ width: "15px", height: "15px" }}></span>
          <span className="skeleton" style={{ width: "60px", height: "15px", marginTop: "8px" }}></span>

        </div>
        <div className="box">
          <span className="skeleton" style={{ width: "30px", height: "15px"}}></span>
          <span className="skeleton" style={{ width: "60px", height: "15px", marginTop: "8px" }}></span>
        </div>
        <div className="box">
          <span className="skeleton" style={{ width: "30px", height: "15px"}}></span>
          <span className="skeleton" style={{ width: "60px", height: "15px", marginTop: "8px" }}></span>
        </div>
      </div>
    </div>

  </>
}

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
          : <SwiperSlide><Skeleton /></SwiperSlide>}
    </Swiper>
  );
};

export default Carousel;
