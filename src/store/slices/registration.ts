import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../../models/User';

//Lets define the initial state of the slice
const initialState: UserModel = {
  name: '',
  email: '',
  password: '',
};

//Lets define the slice
const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserModel>) => {},
  },
});

export const regisrationActions = registrationSlice.actions;
