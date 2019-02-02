import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../actions/authAction";

/**
 * Class representing Header
 * @class Header
 * @description handle Header component
 */
export class Header extends Component {
  /**
   * Class Constructor
   * @param {Object} props - Props Object
   * @return {null} null - returns nothing
   */
  constructor(props) {
    super(props);
    this.state = {};

    this.logout = this.logout.bind(this);
  }

  /**
   * logs user out
   * @return {null} No return
   * @memberof Menu
   */
  logout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  /**
   * switch tab
   * @param {Object} path - route path
   * @return {null} No return
   * @memberof Menu
   */
  switchTab = (path) => {
    this.props.history.push(path);
    window.location.reload();
  };

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Header
   */
  render() {
    /* eslint-disable no-restricted-globals */
    return (
      <section id="nav-bar">
        <div className="container">
          <h1>
            Welcome <span id="user-first-name">{this.props.user.name}</span>!
          </h1>
          <form>
            <nav>
              <ul className="tabs">
                <li
                  id="food-tab"
                  className="tablinks"
                  onClick={() => this.switchTab('/user')}
                >
                  <i className="fa fa-cutlery" /> Foods
                </li>
                <li
                  id="order-tab"
                  className="tablinks"
                  onClick={() => this.switchTab('/orders')}
                >
                  <i className="fa fa-file-text" /> Order History
                </li>
                <li id="order-tab" className="tablinks"
                  onClick={() => this.logout()}>
                  <i className="fa fa-sign-out" />{" "}
                  Logout
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </section>
    );
    /* eslint-enable no-nested-ternary */
  }
}
Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.AuthReducer.user
});
export default withRouter(connect(mapStateToProps, { logout })(Header));
