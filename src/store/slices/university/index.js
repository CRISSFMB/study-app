import { createSlice } from "@reduxjs/toolkit";

const universitySlice = createSlice({
  name: "university", //nombre del estado

  initialState: { value: "" },
  reducers: {
    addUniversity: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUniversity: (state, action) => {
      state.value = state.value.filter(
        (university) => university.id !== action.payload.id
      );
    },
    updateUniversity: (state, action) => {
      state.value.map((university) => {
        if (university.id === action.payload.id) {
          university.name = action.payload;
        }
      });
    },
  },
});

export const { addUniversity, deleteUniversity, updateUniversity } =
  universitySlice.actions;

export default universitySlice.reducer;
