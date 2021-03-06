import { configureStore } from '@reduxjs/toolkit';
import { LayoutSlice } from './slices/layout';
import { AuthSlice } from './slices/auth';
import { AccountsSlice } from './slices/accounts';

const store = configureStore({
  reducer: {
    layout: LayoutSlice.reducer,
    auth: AuthSlice.reducer,
    accounts: AccountsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
