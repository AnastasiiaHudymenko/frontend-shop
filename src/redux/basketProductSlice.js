import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
    addProduct(state, { payload }) {
      state.basket.push(payload);
    },

    updateProduct(state, { payload }) {
      state.basket = payload;
    },

    deleteProduct(state, { payload }) {
      state.basket = payload;
    },
    clearBasket(state, { payload }) {
      state.basket = [];
    },
  },
});

export const {
  addProduct,
  addMoreProduct,
  deleteProduct,
  updateProduct,
  clearBasket,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
