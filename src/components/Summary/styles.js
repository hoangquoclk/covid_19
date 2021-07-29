import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
    padding: 0,
  },
  btn__filter: {
    marginTop: 10,
  },
  date__filter: {
    backgroundColor: "white",
    marginTop: 30,
  },
}));
