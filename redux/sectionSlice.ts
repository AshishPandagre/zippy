import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SectionDataType, SectionType } from "./types";

const initialState: SectionDataType = {
  allIds: ["001", "002"],
  byId: {
    "001": {
      id: "001",
      title: "Todo",
      taskIds: ["001", "002"],
    },
    "002": {
      id: "002",
      title: "Doing",
      taskIds: ["003"],
    },
  },
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {},
});

export const {} = sectionSlice.actions;

export default sectionSlice.reducer;
