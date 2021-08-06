import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ArticlesActions } from "../../redux/rootAction";
import {
  MainLayout,
  MainArticle,
  ListArticles,
  SearchArticles,
  Loading,
} from "../../components";
import { errorAlert } from "../../utils/alerts";

// const apiKey = "3edd668791c74087954c358034bdd5e1";
// const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
const url = "https://article-json-server.herokuapp.com/articles";

export const News = () => {
  const listArticles = useSelector((state) => state.articles.listArticles);
  const [listSubArticles, setListSubArticles] = useState([]);
  const [listSearchArticles, setListSearchArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getListArticles = async () => {
    setIsLoading(true);
    await axios
      .get(url)
      .then((res) => {
        dispatch(ArticlesActions.setArticles(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        errorAlert(err);
      });
  };

  const handleSearchChange = (newFilter) => {
    if (newFilter.searchText !== "") {
      let list = [];

      listArticles.forEach((item) => {
        if (item.title.includes(newFilter.searchText)) {
          list.push(item);
        }
      });

      setListSearchArticles(list);
    } else {
      setListSearchArticles([]);
    }
  };

  const handleArticleDetailClick = (article) => {
    dispatch(ArticlesActions.setArticleDetail(article));
  };

  useEffect(() => {
    getListArticles();
  }, []);

  useEffect(() => {
    setListSubArticles(listArticles.slice(1, listArticles.length));
  }, [listArticles]);

  return (
    <MainLayout>
      <SearchArticles
        onSubmit={handleSearchChange}
        listSearch={listSearchArticles}
        onClickArticleDetail={handleArticleDetailClick}
      />
      {listArticles.length > 0 && (
        <MainArticle
          article={listArticles[0]}
          onClickArticleDetail={handleArticleDetailClick}
        />
      )}
      <hr />
      {listSubArticles && (
        <ListArticles
          listSubArticles={listSubArticles}
          onClickArticleDetail={handleArticleDetailClick}
        />
      )}
      <Loading isOpen={isLoading} />
    </MainLayout>
  );
};
