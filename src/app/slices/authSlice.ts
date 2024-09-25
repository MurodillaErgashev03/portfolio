import { createSlice } from '@reduxjs/toolkit';
import {
  HAS_COMPANY,
  PROFILE,
  TOKEN,
  hasCompany,
  profile,
  token,
} from 'src/constants/storage';
import { IProfile } from '../services/auth/type';
import { PositionAttributes } from '../services/type';
import { authApi } from '../services/auth';
import { managementApi } from '../services/management';

export interface IAuthState {
  token?: string;
  isAuthenticated: boolean;
  profile?: IProfile;
  position?: PositionAttributes;
  hasCompany?: boolean;
}

const initialState: IAuthState = {
  token: token || '',
  isAuthenticated: token ? true : false,
  profile: profile ? JSON.parse(profile) : undefined,
  position: profile ? JSON.parse(profile).position : undefined,
  hasCompany: hasCompany,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.isAuthenticated = false;
      state.hasCompany = false;
      state.profile = undefined;
      state.position = undefined;

      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      //Login
      .addMatcher(authApi.endpoints.confirm.matchFulfilled, (state, action) => {
        state.token = action.payload.tokens.access;
        state.isAuthenticated = true;
        state.profile = action.payload.profile;
        state.position = action.payload.profile.position;
        state.hasCompany = action.payload.profile.company ? true : false;

        localStorage.setItem(TOKEN, action.payload.tokens.access);
        localStorage.setItem(PROFILE, JSON.stringify(action.payload.profile));
        localStorage.setItem(HAS_COMPANY, 'created');
      })
      //Profile
      .addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, action) => {
          state.profile = action.payload;
          state.position = action.payload.position;
          localStorage.setItem(PROFILE, JSON.stringify(action.payload));
        }
      )
      //Company
      .addMatcher(
        managementApi.endpoints.getCompany.matchFulfilled,
        (state, action) => {
          if (action.payload.results.length > 0) {
            state.hasCompany = true;
            localStorage.setItem(HAS_COMPANY, 'created');
          } else {
            state.hasCompany = false;
            localStorage.removeItem(HAS_COMPANY);
          }
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
