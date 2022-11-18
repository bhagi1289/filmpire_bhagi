import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tmdbApi } from '../services/TMDB';

console.log(tmdbApi.reducerPath, tmdbApi.reducer);
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),

});
setupListeners(store.dispatch);
export default store;

