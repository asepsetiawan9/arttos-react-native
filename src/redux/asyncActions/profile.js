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
      // console.log('ini dari actionsadsad', data);
      return data;
    } catch (e) {
      // console.log('error muncullah');
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
