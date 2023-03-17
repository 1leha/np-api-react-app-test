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
      const response = await ttnApi(axiosTtnConfig);
      return await response.data.data[0];
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error);
    }
  }
);
