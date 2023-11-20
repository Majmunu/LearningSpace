import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../features/componentSlice";

export const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
