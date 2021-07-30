import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export const ListArticles = ({ listSubArticles }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.left__article}>
          {listSubArticles &&
            listSubArticles.map((item, index) => {
              if (index <= 11) {
                return (
                  <Container
                    className={classes.left__article__item}
                    key={index}
                  >
                    <Typography
                      component="h6"
                      variant="h5"
                      className={classes.left__article__item__title}
                    >
                      <Link
                        to={`/news/${item.source.id}/detail`}
                        className={classes.link}
                      >
                        {item.title}
                      </Link>
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Link to={`/news/${item.source.id}/detail`}>
                          <img
                            className={classes.left__articles__item__image}
                            src={item.urlToImage}
                            alt=""
                          />
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        className={classes.left__articles__item__des}
                      >
                        <Typography align="justify">
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                );
              }
              return null;
            })}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.right__articles}>
          {listSubArticles &&
            listSubArticles.map((item, index) => {
              if (index > 11) {
                return (
                  <Container
                    className={classes.right__articles__item}
                    key={index}
                  >
                    <Link to={`/news/${item.source.id}/detail`}>
                      <img
                        className={classes.right__articles__item__image}
                        src={item.urlToImage}
                        alt=""
                      />
                    </Link>
                    <Typography
                      variant="h5"
                      component="h5"
                      className={classes.right__articles__item__title}
                    >
                      <Link
                        to={`/news/${item.source.id}/detail`}
                        className={classes.link}
                      >
                        {item.title}
                      </Link>
                    </Typography>
                    <Typography
                      component="p"
                      color="textSecondary"
                      align="justify"
                      className={classes.right__articles__item__des}
                    >
                      {item.description}
                    </Typography>
                  </Container>
                );
              }
              return null;
            })}
        </Grid>
      </Grid>
    </Container>
  );
};
