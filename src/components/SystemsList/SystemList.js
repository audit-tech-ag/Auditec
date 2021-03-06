import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import "./SystemList.css";

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

function SystemList({ onListChange }) {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedF: false,
    checkedG: false,
  });
  const [systemToRender, setSystemToRender] = useState([]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setSystemToRender((prevState) => [...prevState, event.target.value]);
    }
    if (!event.target.checked) {
      setSystemToRender((prevState) =>
        prevState.filter((system) => system !== event.target.value)
      );
    }
  }

  onListChange(systemToRender);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
            value="ERP System"
          />
        }
        label="ERP System"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            value="CRM System"
          />
        }
        label="CRM System"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
            value="HR and Payroll"
          />
        }
        label="HR and Payroll"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
            value="User Managment"
          />
        }
        label="User Managment"
      />
    </FormGroup>
  );
}

export default SystemList;
