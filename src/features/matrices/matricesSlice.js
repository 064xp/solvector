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
    },
    updateMatrix: (state, action) => {
      const { index, row, col, value } = action.payload;
      state.matrices[index].matrix[row][col] = value;
    },
    addMatrix: (state, action) => {
      const { rows, cols } = action.payload;
      let matrix = [];
      const row = new Array(cols).fill(0);

      for (let i = 0; i < rows; i++) {
        matrix.push(row);
      }
      state.matrices.push({
        rows,
        cols,
        matrix
      });
    }
  }
});

export const { push, empty, updateMatrix, addMatrix } = slice.actions;

export const selectMatrices = state => state.matrices.matrices;

export default slice.reducer;
