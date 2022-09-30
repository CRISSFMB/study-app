import CalifUniversidades from "../../Calificar/CalifUniversidades";
import Stars from "../../Calificar/Stars.jsx";
import Footer from "../../Footer/Footer";
import NavBar from "../../onBoarding/components/NavBar/NavBar";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";

export const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <HeroHome />
      <NavBar />
      {/* <CalifUniversidades /> */}
      <Footer />
    </div>
  );
};
