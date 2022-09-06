import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getProfile = createAsyncThunk(
  'profile/getprofile',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get('/profile/getprofile');
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);
