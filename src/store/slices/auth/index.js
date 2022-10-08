import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//se encarga de hacer la peticion asyncronica ... despacha por default por lo menos 2 acciones pending, fulfilled o reject
export const getUser = createAsyncThunk("auth/getUser", async () => {
  return fetch("https://reqres.in/api/users/2").then((res) => res.json());
});

export const authSlice = createSlice({
  // nombre del slice o del estado en particular
  name: "auth",
  //estado inicial del estado auth
  initialState: {
    auth: {},
    status: null,
  },
  //en extra reducer se maneja la petiecion creada en getUser
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.auth = action.payload;
      state.status = "success";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default authSlice.reducer;
/// exporto todo los reducer adentro de auth y los importo en store
