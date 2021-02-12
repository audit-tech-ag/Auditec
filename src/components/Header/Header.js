import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    // margin: theme.spacing(1),
    flexGrow: 1,
    // },
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    // <div className="container">
    <header>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <h1>AudiTech</h1>
            <h>As audit should be</h>
          </Grid>
          <Grid item xs={6}>
            <Link to={props.to}>
              <Button color="primary">Back</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </header>
    // </div>
  );
}

export default Header;
