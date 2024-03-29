import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${"https://aahd.us/wp-content/uploads/2020/08/covid-pic-2.jpg"})`,
  },
  paperStyle: {
    height: "500px",
    width: "350px",
    backgroundColor: "#e9f9ff",
    objectFit: "cover",
  },
  avatar: {
    textAlign: "center",
    margin: "50px auto 0",
    color: "#f5f5f9",
    backgroundColor: "#306cf3",
    width: "50px",
    height: "50px",
  },
  titleLogin: {
    marginTop: "10px",
    textAlign: "center",
  },
  form: {
    marginTop: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    color: "#fff",
    width: "80%",
    marginBottom: "10px",
  },
  btnSubmit: {
    width: "80%",
    margin: "30px 0px 40px",
  },
}));
