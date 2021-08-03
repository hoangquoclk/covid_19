import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const DatePicker = ({
  startDate,
  endDate,
  minDate,
  maxDate,
  onChangeStartDate,
  onChangeEndDate,
  onClickRangeFilter,
  filter,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="start-date"
          label={t("RangeDate.StartDate")}
          minDate={minDate}
          maxDate={maxDate}
          value={startDate}
          onChange={onChangeStartDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          minDate={minDate}
          maxDate={maxDate}
          margin="normal"
          id="end-date"
          label={t("RangeDate.EndDate")}
          value={endDate}
          onChange={onChangeEndDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
      <Button
        variant="contained"
        variant={filter === "" ? "contained" : "outlined"}
        color="primary"
        className={classes.btn__filter}
        onClick={onClickRangeFilter}
      >
        {t("RangeDate.ButtonFilter")}
      </Button>
    </MuiPickersUtilsProvider>
  );
};
