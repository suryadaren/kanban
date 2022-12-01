import { createSlice } from "@reduxjs/toolkit";
import { data } from "../utils/Data";

const ListSlice = createSlice({
  name: "list",
  initialState: data,
  reducers: {
    addList: (state, action) => {
      console.log(action.payload);
    },
    delList: (state, action) => {
      const newList = state.filter((item) => item.id !== action.payload);
      state = newList;
      state.map((item) => console.log(item.id));
    },
    addContent: (state, action) => {
      console.log(action.payload);
    },
    delContent: (state, action) => {
      console.log(action.payload);
    },
    moveContent: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addList, delList, addContent, delContent, moveContent } =
  ListSlice.actions;
export default ListSlice.reducer;
