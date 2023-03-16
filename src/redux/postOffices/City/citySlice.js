import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './cityOperations';

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
        // console.log('payload :>> ', payload);
        const allCities = payload.map(({ Ref, Description }) => ({
          Ref,
          Description,
        }));
        // console.log('allCities :>> ', allCities[1313]);
        state.items = [
          { Ref: 'all', Description: 'Усі відділення...' },
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
