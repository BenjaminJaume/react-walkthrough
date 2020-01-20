import React from "react";
import "./App.css";

import Clock from "./Clock/Clock";
import Events from "./Events/Events";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock /> */}
        <Events />
      </header>
    </div>
  );
}

export default App;
