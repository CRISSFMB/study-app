import CalifUniversidades from "../../Calificar/CalifUniversidades";
import Footer from "../../Footer/Footer";

import NavBar from "../../onBoarding/components/NavBar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";
import SearchSection from "../components/search/SearchSection";

export const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <HeroHome />

      <NavBar />
      <Carousel />
      <SearchSection />
      {/* <CalifUniversidades /> */}
      <Footer />
    </div>
  );
};
