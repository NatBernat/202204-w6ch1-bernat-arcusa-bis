import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
  },
});

export const { loadToDos: loadToDosActionCreator } = toDosSlice.actions;

export const toDosReducer = toDosSlice.reducer;
