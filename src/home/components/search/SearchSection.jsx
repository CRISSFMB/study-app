import React from "react";
import imageSearch from "../../../assets/heroHome/searchSection/SearchSection.svg";
import "./searchSection.css";
const SearchSection = () => {
  return (
    <div className="SearchSection">
      <div className="SearchSection-Content">
        <div className="wrapper-btns-search">
          <button className="wrapper-btns-search__btn">
            Calificar una univercidad
          </button>
          <button className="wrapper-btns-search__btn">
            Agregar univercidad
          </button>
        </div>

        <p className="SearchSection__title">busca tu Carrera</p>
        <span className="SearchSection__detail">
          y mira en que univercidad esta mejor calificada
        </span>
        <img src={imageSearch} alt="icon" className="searchSection-img" />

        <div className="wrapper-inputs-searchSection">
          <input
            className="wrapper-inputs-searchSection__input"
            type="text"
            placeholder="¿Qué carrera querés estudiar?"
          />
          <input
            className="wrapper-inputs-searchSection__input"
            type="text"
            placeholder="¿En qué provincia pensás estudiar?"
          />
        </div>

        <div className="btn-controlsSectionSearch">
          <button className="btn-controlsSectionSearch__btn">Buscar</button>
          <button className="btn-controlsSectionSearch__btn">Borrar</button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
