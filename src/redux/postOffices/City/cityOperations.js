import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_PATH, API_KEY } from 'utils/options';

const cityApi = axios.create({
  baseURL: API_BASE_PATH,
});

export const fetchCities = createAsyncThunk(
  'city/fetchCities',
  async (_, { rejectWithValue }) => {
    const axiosCityConfig = {
      method: 'post',
      data: {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getCities',
      },
    };

    try {
      const response = await cityApi(axiosCityConfig);
      return await response.data.data;
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error);
    }
  }
);
