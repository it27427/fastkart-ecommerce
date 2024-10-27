import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/index';
import AdminProductsSlice from './admin/products/index';

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
  },
});

export default store;
