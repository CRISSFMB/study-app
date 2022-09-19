import { OnBoarding } from "../components/OnBoarding";
import personStudy from "../../assets/onboarding-assets/onBoarding-studyPerson.svg";
import circleOrange from "../../assets/onboarding-assets/circle-orange.svg";
import questionBubble from "../../assets/onboarding-assets/question-bubble.svg";
import triangleOrange from "../../assets/onboarding-assets/triangle-orange.svg";
import quadratRed from "../../assets/onboarding-assets/quadrat-red.svg";
import quadratBlue from "../../assets/onboarding-assets/quadrat-blue.svg";
import "./WhereToStudy.css";

const OnBoardingSvgs = [
  {
    id: 1,
    classSvg: "onBoarding__imgCircleOrange",
    svgImage: circleOrange,
    alt: "circleOrange",
  },
  {
    id: 2,
    classSvg: "onBoarding__imgQuestionBubble",
    svgImage: questionBubble,
    alt: "questionBubble",
  },
  {
    id: 3,
    classSvg: "onBoarding__imgTriangleOrange",
    svgImage: triangleOrange,
    alt: "triangleOrange",
  },
  {
    id: 4,
    classSvg: "onBoarding__imgQuadratRed",
    svgImage: quadratRed,
    alt: "quadratRed",
  },
  {
    id: 5,
    classSvg: "onBoarding__imgQuadratBlue",
    svgImage: quadratBlue,
    alt: "quadratBlue",
  },
  {
    id: 6,
    classSvg: "onBoarding__imgPerson",
    svgImage: personStudy,
    alt: "personStudy",
  },
];

export const WhereToStudyScreen = () => {
  return (
    <div className="WhereToStudyScreen">
      <OnBoarding
        title="¿No sabés"
        description="a dónde estudiar?"
        btnText="Saltar"
        OnBoardingSvgs={OnBoardingSvgs}
      />
    </div>
  );
};
