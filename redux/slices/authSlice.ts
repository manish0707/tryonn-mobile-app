import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types';

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{user: IUser}>) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
