import { configureStore } from "@reduxjs/toolkit";
import matricesReducer from "../features/matrices/matricesSlice";
import operationReducer from "../features/operations/operationsSlice";

export default configureStore({
  reducer: {
    matrices: matricesReducer,
    operations: operationReducer
  }
});
