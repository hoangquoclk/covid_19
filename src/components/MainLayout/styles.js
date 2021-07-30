import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btnLanguage: {
    color: "#fff",
  },
  typography: {
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      background: "#dddddd",
    },
  },
  option: {
    color: "#fff",
  },
  newsTitle: {
    marginRight: 20,
    fontSize: "1.1rem",
  },
  homeTitle: {
    flexGrow: 1,
    fontSize: "1.1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "#eeeeee",
    },
  },
  btnAction: {
    fontSize: ".8rem",
  },
}));
