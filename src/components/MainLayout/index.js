import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Popover,
  Paper,
  IconButton,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { checkToken } from "../../utils/checkToken";
import { useStyles } from "./styles";
import { successAlert } from "../../utils/alerts";

export const MainLayout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("En");
  const [flagDarkMode, setFlagDarkMode] = useState(false);
  const darkMode = localStorage.getItem("darkMode");

  const theme = createTheme({
    palette: {
      type: darkMode === "true" ? "dark" : "light",
    },
  });

  const handleDarkModeChange = () => {
    setFlagDarkMode(!flagDarkMode);
    if (darkMode === "true") {
      localStorage.setItem("darkMode", false);
    } else {
      localStorage.setItem("darkMode", true);
    }
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleAuthenticationClick = () => {
    if (localStorage.getItem("auth")) {
      localStorage.removeItem("auth");
      successAlert(t("LogoutSuccess"));
      history.push("/news");
    } else {
      history.push("/login");
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.main_paper}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography
                  className={classes.typography}
                  onClick={() => handleLanguageChange("en")}
                >
                  {t("Language.English")}
                </Typography>
                <Typography
                  className={classes.typography}
                  onClick={() => handleLanguageChange("vi")}
                >
                  {t("Language.Vietnamese")}
                </Typography>
              </Popover>
              <Typography variant="h6" className={classes.newsTitle}>
                <Link className={classes.link} to="/news">
                  {t("Menu.2")}
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.homeTitle}>
                <Link className={classes.link} to="/home">
                  {t("Menu.1")}
                </Link>
              </Typography>
              <IconButton aria-label="darkMode" onClick={handleDarkModeChange}>
                {darkMode === "true" ? (
                  <Brightness5Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <Button
                className={classes.btnLanguage}
                aria-describedby={id}
                color="primary"
                onClick={handlePopoverOpen}
                startIcon={<TranslateIcon />}
              >
                {language}
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.btnAction}
                onClick={handleAuthenticationClick}
              >
                {checkToken() ? t("Menu.3") : t("Menu.4")}
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        {children}
      </Paper>
    </ThemeProvider>
  );
};
