import { configureStore } from "@reduxjs/toolkit";
import matricesReducer from "../features/matrices/matricesSlice";
import operationReducer from "../features/operation/operationSlice";

export default configureStore({
  reducer: {
    matrices: matricesReducer,
    operation: operationReducer
  }
});
