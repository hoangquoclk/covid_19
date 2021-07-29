import { configureStore } from "@reduxjs/toolkit";
import { CountriesReducer } from "./slice/countriesSlice";
import { WorldReducer } from "./slice/worldSlice";

export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    world: WorldReducer,
  },
});
