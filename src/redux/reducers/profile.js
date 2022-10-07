import {createSlice} from '@reduxjs/toolkit';
import {
  getProfile,
  uploadImage,
  getUsers,
  getAllUsers,
} from '../asyncActions/profile';
import {topup} from '../asyncActions/topup';

const initialState = {
  data: {},
  errorMsg: null,
  successMsg: null,
  dataProfile: {},
  dataUser: [],
  dataAllUser: [],
  totalData: null,
  tabelInfo: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.dataProfile = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.data.balance = action.payload.balance;
    });
    build.addCase(uploadImage.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(uploadImage.fulfilled, (state, action) => {
      if (action.payload.results !== undefined) {
        state.successMsg = action.payload.message;
        state.errorMsg = action.payload.errorMsg;
        state.dataProfile.picture = action.payload.result.picture;
      } else {
        state.errorMsg = 'upload fail';
      }
    });
    build.addCase(getAllUsers.fulfilled, (state, action) => {
      state.tabelInfo = action.payload.infoPage;
      state.dataAllUser = action.payload.result;
    });
    // build.addCase(getUsers.fulfilled, (state, action) => {
    //   state.totalData = action.payload.infoPage;
    //   state.dataUser = action.payload.result;
    // });
  },
});

export {getProfile, getAllUsers, getUsers, uploadImage};
export default profile.reducer;
