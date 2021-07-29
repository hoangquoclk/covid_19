import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  listCountries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.listCountries = action.payload;
    },
  },
});

const { actions, reducer } = countriesSlice;

export { actions as CountriesActions, reducer as CountriesReducer };
