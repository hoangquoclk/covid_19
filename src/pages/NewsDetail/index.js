import React, { useEffect, useState } from "react";
import { MainLayout, SearchArticles, Article, Loading } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { ArticlesActions } from "../../redux/rootAction";

export const NewsDetail = () => {
  const [listSearchArticles, setListSearchArticles] = useState([]);
  const articleDetail = useSelector((state) => state.articles.articleDetail);
  const listArticles = useSelector((state) => state.articles.listArticles);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
    setListSearchArticles([]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <SearchArticles
        onSubmit={handleSearchChange}
        listSearch={listSearchArticles}
        onClickArticleDetail={handleArticleDetailClick}
      />
      <Article article={articleDetail} />
      <Loading isOpen={isLoading} />
    </MainLayout>
  );
};
