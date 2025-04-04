  import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
  import rootReducer from './rootReducer';
  import { middlewares } from './middleware';
  import { NODE_ENV } from '@env';

  console.log(NODE_ENV);

  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['product/fetchProducts/fulfilled'],
          ignoredPaths: ['product.products'],
        },
      }).concat(middlewares),
    devTools:
      NODE_ENV !== 'production'
        ? {
            name: 'MyApp Store',
            maxAge: 50,
            trace: true,
          }
        : false,
    preloadedState: {
      product: {
        products: [],
        status: '',
        message: '',
        loading: false,
        error: null,
        isSplashVisible: true,
      },
      cart: {
        items: [],
      },
    },
  } as ConfigureStoreOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
