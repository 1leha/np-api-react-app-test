import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_PATH, API_KEY } from 'utils/options';

const postOfficeApi = axios.create({
  baseURL: API_BASE_PATH,
});

export const fetchPostOffice = createAsyncThunk(
  'postOffice/fetchCities',
  async (
    { CityRef, Page, Limit, Language, FindByString },
    { rejectWithValue }
  ) => {
    const axiospostOfficeConfig = {
      method: 'post',
      data: {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef,
          Page,
          Limit,
          Language,
          FindByString,
        },
      },
    };

    try {
      const response = await postOfficeApi(axiospostOfficeConfig);
      return await response.data;
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error);
    }
  }
);
