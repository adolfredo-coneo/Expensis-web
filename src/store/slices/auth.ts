import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//We define a type for the slice state
type authState = {
  name: string | null;
  email: string | null;
};

//Lets define the initial state of the slice
const initialState: authState = {
  name: null,
  email: null,
};

//Lets define the slice
export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<authState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    signOutUser: (state) => {
      state.email = null;
      state.name = null;
    },
  },
});

export const authActions = AuthSlice.actions;
