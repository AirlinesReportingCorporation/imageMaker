import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./reducers";

let store = createStore(rootReducer);

import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Provider store={store}>
          <Router>
            <Route path="/" exact component={Dashboard} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
