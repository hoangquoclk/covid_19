import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  SelectType,
  Dashboard,
  TableCountries,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { CountriesActions } from "../../redux/rootAction";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.listCountries);
  const [listSearchCountries, setListSearchCountries] = useState([]);
  const [displayType, setDisplayType] = useState("dashboard");

  const getCountries = async () => {
    await axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) =>
        dispatch(CountriesActions.setCountries(response.data))
      )
      .catch((error) => alert(error));
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

  useEffect(() => {
    getCountries();
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
    </div>
  );
};
