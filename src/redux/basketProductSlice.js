import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'backet',
  initialState: {
    backet: [],
  },
  reducers: {
    addProduct(state, { payload }) {
      state.backet.push(payload);
    },

    updateProduct(state, { payload }) {
      state.backet = payload;
    },

    deleteProduct(state, { payload }) {
      state.backet = payload;
    },
    clearBacket(state, { payload }) {
      state.backet = [];
    },
  },
});

export const {
  addProduct,
  addMoreProduct,
  deleteProduct,
  updateProduct,
  clearBacket,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
