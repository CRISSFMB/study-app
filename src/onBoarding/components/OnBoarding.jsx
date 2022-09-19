import testcontrolsimagendePruebaBorrar from "../../assets/onboarding-assets/Frame 37.svg";
import { OnBoardingSvg } from "./OnBoardingSvg";
import "./OnBoarding.css";

export const OnBoarding = (props) => {
  return (
    <div className="onBoarding">
      <div className="onBoarding-content">
        <h2 className="onBoarding-content__title">{props.title}</h2>
        <p className="onBoarding-content__description">{props.description}</p>
        <img
          className="onBoarding-content__testBorrar"
          src={testcontrolsimagendePruebaBorrar}
        />
        <button className="onBoarding__button">{props.btnText}</button>
      </div>
      {props.OnBoardingSvgs.map((svg) => (
        <OnBoardingSvg
          key={svg.id}
          className={svg.classSvg}
          svgImage={svg.svgImage}
          alt={svg.alt}
        />
      ))}
    </div>
  );
};
