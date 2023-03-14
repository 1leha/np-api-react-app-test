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
  reducers: {
    removeTtn({ items }, { payload }) {
      const idx = items.findIndex(item => {
        return +item.Number === +payload;
      });
      items.splice(idx, 1);
    },

    removeAllTtn({ items }, _) {
      items.length = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTtn.pending, (state, _) => {
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
        state.error = payload;
      });
  },
});

export const { removeTtn, removeAllTtn } = ttnSlice.actions;

export const persistedTtnReducer = persistReducer(
  persistConfig,
  ttnSlice.reducer
);
