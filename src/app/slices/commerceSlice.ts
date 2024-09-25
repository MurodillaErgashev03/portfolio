import { createSlice } from '@reduxjs/toolkit';
import { commerceApi } from '../services/commerce';
import { ILotRes } from '../services/commerce/type';

export interface IAuthState {
  lotInfo?: ILotRes;
}

const initialState: IAuthState = {};

const commerceSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Login
      .addMatcher(
        commerceApi.endpoints.getLot.matchFulfilled,
        (state, action) => {
          state.lotInfo = action.payload;
        }
      );
  },
});

export const {} = commerceSlice.actions;
export default commerceSlice.reducer;
