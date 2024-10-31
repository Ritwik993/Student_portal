import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toogleNotification: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toogleNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
