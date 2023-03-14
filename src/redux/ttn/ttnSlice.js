import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTtn } from './ttnOperations';

const persistConfig = {
  key: 'ttn',
  storage,
  whitelist: ['items'],
};

const initialTtn = {
  items: [],
  isLoading: false,
  error: null,
};

const ttnSlice = createSlice({
  name: 'ttn',
  initialState: initialTtn,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTtn.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchTtn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          ({ Number }) => Number !== payload.Number
        );

        const newItem = { requestDate: Date.now(), ...payload };
        state.items.push(newItem);
        state.items = state.items.sort((a, b) => b.requestDate - a.requestDate);
      })
      .addCase(fetchTtn.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const persistedTtnReducer = persistReducer(
  persistConfig,
  ttnSlice.reducer
);
