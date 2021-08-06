import { Container, ButtonGroup, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LineChart } from "../";
import { useStyles } from "./styles";
import { filterData, filterDataByDateRange } from "../../utils/data";
import { useTranslation } from "react-i18next";
import { DatePicker } from "./DatePicker";
import moment from "moment";
import { errorAlert } from "../../utils/alerts";

export const Summary = ({ language }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [filter, setFilter] = useState("week");
  const worldStatus = useSelector((state) => state.world.worldStatus);
  const [worldStatusFilter, setWorldStatusFilter] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleDateRangeFilterClick = () => {
    setFilter("");
    if (startDate < minDate || endDate < minDate) {
      errorAlert(
        `${t("RangeDate.ErrorMinDate")} ${moment(minDate).format("MM/DD/YYYY")}`
      );
    } else if (startDate > maxDate || endDate > maxDate) {
      errorAlert(
        `${t("RangeDate.ErrorMaxDate")} ${moment(maxDate).format("MM/DD/YYYY")}`
      );
    } else if (startDate > endDate) {
      errorAlert(`${t("RangeDate.ErrorStartDateAndEndDate")}`);
    } else {
      const newStatus = filterDataByDateRange(
        worldStatus,
        moment(startDate).format("M/D/YY"),
        moment(endDate).format("M/D/YY")
      );
      setWorldStatusFilter(newStatus);
    }
  };

  useEffect(() => {
    if (worldStatus.cases) {
      setMinDate(new Date(Object.keys(worldStatus.cases)[0]));
      setMaxDate(
        new Date(
          Object.keys(worldStatus.cases)[
            Object.keys(worldStatus.cases).length - 1
          ]
        )
      );
      setStartDate(new Date(Object.keys(worldStatus.cases)[0]));
      setEndDate(
        new Date(
          Object.keys(worldStatus.cases)[
            Object.keys(worldStatus.cases).length - 1
          ]
        )
      );
    }
  }, [worldStatus]);

  useEffect(() => {
    if (filter !== "") {
      if (worldStatus.cases) {
        const newStatus = filterData(worldStatus, filter);
        setWorldStatusFilter(newStatus);
      }
    }
  }, [filter, worldStatus, language]);

  return (
    <>
      {worldStatus.cases && (
        <Container className={classes.root}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleFilterChange("week")}
              variant={filter === "week" ? "contained" : "outlined"}
            >
              {t("Time.Week")}
            </Button>
            <Button
              onClick={() => handleFilterChange("month")}
              variant={filter === "month" ? "contained" : "outlined"}
            >
              {t("Time.Month")}
            </Button>
            <Button
              onClick={() => handleFilterChange("year")}
              variant={filter === "year" ? "contained" : "outlined"}
            >
              {t("Time.Year")}
            </Button>
          </ButtonGroup>

          <DatePicker
            startDate={startDate}
            endDate={endDate}
            onChangeStartDate={handleStartDateChange}
            onChangeEndDate={handleEndDateChange}
            minDate={minDate}
            maxDate={maxDate}
            onClickRangeFilter={handleDateRangeFilterClick}
            filter={filter}
          />

          {worldStatusFilter && <LineChart data={worldStatusFilter} />}
        </Container>
      )}
    </>
  );
};
