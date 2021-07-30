import React, { useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { errorAlert, welcomeAlert } from "../../utils/alerts";
import { Loading } from "../../components";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { useStyles } from "./styles";
import { LoginSchema } from "../../utils/Yup";

export const Login = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const accounts = JSON.parse(localStorage.getItem("accounts"));

  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLoginClick(values);
    },
    validationSchema: LoginSchema,
  });

  const handleLoginClick = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      if (values.username === "admin" && values.password === "admin") {
        setIsLoading(false);
        localStorage.setItem("auth", true);
        history.push("/home");
        welcomeAlert();
      } else if (accounts) {
        accounts.forEach((account) => {
          if (
            account.username === values.username &&
            account.password === values.password
          ) {
            setIsLoading(false);
            localStorage.setItem("auth", true);
            history.push("/home");
            welcomeAlert();
          }
        });
      } else {
        setIsLoading(false);
        errorAlert("Username or password incorrect");
      }
    }, 3000);
  };

  const handleSignUpClick = () => {
    history.push("/signUp");
  };

  return (
    <div className={classes.container}>
      <Paper elevation={10} className={classes.paperStyle}>
        <Avatar
          className={classes.avatar}
          src="https://images.squarespace-cdn.com/content/v1/5e4f5b7ee8b790561bbb65e4/1612935738924-F2CEDUK88RLYPPRUGRBE/COVID-19+icon.png?format=1000w"
        />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.titleLogin}
          color="primary"
        >
          COVID-19
        </Typography>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={loginFormik.handleSubmit}
        >
          <TextField
            className={classes.textField}
            required
            id="username"
            label="Username"
            value={loginFormik.values.username}
            onChange={loginFormik.handleChange}
            error={
              loginFormik.touched.username &&
              Boolean(loginFormik.errors.username)
            }
            helperText={
              loginFormik.touched.username && loginFormik.errors.username
            }
          />
          <TextField
            type="password"
            className={classes.textField}
            required
            id="password"
            label="Password"
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
            error={
              loginFormik.touched.password &&
              Boolean(loginFormik.errors.password)
            }
            helperText={
              loginFormik.touched.password && loginFormik.errors.password
            }
          />
          <Button
            type="submit"
            className={classes.btnSubmit}
            variant="contained"
            color="primary"
            endIcon={<LockOpenIcon />}
          >
            SIGN IN
          </Button>
          <Typography color="secondary">
            Don't have an account?{" "}
            <Button
              color="secondary"
              variant="contained"
              onClick={handleSignUpClick}
            >
              Create
            </Button>
          </Typography>
        </form>
      </Paper>

      <Loading isOpen={isLoading} />
    </div>
  );
};
