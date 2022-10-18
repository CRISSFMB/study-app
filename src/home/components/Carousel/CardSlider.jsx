import React from "react";
import image1 from "../../../assets/swiper/image1.png";
import star from "../../../assets/swiper/star.svg";
import "./card.css";
const CardSlider = () => {
  return (
    <div className="card-slider">
      <div className="card__header">
        <div className="card__header__number">1</div>
        <p className="card__header__title">Univercidad de Buenos Aires</p>
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
          <span className="card__footer__number">69</span>
          <span className="card__footer__title">puesto</span>
        </div>
        <div className="box">
          <span className="card__footer__number">13</span>
          <span className="card__footer__title">facultades</span>
        </div>
        <div className="box">
          <span className="card__footer__number">+100</span>
          <span className="card__footer__title">carreras</span>
        </div>
        <div className="box">
          <span className="card__footer__number">30000</span>
          <span className="card__footer__title">alumnos</span>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
