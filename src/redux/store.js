import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsReduser } from './productSlice';
import { basketReducer } from './basketProductSlice';

const rootReducer = combineReducers({
  products: productsReduser,
  backet: basketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
