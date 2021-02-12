import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import { Button, Icon } from "semantic-ui-react";

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

function SaveContinue(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button icon labelPosition="left">
            <Icon name="save" />
            Save
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Link to={props.to} style={{ textDecoration: "none" }}>
            <Button icon labelPosition="right">
              Continue
              <Icon name="right arrow" />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default SaveContinue;
