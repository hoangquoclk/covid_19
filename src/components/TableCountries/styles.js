import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableRow, TableCell } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useStyles = makeStyles({
  root: {
    margin: "30px auto 0",
  },
  table: {
    minWidth: 700,
  },
  image__country: {
    width: 50,
    marginRight: 10,
  },
  link: {
    textDecoration: "none",
    color: "#5d5dfb",
    "&:hover": {
      color: "blue",
    },
  },
  pagination: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    padding: "30px 0",
  },
  columnTitle: {
    cursor: "pointer",
  },
});
