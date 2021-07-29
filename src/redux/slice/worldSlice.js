import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  worldStatus: {},
};

export const worldSlice = createSlice({
  name: "world",
  initialState,
  reducers: {
    setWorldStatus: (state, action) => {
      state.worldStatus = action.payload;
    },
  },
});

const { actions, reducer } = worldSlice;

export { actions as WorldActions, reducer as WorldReducer };
