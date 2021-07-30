import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { useStyles } from "./styles";
import { MainTable } from "./MainTable";

const countriesPerPage = 20;

export const TableCountries = ({ countries }) => {
  const classes = useStyles();
  const numPages = Math.ceil(countries.length / countriesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCountriesPerPage, setListCountriesPerPage] = useState([]);
  const [listFilterCountries, setListFilterCountries] = useState();
  const [typeFilter, setTypeFilter] = useState(null);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleFilterChange = (type) => {
    if (typeFilter === type) {
      setTypeFilter(null);
    } else {
      setTypeFilter(type);
    }
  };

  useEffect(() => {
    if (!typeFilter) {
      setListFilterCountries(countries);
    } else {
      let newList = [...countries];
      if (typeFilter === "country") {
        newList.sort((a, b) => {
          var countryA = a.country.toUpperCase();
          var countryB = b.country.toUpperCase();
          if (countryA < countryB) {
            return 1;
          }
          if (countryA > countryB) {
            return -1;
          }
          return 0;
        });
      } else if (typeFilter === "cases") {
        newList.sort((a, b) => b.cases - a.cases);
      } else if (typeFilter === "recovered") {
        newList.sort((a, b) => b.recovered - a.recovered);
      } else if (typeFilter === "deaths") {
        newList.sort((a, b) => b.deaths - a.deaths);
      } else if (typeFilter === "todayCases") {
        newList.sort((a, b) => b.todayCases - a.todayCases);
      }
      setListFilterCountries(newList);
    }
  }, [typeFilter, countries]);

  useEffect(() => {
    if (listFilterCountries) {
      const newList = listFilterCountries.slice(
        countriesPerPage * (currentPage - 1),
        countriesPerPage * currentPage
      );
      setListCountriesPerPage(newList);
    }
  }, [currentPage, listFilterCountries]);

  return (
    <Container className={classes.root}>
      <MainTable
        typeFilter={typeFilter}
        onChangeFilter={handleFilterChange}
        listCountriesPerPage={listCountriesPerPage}
      />
      <Pagination
        count={numPages}
        variant="outlined"
        color="primary"
        className={classes.pagination}
        onChange={handlePageChange}
      />
    </Container>
  );
};
