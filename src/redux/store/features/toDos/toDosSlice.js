import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
    removeToDos: (toDos, action) =>
      toDos.filter((toDo) => toDo.id !== action.payload),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  removeToDos: removeToDosActionCreator,
} = toDosSlice.actions;

export const toDosReducer = toDosSlice.reducer;
