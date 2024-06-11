import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartState = {
  showCart: false,
  addToCart: false,
  item: { title: "Test Item", quantity: 0, total: 18, price: 6 },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state) {
      state.addToCart = !state.addToCart;
      state.item.quantity++
    },
    addQuantity(state) {
      state.item.quantity++
    },
    decreaseQuantity(state) {
      state.quantity--;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartAction = cartSlice.actions;

export default store;
