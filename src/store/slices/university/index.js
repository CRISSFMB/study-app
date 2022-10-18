import { createSlice } from "@reduxjs/toolkit";

const universitySlice = createSlice({
  name: "university", //nombre del estado

  initialState: { university: {} },
  reducers: {
    getUniversity: (state, action) => {
      state.university = action.payload;
    },

    addUniversity: (state, action) => {
      state.university.push(action.payload);
    },
    deleteUniversity: (state, action) => {
      state.university = state.university.filter(
        (university) => university.id !== action.payload.id
      );
    },
    updateUniversity: (state, action) => {
      state.university.map((university) => {
        if (university.id === action.payload.id) {
          university.name = action.payload;
        }
      });
    },
  },
});

export const {
  getUniversity,
  addUniversity,
  deleteUniversity,
  updateUniversity,
} = universitySlice.actions;

export default universitySlice.reducer;
