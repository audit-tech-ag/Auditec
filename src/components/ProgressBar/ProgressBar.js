import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends Component {
  // state = { percent: 0 }

  // increment = () =>
  //   this.setState((prevState) => ({
  //     percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
  //   }))

  render() {
    return (
      <div>
        <br/>
        <Progress percent={this.props.percent} color='blue' active progress />
        {/* <Button onClick={this.increment}>Increment</Button> */}
      </div>
    )
  }
}