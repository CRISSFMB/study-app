import { Route, Routes } from "react-router-dom";
import CalifUniversidades from "../../Calificar/CalifUniversidades";
import Footer from "../../Footer/Footer";
import AccesoTransportePublico from "../../onBoarding/components/NavBar/AccesoTransportePublico";
import Ambiente from "../../onBoarding/components/NavBar/Ambiente";
import DemandaHoraria from "../../onBoarding/components/NavBar/DemandaHoraria";

import NavBar from "../../onBoarding/components/NavBar/NavBar";
import NivelAcademico from "../../onBoarding/components/NavBar/NivelAcademico";
import NivelProfesor from "../../onBoarding/components/NavBar/NivelProfesor";
import RutasUniversidades from "../../onBoarding/components/NavBar/RutasUniversidades";
import Carousel from "../components/Carousel/Carousel";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";
import SearchSection from "../components/search/SearchSection";
import { HomeRoutes } from "../routes/HomeRoutes";

export const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <HeroHome />

      <Carousel />
      
      <SearchSection />
      <NavBar />
      <RutasUniversidades />
      
      
      {/* <CalifUniversidades /> */}
      <Footer />
    </div>
  );
};
