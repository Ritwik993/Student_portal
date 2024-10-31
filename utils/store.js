import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";
import notificationSlice from "./notificationSlice";
const store = configureStore({
  reducer: {
    video: videoSlice,
    notification: notificationSlice,
  },
});

export default store;
