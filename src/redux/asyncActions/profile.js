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

export const uploadImage = createAsyncThunk(
  'profile/update-picture',
  async param => {
    const result = {};
    const form = new FormData();
    form.append('picture', {
      uri: param.data.uri,
      name: param.data.fileName,
      type: param.data.type,
    });
    try {
      const {data} = await http(param.token).patch(
        'profile/updateprofile',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const getAllUsers = createAsyncThunk(
  'users/all-users',
  async ({token, search, limit, page}) => {
    const result = {};
    // console.log('ini search', search);
    limit = parseInt(limit) || 5;
    page = parseInt(page) || 1;
    try {
      const query = new URLSearchParams({
        search,
        limit,
        page,
      }).toString();
      const {data} = await http(token).get(`/users/getallusers?${query}`);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);
