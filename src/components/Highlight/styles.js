import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: "2rem",
  },
  wrapper: (props) => {
    if (props.type === "cases")
      return {
        borderBottom: "5px solid #032cf7",
        borderTop: "5px solid #032cf7",
      };
    else if (props.type === "recovered")
      return {
        borderBottom: "5px solid #28a745",
        borderTop: "5px solid #28a745",
      };
    else
      return {
        borderBottom: "5px solid #c9302c",
        borderTop: "5px solid #c9302c",
      };
  },
  card__title: {
    fontSize: 18,
    marginBottom: 5,
  },
  card__count: {
    fontWeight: "bold",
    fontSize: 18,
  },

  icon: (props) => {
    if (props.type === "cases")
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "2rem",
        color: "#032cf7",
      };
    else if (props.type === "recovered")
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "2rem",
        color: "#28a745",
      };
    else
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "2rem",
        color: "#c9302c",
      };
  },
  icon__visualization: {
    fontSize: "2rem",
    padding: 0,
  },
  icon__line: {
    fontSize: "2rem",
    padding: 0,
  },
}));
