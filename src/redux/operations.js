import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3002/';

export const getAllProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/products');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserData = async data => {
  try {
    await axios.post('users/order', data);
  } catch (error) {
    console.log(error);
  }
};
