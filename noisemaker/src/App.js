import React, { Component } from "react";
import "./App.css";
import Piano from "./components/Piano";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pianope</h1>
        <Piano />
      </div>
    );
  }
}

export default App;
