import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  left__article__item: {
    padding: 10,
    borderBottom: "1px solid gray",
  },
  left__article__item__title: {
    fontWeight: 600,
  },
  left__articles__item__image: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5",
    "&:hover": {
      color: "#91a0f1",
    },
  },
  right__articles__item__image: {
    width: "100%",
  },
  right__articles__item: {
    padding: 20,
  },
}));
