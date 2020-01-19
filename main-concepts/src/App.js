import React from "react";
import "./App.css";

import Clock from "./Clock/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;
