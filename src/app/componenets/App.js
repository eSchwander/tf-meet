import React from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";

import { Provider } from "react-redux";
import store from "../store";

import Calendar from "./Calendar";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Schedulizer!</Link>
          </header>
          <Router>
            <Login path="/" />
            <Calendar path="/calendar" cols={10} rows={10} />
          </Router>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
