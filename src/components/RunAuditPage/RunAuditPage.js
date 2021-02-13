import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Header from "../Header/Header";
import ProgressBar from "../ProgressBar/ProgressBar";
// import Grid from "../Grid/Gride"
// import "./RunAudit.css";

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

function RunAudit() {
  const classes = useStyles();

  return (
    <div>
      <Header to={"/"} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Run Audit</h1>
          </Grid>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}> */}
              <Link to="/connectSystems" style={{ textDecoration: "none" }}>
                <Button variant="contained">Create New Audit</Button>
              </Link>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}> */}
              <Button variant="contained">Update Current Audit</Button>
            {/* </Paper> */}
          </Grid>

          <Grid item xs={12}>
            <ProgressBar percent={0} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default RunAudit;
