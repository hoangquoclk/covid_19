import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px auto",
  },
  logo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo__image: {
    width: 300,
    height: "auto",
  },
  search: {
    position: "relative",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "0px auto",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
    [theme.breakpoints.up("lg")]: {
      width: 500,
    },
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  list: {
    position: "absolute",
    width: "100%",
    top: 50,
    left: 0,
    border: "1px solid #afadad80",
    borderRadius: 5,
    zIndex: 2,
    maxHeight: 200,
    overflow: "auto",
    padding: 0,
  },
  link: {
    textDecoration: "none",
  },
}));
