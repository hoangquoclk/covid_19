import React from "react";
import {
  Paper,
  IconButton,
  InputBase,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Search = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onSubmit, listSearchCountries } = props;
  const [searchText, setSearchText] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchText: value,
      };
      onSubmit(formValue);
    }, 400);
  };

  const handleSearchTextKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.logo}>
        <img
          className={classes.logo__image}
          src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2-833x321.jpg"
          alt=""
        />
      </Container>
      <Container>
        <Paper component="form" elevation={4} className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder={t("SearchPlaceholder")}
            inputProps={{ "aria-label": "search google maps" }}
            value={searchText}
            onChange={handleSearchTextChange}
            onKeyDown={handleSearchTextKeyDown}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          {listSearchCountries.length > 0 && (
            <List
              component="nav"
              aria-label="main mailbox folders"
              className={classes.list}
            >
              {listSearchCountries &&
                listSearchCountries.map((item, index) => {
                  return (
                    <Paper key={index}>
                      <Link
                        to={`/detail/${item.countryInfo._id}`}
                        className={classes.link}
                      >
                        <ListItem button>
                          <ListItemAvatar>
                            <Avatar src={item.countryInfo.flag} />
                          </ListItemAvatar>
                          <ListItemText primary={item.country} />
                        </ListItem>
                      </Link>
                    </Paper>
                  );
                })}
            </List>
          )}
        </Paper>
      </Container>
    </Container>
  );
};
