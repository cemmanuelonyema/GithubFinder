import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";

export default class App extends Component {
  constructor() {
    super();
    this.state = [
      { name: "rolodex-1" },
      { name: "rolodex-2" },
      { name: "rolodex-3" },
      { name: "rolodex-4" },
      { name: "rolodex-5" },
    ];
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}
