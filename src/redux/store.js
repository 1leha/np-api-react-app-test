import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedTtnReducer } from './ttn/ttnSlice';
import { ttnFilterReducer } from './ttn/ttnFilter/ttnFilterSlice';

export const store = configureStore({
  reducer: {
    ttn: persistedTtnReducer,
    ttnFilter: ttnFilterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
