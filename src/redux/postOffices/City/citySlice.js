import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './cityOperations';
import { message } from 'utils/messages';

const persistConfig = {
  key: 'city',
  storage,
  whitelist: ['items'],
};

const initialCity = {
  items: [],
  isLoading: false,
  error: null,
};

const citySlice = createSlice({
  name: 'city',
  initialState: initialCity,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCities.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchCities.fulfilled, (state, { payload }) => {
        const allCities = payload.map(({ Ref, Description }) => ({
          Ref,
          Description,
        }));
        state.items = [
          { Ref: 'all', Description: message.allPostOffices },
          ...allCities,
        ];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCities.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const persistedCityReducer = persistReducer(
  persistConfig,
  citySlice.reducer
);
