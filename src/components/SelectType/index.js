import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectType = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" className={classes.label}>
          {t("SelectType.Display")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.displayType}
          onChange={props.onDisplayTypeChange}
          className={classes.select}
        >
          <MenuItem value="dashboard">{t("SelectType.Dashboard")}</MenuItem>
          <MenuItem value="table">{t("SelectType.Table")}</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};
