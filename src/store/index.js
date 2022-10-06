import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";

// creacion del store  y en cada reducer para cada parte del estado del app
export default configureStore({
  // este seria el combine reducer
  reducer: {
    auth,
  },
});
