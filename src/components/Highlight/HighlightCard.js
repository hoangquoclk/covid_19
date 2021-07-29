import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";

import { useStyles } from "./styles";

export const HighlightCard = ({ title, count, type }) => {
  const classes = useStyles({ type });

  return (
    <Grid item sm={4} xs={12}>
      <Card className={classes.wrapper} variant="outlined">
        <CardContent>
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
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
