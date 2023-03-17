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
import { persistedCityReducer } from './postOffices/City/citySlice';
import { postOfficeReducer } from './postOffices/postOfficeSlice';

export const store = configureStore({
  reducer: {
    ttn: persistedTtnReducer,
    ttnFilter: ttnFilterReducer,

    city: persistedCityReducer,

    postOffice: postOfficeReducer,
    // officeSearch: officeSearchReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
