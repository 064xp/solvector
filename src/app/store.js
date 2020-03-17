import { configureStore } from '@reduxjs/toolkit';
import matricesReducer from '../features/matrices/matricesSlice';

export default configureStore({
  reducer: {
    counter: matricesReducer,
  },
});
