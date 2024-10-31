import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toogleVideo: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toogleVideo } = videoSlice.actions;
export default videoSlice.reducer;
