import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../features/ListSlice";

export const store = configureStore({
  reducer: {
    list: ListSlice,
  },
});
