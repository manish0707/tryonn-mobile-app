import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types';

interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{user: IUser}>) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
