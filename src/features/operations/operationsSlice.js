import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "operations",
  initialState: {
    currentOperation: null,
    operationString: ""
  },
  reducers: {
    setCurrentOperation: (state, action) => {
      state.currentOperation = action.payload;
    },
    setOperationString: (state, action) => {
      state.operationString = action.payload;
    }
  }
});

export const { setCurrentOperation, setOperationString } = slice.actions;

export const selectMatrices = state => state.matrices.value;

export default slice.reducer;
