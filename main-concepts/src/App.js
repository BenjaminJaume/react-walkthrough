import React from "react";
import "./App.css";

import Clock from "./Clock/Clock";
import Events from "./Events/Events";
import LoginControl from "./LoginControl/LoginControl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock /> */}
        {/* <Events /> */}
        <LoginControl />
      </header>
    </div>
  );
}

export default App;
