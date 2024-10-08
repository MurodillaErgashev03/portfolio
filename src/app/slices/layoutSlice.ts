import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { THEME_COLOR, isDarkTheme } from 'src/constants/storage';
import { themeColors } from 'src/theme';
import { IThemeColor } from 'src/theme/type';
import { managementApi } from '../services/management';
import { financeApi } from '../services/finance';

export interface ILayoutState {
  menuMode?: 'open' | 'close';
  darkMode: boolean;
  colors: IThemeColor;
  screenMode?: 'enter' | 'exit';
  collapsed?: boolean;
  total?: number;
}

const initialState: ILayoutState = {
  menuMode: 'open',
  darkMode: isDarkTheme,
  colors: isDarkTheme ? themeColors.dark : themeColors.light,
  collapsed: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeMenuMode: (state) => {
      if (state.menuMode === 'close') {
        state.menuMode = 'open';
        state.collapsed = false;
      } else {
        state.menuMode = 'close';
        state.collapsed = true;
      }
    },
    changeCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    changeTheme: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload === 'light') state.darkMode = false;
      else if (action.payload === 'dark') state.darkMode = true;
      else state.darkMode = !state.darkMode;

      if (state.darkMode) {
        localStorage.setItem(THEME_COLOR, 'dark');
        state.colors = themeColors.dark;
      } else {
        localStorage.setItem(THEME_COLOR, 'light');
        state.colors = themeColors.light;
      }

      for (const key in state.colors) {
        document.documentElement.style.setProperty(
          '--color_' + key,
          state.colors[key as keyof IThemeColor]
        );
      }
    },
    changeScreenMode: (
      state,
      action: PayloadAction<ILayoutState['screenMode']>
    ) => {
      state.screenMode = action.payload;
    },
    changeTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Login
      .addMatcher(
        managementApi.endpoints.getContingent.matchFulfilled,
        (state, action) => {
          state.total = action.payload.count;
        }
      )
      .addMatcher(
        managementApi.endpoints.getContingentDetail.matchFulfilled,
        (state, action) => {
          state.total = action.payload.count;
        }
      )
      .addMatcher(
        financeApi.endpoints.getCash.matchFulfilled,
        (state, action) => {
          state.total = action.payload.count;
        }
      )
      .addMatcher(
        financeApi.endpoints.getFacture.matchFulfilled,
        (state, action) => {
          state.total = action.payload.count;
        }
      );
  },
});

export const {
  changeMenuMode,
  changeCollapsed,
  changeTheme,
  changeScreenMode,
  changeTotal,
} = layoutSlice.actions;

export default layoutSlice.reducer;
