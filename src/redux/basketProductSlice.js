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
  },
});

export const { addProduct, addMoreProduct, deleteProduct, updateProduct } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
