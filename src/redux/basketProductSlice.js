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
  },
});

export const { addProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
