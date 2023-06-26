import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskDataType } from "./types";

const initialState: TaskDataType = {
  "001": {
    id: "001",
    title: "create balance sheet",
    completed: false,
    likesCount: 0,
    // cover: "https://source.unsplash.com/random?startup",
  },
  "002": {
    id: "002",
    title: "talk to the investors",
    completed: false,
    likesCount: 1,
    cover: "https://source.unsplash.com/random?business",
  },
  "003": {
    id: "003",
    title: "launch application",
    completed: true,
    likesCount: 8,
    commentIds: ["001", "002", "003"],
    subTaskIds: ["001", "002"],
    cover: "https://source.unsplash.com/random?money",
  },
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
