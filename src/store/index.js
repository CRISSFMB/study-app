import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import universityReducer from "./slices/university";
// creacion del store  y en cada reducer para cada parte del estado del app
export default configureStore({
  // este seria el combine reducer
  reducer: {
    auth: authReducer,
    university: universityReducer,
  },
});
