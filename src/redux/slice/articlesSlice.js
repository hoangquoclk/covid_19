import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  listArticles: [],
  articleDetail: {},
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.listArticles = action.payload;
    },
    setArticleDetail: (state, action) => {
      state.articleDetail = action.payload;
    },
  },
});

const { actions, reducer } = articlesSlice;

export { actions as ArticlesActions, reducer as ArticlesReducer };
