import CalifUniversidades from "../../Calificar/CalifUniversidades";

import NavBar from "../../onBoarding/components/NavBar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";

export const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <HeroHome />
      <NavBar />
      <Carousel />
      {/* <CalifUniversidades /> */}
      {/* <Footer /> */}
    </div>
  );
};
