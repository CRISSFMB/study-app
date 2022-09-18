import personStudy from "../../assets/onboarding-assets/onBoarding-studyPerson.svg";
import circleOrange from "../../assets/onboarding-assets/circle-orange.svg";
import questionBubble from "../../assets/onboarding-assets/question-bubble.svg";
import triangleOrange from "../../assets/onboarding-assets/triangle-orange.svg";
import quadratRed from "../../assets/onboarding-assets/quadrat-red.svg";
import quadratBlue from "../../assets/onboarding-assets/quadrat-blue.svg";
import testcontrolsimagendePruebaBorrar from "../../assets/onboarding-assets/Frame 37.svg";
import "./OnBoarding.css";

export const OnBoarding = () => {
  return (
    <div className="onBoarding">
      <div className="onBoarding-content">
        <h2 className="onBoarding-content__title">¿No sabés</h2>
        <p className="onBoarding-content__description">a dónde estudiar?</p>
        <img
          className="onBoarding-content__testBorrar"
          src={testcontrolsimagendePruebaBorrar}
        />
        <button className="onBoarding__button">Saltar</button>
      </div>

      <img
        className="onBoarding__imgPerson"
        src={personStudy}
        alt="study-person"
      />
      <img
        className="onBoarding__imgCircleOrange"
        src={circleOrange}
        alt="circleOrange"
      />
      <img
        className="onBoarding__imgQuestionBubble"
        src={questionBubble}
        alt="questionBubble"
      />
      <img
        className="onBoarding__imgTriangleOrange"
        src={triangleOrange}
        alt="triangleOrange"
      />
      <img
        className="onBoarding__imgQuadratRed"
        src={quadratRed}
        alt="quadratRed"
      />
      <img
        className="onBoarding__imgQuadratBlue"
        src={quadratBlue}
        alt="quadratBlue"
      />
    </div>
  );
};
