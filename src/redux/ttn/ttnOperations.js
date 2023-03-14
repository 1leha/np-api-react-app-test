import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_PATH, API_KEY } from 'utils/options';

const ttnApi = axios.create({
  baseURL: API_BASE_PATH,
});

export const fetchTtn = createAsyncThunk(
  'ttn/fetchTtn',
  async (ttnId, { rejectWithValue }) => {
    const axiosTtnConfig = {
      method: 'post',
      data: {
        apiKey: API_KEY,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: ttnId,
              Phone: '380600000000',
            },
          ],
        },
      },
    };

    try {
      console.log('axiosTtnConfig :>> ', axiosTtnConfig);
      const response = await ttnApi(axiosTtnConfig);
      console.log('fetchTtn response :>> ', await response.data.data[0]);
      return await response.data.data[0];
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error);
    }
  }
);
