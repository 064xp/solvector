import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "matrices",
  initialState: {
    matrices: []
  },
  reducers: {
    push: (state, action) => {
      state.matrices.push(action.payload);
    },
    empty: state => {
      state.matrices = [];
    }
  }
});

export const { push, empty } = slice.actions;

export const selectMatrices = state => state.matrices.value;

export default slice.reducer;
