import React, { Component } from "react";

function GreetingUser() {
  return <h1>Welcome back!</h1>;
}

function GreetingGuest() {
  return <h1>Please log in</h1>;
}

function LogOut(props) {
  return <button onClick={props.whenYouClick}>Log out</button>;
}

function LogIn(props) {
  return <button onClick={props.whenYouClick}>Log in</button>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <GreetingUser />;
  } else {
    return <GreetingGuest />;
  }
}

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogging = () => {
    this.setState(state => ({ isLoggedIn: !state.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {isLoggedIn ? (
          <LogOut whenYouClick={this.handleLogging} />
        ) : (
          <LogIn whenYouClick={this.handleLogging} />
        )}
      </div>
    );
  }
}
