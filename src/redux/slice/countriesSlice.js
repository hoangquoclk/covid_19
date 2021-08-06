import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  listCountries: [],
  topCountries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.listCountries = action.payload;
    },
    setTopCountries: (state, action) => {
      state.topCountries = action.payload;
    },
  },
});

const { actions, reducer } = countriesSlice;

export { actions as CountriesActions, reducer as CountriesReducer };
