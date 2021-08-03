import { configureStore } from "@reduxjs/toolkit";
import { CountriesReducer } from "./slice/countriesSlice";
import { WorldReducer } from "./slice/worldSlice";
import { ArticlesReducer } from "./slice/articlesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const reducers = combineReducers({
  countries: CountriesReducer,
  world: WorldReducer,
  articles: ArticlesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);
