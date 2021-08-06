import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  SelectType,
  Dashboard,
  TableCountries,
  Loading,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { CountriesActions } from "../../redux/rootAction";
import { errorAlert } from "../../utils/alerts";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.listCountries);
  const [listSearchCountries, setListSearchCountries] = useState([]);
  const [displayType, setDisplayType] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = async () => {
    setIsLoading(true);
    await axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        dispatch(CountriesActions.setCountries(response.data));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        errorAlert(error);
      });
  };

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

  const handleDisplayTypeChange = (event) => {
    setDisplayType(event.target.value);
  };

  const getTopCountries = () => {
    let newList = [...countries];
    newList.sort((a, b) => b.cases - a.cases);
    let topCountries = newList.slice(0, 10);
    dispatch(CountriesActions.setTopCountries(topCountries));
  };

  useEffect(() => {
    getCountries();
    getTopCountries();
  }, []);

  return (
    <div>
      <Search onSubmit={handleSearchChange} listSearch={listSearchCountries} />
      <SelectType
        onDisplayTypeChange={handleDisplayTypeChange}
        displayType={displayType}
      />
      {displayType === "dashboard" ? (
        <Dashboard />
      ) : (
        <TableCountries countries={countries} />
      )}
      <Loading isOpen={isLoading} />
    </div>
  );
};
