import { configureStore } from "@reduxjs/toolkit";
import { toDosReducer } from "./features/toDos/toDosSlice";

const store = configureStore({
  reducer: {
    projects: toDosReducer,
  },
});

export default store;
