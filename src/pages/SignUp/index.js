import React, { useState } from "react";
import { useFormik } from "formik";
import { errorAlert, successAlert } from "../../utils/alerts";
import { useHistory } from "react-router";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import HowToRegIcon from "@material-ui/icons/HowToReg";

import { Loading } from "../../components";
import { useStyles } from "./styles";
import { SignUpSchema } from "../../utils/Yup";

export const SignUp = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignUpClick = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      if (values.password === values.confirmPassword) {
        const newAccount = {
          username: values.username,
          password: values.password,
        };
        let accounts = JSON.parse(localStorage.getItem("accounts"));
        if (!accounts) {
          accounts = new Array([]);
          accounts[0] = newAccount;
        } else {
          accounts.push(newAccount);
        }
        localStorage.setItem("accounts", JSON.stringify(accounts));
        setIsLoading(false);
        successAlert("You have created an account");
        history.push("/login");
      } else {
        setIsLoading(false);
        errorAlert("Your password and confirmPassword invalid");
      }
    }, 2000);
  };

  const signUpFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      handleSignUpClick(values);
    },
    validationSchema: SignUpSchema,
  });

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
          onSubmit={signUpFormik.handleSubmit}
        >
          <TextField
            className={classes.textField}
            required
            id="username"
            label="Username"
            value={signUpFormik.values.username}
            onChange={signUpFormik.handleChange}
            error={
              signUpFormik.touched.username &&
              Boolean(signUpFormik.errors.username)
            }
            helperText={
              signUpFormik.touched.username && signUpFormik.errors.username
            }
          />
          <TextField
            type="password"
            className={classes.textField}
            required
            id="password"
            label="Password"
            value={signUpFormik.values.password}
            onChange={signUpFormik.handleChange}
            error={
              signUpFormik.touched.password &&
              Boolean(signUpFormik.errors.password)
            }
            helperText={
              signUpFormik.touched.password && signUpFormik.errors.password
            }
          />
          <TextField
            type="password"
            className={classes.textField}
            required
            id="confirmPassword"
            label="confirmPassword"
            value={signUpFormik.values.confirmPassword}
            onChange={signUpFormik.handleChange}
            error={
              signUpFormik.touched.confirmPassword &&
              Boolean(signUpFormik.errors.confirmPassword)
            }
            helperText={
              signUpFormik.touched.confirmPassword &&
              signUpFormik.errors.confirmPassword
            }
          />
          <Button
            type="submit"
            className={classes.btnSubmit}
            variant="contained"
            color="primary"
            endIcon={<HowToRegIcon />}
          >
            SIGN UP
          </Button>
          <Typography color="secondary">
            You have an account?{" "}
            <Button
              color="secondary"
              variant="contained"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Typography>
        </form>
      </Paper>

      <Loading isOpen={isLoading} />
    </div>
  );
};
