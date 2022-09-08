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
      // console.log(action.payload.result);
      state.data = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      // console.log('ini dari reducers', action.payload.balance);
      state.data.balance = action.payload.balance;
    });
    build.addCase(getUsers.fulfilled, (state, action) => {
      // console.log(
      //   'ini data jumlah userrrrrrrrrr',
      //   action.payload.infoPage.totalData,
      // );
      state.totalData = action.payload.infoPage;
      state.data = action.payload.result;
    });
  },
});

export {getProfile, getUsers};
export default profile.reducer;
