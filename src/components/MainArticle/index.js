import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export const MainArticle = ({ article }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img className={classes.image} src={article.urlToImage} alt="" />
      <Link to={`/news/${article.source.id}/detail`} className={classes.link}>
        <Typography
          variant="h5"
          component="h5"
          align="justify"
          className={classes.title}
        >
          {article.title}
        </Typography>
      </Link>
      <Typography
        component="p"
        align="justify"
        color="textSecondary"
        className={classes.description}
      >
        {article.description}
      </Typography>
      <Typography className={classes.published}>
        {article.publishedAt} - {article.source.name}
      </Typography>
      <Typography className={classes.author}>{article.author}</Typography>
    </Container>
  );
};
