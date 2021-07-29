import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import { Search, Highlight, Summary, Loading } from "../../components";
import { WorldActions } from "../../redux/rootAction";
import { Container } from "@material-ui/core";

export const Detail = () => {
  const countries = useSelector((state) => state.countries.listCountries);
  const [listSearchCountries, setListSearchCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const { t } = useTranslation();
  const { detailId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearchChange = (newFilter) => {
    if (newFilter.searchText !== "") {
      let list = [];

      countries.forEach((item) => {
        if (item.country.includes(newFilter.searchText)) {
          list.push(item);
        }
      });

      setListSearchCountries(list);
    } else {
      setListSearchCountries([]);
    }
  };

  const getWorldStatus = async () => {
    await axios
      .get(`https://disease.sh/v3/covid-19/historical/${detailId}?lastdays=all`)
      .then((response) => {
        dispatch(WorldActions.setWorldStatus(response.data.timeline));
      })
      .catch((error) => alert(error));
  };

  const getCountry = async () => {
    await axios
      .get(`https://disease.sh/v3/covid-19/countries/${detailId}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getWorldStatus();
      getCountry();
      setListSearchCountries([]);
    }, 2000);
  }, [detailId]);

  return (
    <div>
      <Search
        onSubmit={handleSearchChange}
        listSearchCountries={listSearchCountries}
      />
      <Container>
        {country.countryInfo && <img src={country.countryInfo.flag} alt="" />}
      </Container>
      <Highlight
        url={`https://disease.sh/v3/covid-19/countries/${detailId}`}
        title={
          country.country && `${t("Situation.Country")} ${country.country}`
        }
      />
      <Summary />

      {isLoading && <Loading />}
    </div>
  );
};
