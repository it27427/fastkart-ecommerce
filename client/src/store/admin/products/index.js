import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  products: [],
};

export const createNewProduct = createAsyncThunk(
  '/products/createNewProduct',
  async (formData) => {
    const url = 'http://localhost:8080/api/admin/products/create';
    const result = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAllProducts',
  async () => {
    const url = 'http://localhost:8080/api/admin/products/read';
    const result = await axios.get(url);

    return result?.data;
  }
);

export const updateProduct = createAsyncThunk(
  '/products/updateProduct',
  async ({ id, formData }) => {
    const url = `http://localhost:8080/api/admin/products/update/${id}`;
    const result = await axios.put(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  '/products/deleteProduct',
  async ({ id, formData }) => {
    const url = `http://localhost:8080/api/admin/products/delete/${id}`;
    const result = await axios.delete(url);

    return result?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: 'adminProducts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
      });
  },
});

export default AdminProductsSlice.reducer;
