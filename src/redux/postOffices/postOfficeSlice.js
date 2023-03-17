import { createSlice } from '@reduxjs/toolkit';
import { fetchPostOffice } from './postOfficeOperations';

const initialPostOffice = {
  items: [],
  isLoading: false,
  error: null,
  hitsPerPage: 10,
  totalHits: 0,
  cargoCapacity: 0,
  currentQuery: {
    page: 1,
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

    setCityRef(state, { payload }) {
      state.currentQuery.cityRef = payload;
    },

    setSearchString(state, { payload }) {
      state.currentQuery.searchString = payload;
    },

    setcargoCapacity(state, { payload }) {
      state.cargoCapacity = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchPostOffice.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchPostOffice.fulfilled, (state, { payload }) => {
        // console.log('payload :>> ', payload.data);

        const totalCount = payload.info.totalCount;

        if (totalCount === state.totalHits) {
          // console.log('totalCount :>> ', totalCount);
          state.items.push(...payload.data);
          return;
        }

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

export const { setServerPage, setCityRef, setSearchString, setcargoCapacity } =
  postOfficeSlice.actions;

export const postOfficeReducer = postOfficeSlice.reducer;
