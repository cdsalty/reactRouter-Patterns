import React, { Component } from "react";
import Food from "./Food";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Food name="Kale" />
        <Food name="Banana" />
        <Food name="Grapes" />
      </div>
    );
  }
}

export default App;
