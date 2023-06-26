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

interface MoveCardPayloadType {
  source: { index: number; droppableId: string };
  destination: { index: number; droppableId: string };
}

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    moveCard: (state, action: PayloadAction<MoveCardPayloadType>) => {
      const { droppableId: srcSection, index: srcIndex } =
        action.payload.source;
      const { droppableId: destSection, index: destIndex } =
        action.payload.destination;
      const taskId = state.byId[srcSection].taskIds[srcIndex];
      state.byId[srcSection].taskIds.splice(srcIndex, 1);
      state.byId[destSection].taskIds.splice(destIndex, 0, taskId);
    },
  },
});

export const { moveCard } = sectionSlice.actions;

export default sectionSlice.reducer;
