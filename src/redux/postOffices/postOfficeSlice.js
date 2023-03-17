import { createSlice } from '@reduxjs/toolkit';
import { fetchPostOffice } from './postOfficeOperations';

const initialPostOffice = {
  items: [],
  isLoading: false,
  error: null,
  totalHits: 0,
  currentQuery: {
    page: 1,
    hitsPerPage: 10,
    cityRef: '',
    searchString: '',
  },
};

const postOfficeSlice = createSlice({
  name: 'postOffice',
  initialState: initialPostOffice,
  reducers: {
    setServerPage(state, { payload }) {
      state.currentQuery.page = payload;
    },

    setHitsPerPage(state, { payload }) {
      state.currentQuery.hitsPerPage = payload;
    },

    setCityRef(state, { payload }) {
      state.currentQuery.cityRef = payload;
    },

    setSearchString(state, { payload }) {
      state.currentQuery.searchString = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchPostOffice.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchPostOffice.fulfilled, (state, { payload }) => {
        const totalCount = payload.info.totalCount;
        state.totalHits = totalCount;
        state.items = payload.data;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchPostOffice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setServerPage, setCityRef, setSearchString, setHitsPerPage } =
  postOfficeSlice.actions;

export const postOfficeReducer = postOfficeSlice.reducer;
