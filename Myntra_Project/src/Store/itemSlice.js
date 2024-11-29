import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: "slice",
  initialState: [],
  reducers: {
    addIntialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
