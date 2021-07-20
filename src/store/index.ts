import { configureStore } from '@reduxjs/toolkit';
import { LayoutSlice } from './slices/layout';

const store = configureStore({
  reducer: { layout: LayoutSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
