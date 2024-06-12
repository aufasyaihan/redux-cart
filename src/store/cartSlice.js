import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
});

export const cartAction = cartSlice.actions;

export default cartSlice;
