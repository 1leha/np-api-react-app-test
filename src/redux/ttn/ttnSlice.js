import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'ttn',
  storage,
};

const initialTtn = { ttn: [] };

const ttnSlice = createSlice({
  name: 'ttn',
  initialState: initialTtn,
  reducers: {},
  extraReducers: {},
});

export const persistedTtnReducer = persistReducer(
  persistConfig,
  ttnSlice.reducer
);
