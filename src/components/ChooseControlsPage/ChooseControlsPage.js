import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";
// import "./ChooseControls.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2),
      textAlign: "center",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ChooseControls(connectedSystems) {

  const classes = useStyles();

  console.log(connectedSystems.connectedSystems[0]);
  const arrayToRender = connectedSystems.connectedSystems;

  return (
    <div>
      <Header to={"/connectSystems"} />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>Choose Controls</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            {arrayToRender.map((element) => {
              return (
                <div className={classes.root}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <div>{Object.keys(element)}</div>
                        <div>{Object.values(element)}</div>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Progress percent={66} />
          </Grid>

          <SaveContinue to={"/assignControlsOwners"} />
        </Grid>
      </div>
    </div>
  );
}

export default ChooseControls;
