import React, { useEffect, useState } from "react";
import image1 from "../../../assets/swiper/image1.png";
import star from "../../../assets/swiper/star.svg";
import { getDataUniversity } from "../../../Firebase/firebase-utils";
import "./card.css";
const CardSlider = ({localidad}) => {

  const [data, setData] = useState()

  useEffect(()  => {
    try
    {
      async function getData() {
       await getDataUniversity(localidad).then(setData)
           
      }
      getData()
    }
     catch(err)
     {console.log(err)}
      
  }, [])
  
  
 
  return (
    
   data !== undefined ? <div className="card-slider">
      <div className="card__header">
        <div className="card__header__number">{data?.Id}</div>
        <p className="card__header__title">Universidad de {localidad}</p>
        <div className="star">
          <img src={star} alt="star" className="star__image" />
          <img src={star} alt="star" className="star__image" />
          <img src={star} alt="star" className="star__image" />
          <img src={star} alt="star" className="star__image" />
          <img src={star} alt="star" className="star__image" />
        </div>
      </div>
      <img src={image1} className="card__image" />

      <div className="card__footer">
        <div className="box">
          <span className="card__footer__number">{data?.Puesto}</span>
          <span className="card__footer__title">puesto</span>
        </div>
        <div className="box">
          <span className="card__footer__number">{data?.Facultades}</span>
          <span className="card__footer__title">facultades</span>
        </div>
        <div className="box">
          <span className="card__footer__number">{data?.Carreras}</span>
          <span className="card__footer__title">carreras</span>
        </div>
        <div className="box">
          <span className="card__footer__number">{data?.Alumnos}</span>
          <span className="card__footer__title">alumnos</span>
        </div>
      </div>
    </div> : <p>Cargando..</p>
  );
};

export default CardSlider;
