import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getTransactions = createAsyncThunk(
  'transactions/trans-history?limit=50',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get(
        '/transactions/trans-history?limit=50',
      );
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);
