import { OnBoarding } from "../components/OnBoarding";
import SearchPerson from "../../assets/onboarding-assets/SearchPerson.svg";
import circleOrange from "../../assets/onboarding-assets/circle-orange.svg";
import questionBubble from "../../assets/onboarding-assets/question-bubble.svg";
import triangleOrange from "../../assets/onboarding-assets/triangle-orange.svg";
import quadratRed from "../../assets/onboarding-assets/quadrat-red.svg";
import quadratBlue from "../../assets/onboarding-assets/quadrat-blue.svg";
import "./SearchScreen.css";
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
    classSvg: "onBoarding__SearchScreen",
    svgImage: SearchPerson,
    alt: "SearchPerson",
  },
];

export const SearchScreen = () => {
  return (
    <div className="SearchScreen">
      <OnBoarding
        title="Busca"
        description="tu carrera del futuro"
        btnText="Saltar"
        OnBoardingSvgs={OnBoardingSvgs}
        TypePageClass="onBoarding--SearchScreen"
        btnPath="/selectScreen"
      />
    </div>
  );
};
