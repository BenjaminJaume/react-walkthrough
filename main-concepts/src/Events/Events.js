import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, text: "" };
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  deleteRow = (index, event) => {
    console.log(`index: ${index}, event: ${event}`);
  };

  render() {
    const elements = ["Jar Jar Binks", "Kal Drogo", "Brainiacs"];

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(
        <li key={index}>
          {value} -{" "}
          <button onClick={event => this.deleteRow(index, event)}>
            Delete Row
          </button>
        </li>
      );
    }

    return (
      <div>
        <h1>onChange: {this.state.text}</h1>
        <p>
          <button onClick={this.handleClick}>
            C'est {this.state.isToggleOn ? "On" : "Off"}
          </button>
        </p>

        <p>
          <textarea onChange={this.handleChange} />
        </p>

        <ul>{items}</ul>
      </div>
    );
  }
}
