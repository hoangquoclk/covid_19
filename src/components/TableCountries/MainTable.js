import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import { useStyles, StyledTableRow, StyledTableCell } from "./styles";

export const MainTable = ({
  listCountriesPerPage,
  typeFilter,
  onChangeFilter,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              onClick={() => onChangeFilter("country")}
              className={classes.columnTitle}
            >
              {t("Table.1")}{" "}
              {typeFilter === "country" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </StyledTableCell>
            <StyledTableCell
              align="right"
              onClick={() => onChangeFilter("cases")}
              className={classes.columnTitle}
            >
              {t("Table.2")}
              {typeFilter === "cases" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </StyledTableCell>
            <StyledTableCell
              align="right"
              onClick={() => onChangeFilter("recovered")}
              className={classes.columnTitle}
            >
              {t("Table.3")}
              {typeFilter === "recovered" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </StyledTableCell>
            <StyledTableCell
              align="right"
              onClick={() => onChangeFilter("deaths")}
              className={classes.columnTitle}
            >
              {t("Table.4")}
              {typeFilter === "deaths" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </StyledTableCell>
            <StyledTableCell
              align="right"
              onClick={() => onChangeFilter("todayCases")}
              className={classes.columnTitle}
            >
              {t("Table.5")}
              {typeFilter === "todayCases" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listCountriesPerPage &&
            listCountriesPerPage.map((country, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    className={classes.link}
                    to={`/detail/${country.countryInfo._id}`}
                  >
                    <img
                      className={classes.image__country}
                      alt={`flag of ${country.country}`}
                      src={country.countryInfo.flag}
                    />{" "}
                    {country.country}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{country.cases}</StyledTableCell>
                <StyledTableCell align="right">
                  {country.recovered}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {country.deaths}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {country.todayCases}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
