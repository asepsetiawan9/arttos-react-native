import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getProfile = createAsyncThunk(
  'profile/getprofile',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get('/profile/getprofile');
      console.log('ini dari actionsadsad', data);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const getUsers = createAsyncThunk('users/all-users', async token => {
  const result = {};
  try {
    const {data} = await http(token).get('/users/getallusers');
    return data;
  } catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});
