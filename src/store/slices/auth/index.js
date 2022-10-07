import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  // nombre del slice o del estado en particular
  name: "auth",
  //estado inicial del estado auth
  initialState: [],
  reducers: {
    // funcion encargada de settear el estado
    setAuth: (state, action) => {
      state.nombre = action.payload.nombre;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
/// exporto todo los reducer adentro de auth y los importo en store

// funcion async

export const fetchAuth = () => (dispatch) => {
  //  llamada a firebase
  //
  //    // dispatch(setAuth(response))
  //
  ////////////////////////

  return () => {};
};
