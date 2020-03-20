import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "operation",
  initialState: {
    currentOperation: null
  },
  reducers: {
    setCurrentOperation: (state, action) => {
      state.currentOperation = action.payload;
    }
  }
});

export const { setCurrentOperation } = slice.actions;

export const selectCurrentOperation = state => state.operation.currentOperation;

export default slice.reducer;
