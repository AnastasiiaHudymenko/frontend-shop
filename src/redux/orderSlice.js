import { createSlice } from '@reduxjs/toolkit';
import { addUserData } from './operations';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addUserData.pending](state) {
      state.isLoading = true;
    },
    [addUserData.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addUserData.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.orders = payload;
    },
  },
});

export const ordersReduser = orderSlice.reducer;
