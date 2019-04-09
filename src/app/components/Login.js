import React from "react";

import { connect } from "react-redux";
import store from "../store";
import { date } from "../utils";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    console.log("Props: ", this.props);
    console.log("State: ", this.state);
    console.log(store.getState());

    const d = new Date();

    console.log(d.getDay());
    console.log(d.getDate());
    console.log(d.getMonth());
    console.log(date());
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.setState({
      username: "",
      password: ""
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Display Name: </span>
                </td>
                <td>
                  <input
                    className="my-login"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Password: </span>
                </td>
                <td>
                  <input
                    className="my-login"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input type="submit" value="Login" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = state => ({ test: state.test });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
