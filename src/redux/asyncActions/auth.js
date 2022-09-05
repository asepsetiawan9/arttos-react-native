import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const login = createAsyncThunk('auth/login', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    result.successMsg = data.message;
    result.token = data.result[0].token;
    return result;
  } catch (e) {
    console.log('tampil apabila koneksi gagal');
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/register', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('ini data bacend', data);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
