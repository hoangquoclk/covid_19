import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { HighlightCard } from "./HighlightCard";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const Highlight = ({ url, title }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [summary, setSummary] = useState([]);
  const language = localStorage.getItem("i18nextLng");

  const getInformationToday = async () => {
    await axios
      .get(url)
      .then((response) => {
        setSummary([
          {
            title: t("NumberOfCases.Cases"),
            count: response.data.cases,
            type: "cases",
          },
          {
            title: t("NumberOfCases.Recovered"),
            count: response.data.recovered,
            type: "recovered",
          },
          {
            title: t("NumberOfCases.Death"),
            count: response.data.deaths,
            type: "death",
          },
        ]);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getInformationToday();
  }, [language, url]);

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Grid container spacing={3}>
        {summary &&
          summary.map((item, index) => (
            <HighlightCard
              key={index}
              title={item.title}
              count={item.count}
              type={item.type}
            />
          ))}
      </Grid>
    </Container>
  );
};
