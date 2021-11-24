import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    counter: null,
  },
  reducers: {
    login: (state, action) => {
      state.counter = action.payload;
    },
    logout: (state) => {
      state.counter = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.counter.counter;

export default userSlice.reducer;
