import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getTransactions = createAsyncThunk(
  'transactions/trans-history',
  async ({token, limit, page}) => {
    const result = {};
    limit = parseInt(limit) || 5;
    page = parseInt(page) || 1;
    try {
      const query = new URLSearchParams({
        limit,
        page,
      }).toString();
      const {data} = await http(token).get(
        `transactions/trans-history?${query}`,
      );
      console.log('ini dari action', data);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);


export const getUserById = createAsyncThunk(
  'users/getDataUser',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http().get(`/users/getuserdetail/${request}`);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const transferMoney = createAsyncThunk(
  'transactions/transfer',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).post(
        '/transactions/transfer',
        send,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return data.result;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
