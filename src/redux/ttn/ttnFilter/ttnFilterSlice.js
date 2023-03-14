import { createSlice } from '@reduxjs/toolkit';

const ttnFilter = createSlice({
  name: 'ttnFilter',
  initialState: '',
  reducers: {
    inputFilterTtn(_, { payload }) {
      return payload;
    },
  },
});

export const { inputFilterTtn } = ttnFilter.actions;

export const ttnFilterReducer = ttnFilter.reducer;
