import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    addQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.title === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.title === action.payload
      );
      if (existingItem) {
        existingItem.quantity--;
      }
      if (existingItem.quantity < 1) {
        state.items.pop(existingItem);
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
