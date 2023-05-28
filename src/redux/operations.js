import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://backend-shop-fabr.onrender.com/';

export const getAllProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/products');

      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const addUserData = createAsyncThunk(
  'orders/sendOrder',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('users/order', data);

      const order = res.data.orederNumber;
      const name = res.data.name;
      toast.success(`${name} your order number №${order}`);

      return res.data;
    } catch (e) {
      toast.warn(e.message);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
