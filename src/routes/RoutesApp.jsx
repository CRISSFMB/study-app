import { Routes, Route } from "react-router-dom";
import { HomeRoutes } from "../home/routes/HomeRoutes";
import { EnterScreen } from "../onBoarding/pages/EnterScreen";
import { SearchScreen } from "../onBoarding/pages/SearchScreen";
import { SelectScreen } from "../onBoarding/pages/SelectScreen";
import { WhereToStudyScreen } from "../onBoarding/pages/WhereToStudyScreen";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<WhereToStudyScreen />} />
      <Route path="enterScreen" element={<EnterScreen />} />
      <Route path="searchScreen" element={<SearchScreen />} />
      <Route path="selectScreen" element={<SelectScreen />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};
