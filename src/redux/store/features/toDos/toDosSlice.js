import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = () => {};

export default toDosSlice;

const projectsSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
  },
});

export const { loadToDos: loadToDosActionCreator } = projectsSlice.actions;

export const toDosReducer = toDosSlice.reducer;
