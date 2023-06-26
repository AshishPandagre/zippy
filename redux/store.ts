import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./sectionSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
