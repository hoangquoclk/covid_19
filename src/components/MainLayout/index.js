import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Popover,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { checkToken } from "../../utils/checkToken";
import { useStyles } from "./styles";

export const MainLayout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("En");

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLanguage(lang);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    setLanguage(localStorage.getItem("language"));
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button
              className={classes.btnLanguage}
              aria-describedby={id}
              variant="contained"
              color="primary"
              onClick={handlePopoverOpen}
              startIcon={<TranslateIcon />}
            >
              {language}
            </Button>
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
                English
              </Typography>
              <Typography
                className={classes.typography}
                onClick={() => handleLanguageChange("vi")}
              >
                Vietnamese
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
            <Button color="inherit" className={classes.btnAction}>
              {checkToken() ? t("Menu.3") : t("Menu.4")}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};
