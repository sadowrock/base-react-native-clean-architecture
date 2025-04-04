import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductUseCase from '../../../domain/useCases/productUseCase';
import ProductRepository from '../../../data/repositories/productRepository';
import { Product } from '../../../domain/entities/product';

const productRepository = new ProductRepository();
const getProductUseCase = new ProductUseCase(productRepository);

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await getProductUseCase.execute();
  return response;
});

interface ProductState {
  products: Product[];
  status: string;
  message: string;
  loading: boolean;
  error: string | null;
  isSplashVisible: boolean;
}

const initialState: ProductState = {
  products: [],
  status: '',
  message: '',
  loading: false,
  error: null,
  isSplashVisible: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    hideSplash: (state) => {
      state.isSplashVisible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.product;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { hideSplash } = productSlice.actions;

  export default productSlice.reducer;
