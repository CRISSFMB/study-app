import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./home/pages/HomeScreen";
import {
  EnterScreen,
  SearchScreen,
  SelectScreen,
  WhereToStudyScreen,
} from "./onBoarding/pages";

function StudyApp() {
  return (
    <Routes>
      <Route path="/" element={<WhereToStudyScreen />} />
      <Route path="/homeScreen" element={<HomeScreen />} />
      <Route path="/enterScreen" element={<EnterScreen />} />
      <Route path="/searchScreen" element={<SearchScreen />} />
      <Route path="/selectScreen" element={<SelectScreen />} />
    </Routes>
  );
}

export default StudyApp;
