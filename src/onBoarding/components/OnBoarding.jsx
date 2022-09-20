import testcontrolsimagendePruebaBorrar from "../../assets/onboarding-assets/Frame 37.svg";
import { OnBoardingSvg } from "./OnBoardingSvg";
import "./OnBoarding.css";
import { Link } from "react-router-dom";

export const OnBoarding = (props) => {
  return (
    <div className="container-global">
      <div className={`onBoarding ${props.TypePageClass}`}>
        <div className="onBoarding-content">
          <h2 className={`onBoarding-content__title`}>{props.title}</h2>
          <p className="onBoarding-content__description">{props.description}</p>
          <img
            className="onBoarding-content__testBorrar"
            src={testcontrolsimagendePruebaBorrar}
          />
          <Link to={props.btnPath}>
            <button className="onBoarding__button">{props.btnText}</button>
          </Link>
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
    </div>
  );
};
