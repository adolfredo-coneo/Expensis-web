import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//we define the notification Status
type NotificationStatus = 'success' | 'info' | 'warning' | 'error';

//we define the notification type
type NotificationType = {
  message: string;
  status: NotificationStatus;
  title: string;
};

//We define a type for the slice state
type LayoutState = {
  isSidebarOpen: boolean;
  notification: NotificationType;
};

//Lets define the slice initial state
const initialState: LayoutState = {
  isSidebarOpen: false,
  notification: { title: '', message: '', status: 'success' },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setNotification: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
  },
});

export const layoutActions = LayoutSlice.actions;
