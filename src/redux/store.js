import { configureStore } from "@reduxjs/toolkit";
import { CountriesReducer } from "./slice/countriesSlice";
import { WorldReducer } from "./slice/worldSlice";
import { ArticlesReducer } from "./slice/articlesSlice";

export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    world: WorldReducer,
    articles: ArticlesReducer,
  },
});
