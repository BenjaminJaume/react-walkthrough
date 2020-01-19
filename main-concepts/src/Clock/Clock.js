import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timer: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Clock component</h1>
        <p>This is {this.state.timer.toLocaleTimeString()}</p>
        <p>this.timerID: {this.timerID}</p>
      </div>
    );
  }
}
