import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '../../models/Accounts';

//We define a type for the slice state
type accountState = {
  accounts: Account[];
};

const initialState: accountState = {
  accounts: [],
};

//Lets define the slice
export const AccountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action: PayloadAction<number>) => {
      state.accounts.splice(action.payload, 1);
    },
    updateAccount: (state, action: PayloadAction<Account>) => {
      state.accounts[action.payload.id] = action.payload;
    },
    setAccounts: (state, action: PayloadAction<Account[]>) => {
      state.accounts = action.payload;
    },
  },
});

export const accountsActions = AccountsSlice.actions;
