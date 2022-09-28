import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import gorro from "./img/gorro.svg";
import insta from "./img/instagram.svg";
import face from "./img/facebook.svg";
import twiter from "./img/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__div">
        <div className="donde_estudio_div">
          <img src={gorro} alt="logo" className="logo" />
          <p className="text">
            En este sitio encontrarás todas las universidades y sus respectivas
            calificaciones en base a lo que los usuarios opinen.
          </p>
        </div>
        <div className="info">
          <div className="links">
            <h2>Sobre Nosotros</h2>
            <Link>Nosotros</Link>
            <Link>Contacto</Link>
          </div>

          <div className="links">
            <h2>Redes</h2>
            <div className="link">
              <img src={face} alt="" />
              <Link>Facebook</Link>
            </div>
            <div className="link">
              <img src={twiter} alt="" />
              <Link>Twitter</Link>
            </div>
            <div className="link">
              <img src={insta} alt="" />
              <Link>Instagram</Link>
            </div>
          </div>

          <div className="links">
            <h2>Compañia</h2>
            <Link>Terminos y Condiciones</Link>
            <Link>Politica de Privacidad</Link>
            <Link>Código de conducta</Link>
          </div>
        </div>
      </div>
      <div className="copyrigth">
        <div className="copy_div">
          <Link>Política de Privacidad</Link>
          <Link>Terminos y condiciones </Link>
        </div>
        <div>
          <p>©2022 donde Estudio. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
