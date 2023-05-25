import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllProducts.pending](state) {
      state.isLoading = true;
    },
    [getAllProducts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [getAllProducts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.products = payload;
    },
  },
});

export const productsReduser = productSlice.reducer;
