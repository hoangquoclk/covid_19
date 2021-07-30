import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
    [theme.breakpoints.up("md")]: {
      width: 800,
    },
  },
  image: {
    width: "100%",
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 600,
    color: "#3f51b5",
  },
  description: {},
  published: {
    marginTop: 15,
    fontStyle: "italic",
  },
  author: {
    fontWeight: 600,
  },
  link: {
    textDecoration: "none",
  },
}));
