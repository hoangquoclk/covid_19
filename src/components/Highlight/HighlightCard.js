import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import { useStyles } from "./styles";
import TimelineIcon from "@material-ui/icons/Timeline";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

export const HighlightCard = ({ title, count, type }) => {
  const classes = useStyles({ type });

  return (
    <Grid item sm={4} xs={12}>
      <Card className={classes.wrapper} variant="outlined">
        <CardContent>
          <div className={classes.icon}>
            <span className={classes.icon__visualization}>
              {type === "cases" && <SentimentDissatisfiedIcon />}
              {type === "recovered" && <SentimentVerySatisfiedIcon />}
              {type === "deaths" && <SentimentVeryDissatisfiedIcon />}
            </span>
            <span>
              <TimelineIcon className={classes.icon__line} />
            </span>
          </div>
          <Typography
            component="p"
            variant="body2"
            className={classes.card__title}
          >
            {title}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            className={classes.card__count}
          >
            <CountUp end={count} duration={2} delay={0.5} separator="," />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
