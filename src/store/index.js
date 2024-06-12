import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";

const cartState = {
  showCart: false,
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      state.showCart = !state.showCart;
      state.item.push = action.payload;
    },
    addQuantity(state) {
      if (state.item.length > 0) {
        state.item[0].quantity++;
      }
    },
    decreaseQuantity(state) {
      if (state.item.length > 0 && state.item[0].quantity > 0) {
        state.item[0].quantity--;
      }
    },
  },
});

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export const cartAction = cartSlice.actions;

export default store;
