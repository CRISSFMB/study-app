// import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./home/pages/HomeScreen";
import { EnterScreen } from "./onBoarding/pages/EnterScreen";
import { SearchScreen } from "./onBoarding/pages/SearchScreen";
import { SelectScreen } from "./onBoarding/pages/SelectScreen";
import { WhereStudyScreen } from "./onBoarding/pages/WhereStudyScreen";

function StudyApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WhereStudyScreen />} />
        <Route path="/homeScreen" element={<HomeScreen />} />
        <Route path="/enterScreen" element={<EnterScreen />} />
        <Route path="/searchScreen" element={<SearchScreen />} />
        <Route path="/selectScreen" element={<SelectScreen />} />
      </Routes>
    </>
  );
}

export default StudyApp;
