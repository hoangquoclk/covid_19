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
    if (props.type === "inflection")
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
}));
