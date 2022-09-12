import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const topup = createAsyncThunk('transaction/top-up', async request => {
  const result = {};
  try {
    const send = qs.stringify(request.data);
    const {data} = await http(request.token).post(
      '/transactions/top-up',
      send,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
    );
    result.balance = data.result[0].balance;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
