import React, { Component } from "react";
import Dashboard from "./Dashboard.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
