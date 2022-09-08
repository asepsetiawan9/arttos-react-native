import {createSlice} from '@reduxjs/toolkit';
import {getTransactions} from '../asyncActions/transactions';

const initialState = {
  data: {},
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getTransactions.fulfilled, (state, action) => {
      // console.log(action.payload.result);
      state.data = action.payload.result;
    });
    // build.addCase(topup.fulfilled, (state, action) => {
    //   console.log('ini dari reducers', action.payload.balance);
    //   state.data.balance = action.payload.balance;
    // });
  },
});

export {getTransactions};
export default transactions.reducer;
