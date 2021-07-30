import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MainLayout,
  MainArticle,
  ListArticles,
  SearchArticles,
} from "../../components";

const apiKey = "3edd668791c74087954c358034bdd5e1";
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

export const News = () => {
  const [listArticles, setListArticles] = useState([]);
  const [listSubArticles, setListSubArticles] = useState([]);
  const [listSearchArticles, setListSearchArticles] = useState([]);

  const getListArticles = async () => {
    await axios
      .get(url)
      .then((res) => setListArticles(res.data.articles))
      .catch((err) => console.log(err));
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
      />
      {listArticles.length > 0 && <MainArticle article={listArticles[0]} />}
      <hr />
      {listSubArticles && <ListArticles listSubArticles={listSubArticles} />}
    </MainLayout>
  );
};
