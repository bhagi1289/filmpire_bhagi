import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { tmdbApi } from '../services/TMDB';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),

});
// export default store;

