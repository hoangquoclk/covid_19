import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export const Article = ({ article }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography
        variant="h5"
        component="h5"
        align="justify"
        className={classes.title}
      >
        {article.title}
      </Typography>
      <Typography
        component="p"
        align="justify"
        color="textPrimary"
        className={classes.description}
      >
        {article.description}
      </Typography>
      <img className={classes.image} src={article.urlToImage} alt="" />
      <Typography
        component="p"
        align="justify"
        color="textPrimary"
        className={classes.description}
      >
        {article.content}
      </Typography>
      <Typography className={classes.published}>
        {article.publishedAt} - {article.source.name}
      </Typography>
      <Typography className={classes.author}>{article.author}</Typography>
    </Container>
  );
};
