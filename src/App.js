import React from "react";
import "./App.css";
import CountState from "./Context";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  return (
    <CountState>
      <div className="App">
        <Counter />
        <Users />
      </div>
    </CountState>
  );
}

export default App;
