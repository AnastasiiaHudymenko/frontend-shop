import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsReduser } from './productSlice';
import { basketReducer } from './basketProductSlice';
import { ordersReduser } from './orderSlice';

const rootReducer = combineReducers({
  products: productsReduser,
  basket: basketReducer,
  orders: ordersReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
