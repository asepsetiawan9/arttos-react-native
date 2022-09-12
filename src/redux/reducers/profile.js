import {createSlice} from '@reduxjs/toolkit';
import {getProfile} from '../asyncActions/profile';
import {getUsers} from '../asyncActions/profile';
import {topup} from '../asyncActions/topup';

const initialState = {
  data: {},
  totalData: null,
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.data.balance = action.payload.balance;
    });
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.totalData = action.payload.infoPage;
      state.data = action.payload.result;
    });
  },
});

export {getProfile, getUsers};
export default profile.reducer;
