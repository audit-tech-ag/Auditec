import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";

// import useConnectedSystem from "../../hooks/useConnectedSystems"

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

function ConnectedSystem(props) {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const [systemsAndSubSystems, setSystemsAndSubSystems] = useState([{}]);

  const classes = useStyles();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
    let subSystemSave = {};

    if (event.target.checked) {
      subSystemSave = { [props.systemName]: event.target.value };
      setSystemsAndSubSystems((prevState) => [...prevState, subSystemSave]);
    }
    if (!event.target.checked) {
      for (let element in systemsAndSubSystems) {
        if (
          systemsAndSubSystems.hasOwnProperty(element) &&
          systemsAndSubSystems[element] == event.target.value
        ) {
          setSystemsAndSubSystems(delete systemsAndSubSystems[element]);
        }
      }
    }
    props.onSubmit(subSystemSave);
  }

  return (
    <div className={classes.root} id={props.systemName}>
      <Grid container spacing={1}>
        <Paper className={classes.paper}>
          <Grid item xs={6}>
            <div>{props.systemName}</div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                    value="System1"
                  />
                }
                label="System1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                    value="System2"
                  />
                }
                label="System2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                    value="System3"
                  />
                }
                label="System3"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                    value="System4"
                  />
                }
                label="System4"
              />
            </FormGroup>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default ConnectedSystem;
