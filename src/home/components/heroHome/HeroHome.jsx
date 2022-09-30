import person from "../../../assets/heroHome/heroHome.svg";
import libro from "../../../assets/heroHome/libro.svg";
import text from "../../../assets/heroHome/text.svg";
import comillas from "../../../assets/heroHome/comillas.svg";
import "./heroHome.css";
const HeroHome = () => {
  return (
    <div className="HeroHome">
      <img src={person} alt="" className="HeroHome__person" />
      <img src={libro} alt="" className="HeroHome__libro" />
      <img src={text} alt="" className="HeroHome__text" />
      <img src={comillas} alt="" className="HeroHome__comillas" />
      <p className="HeroHome__paragraph">
        Las 10 mejores universidades según tu voto
      </p>
    </div>
  );
};

export default HeroHome;
