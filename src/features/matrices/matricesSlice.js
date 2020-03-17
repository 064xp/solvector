import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'matrices',
  initialState: {
    value: [],
  },
  reducers: {
    push: (state, action)=> {
      state.value.push(action.payload);
    },
    empty: state => {
      state.value = [];
    },
  },
});

export const { push, empty } = slice.actions;

export const selectMatrices = state => state.matrices.value;

export default slice.reducer;
