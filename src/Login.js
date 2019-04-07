import React from "react";

import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Display Name: </span>
                </td>
                <td>
                  <input className="my-login" type="text" name="username" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Password: </span>
                </td>
                <td>
                  <input className="my-login" type="password" name="password" />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button>Login</button>
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
