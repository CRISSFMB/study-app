

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Agrega } from "../../Agrega/Agrega";
import { onAuthStateChange } from "../../Firebase/firebase-utils";
import Footer from "../../Footer/Footer";
import NavBar from "../../onBoarding/components/NavBar/NavBar";
import { login } from "../../store/slices/auth";
import Carousel from "../components/Carousel/Carousel";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";
import SearchSection from "../components/search/SearchSection";

export const HomeScreen = () => {
  const dispatch = useDispatch()
  const onChange = (user) => {
    console.log("UserActualizado", user)
    const {email, photoURL, name, token } = user;
    dispatch(login({ email, photoURL, name, token }))
    
  }

  useEffect(() => {
    
  
    return () => onAuthStateChange(onChange)

  }, [])
  

  return (
    <>
      <Nav />

      <HeroHome />

      <Carousel />

      <SearchSection />

      <div>
        <h1 className="titulo">
          Las universidades de tu futura carrera segun tu:
        </h1>
        <NavBar />
      </div>
      
      <Footer />
    </>


  );
};
