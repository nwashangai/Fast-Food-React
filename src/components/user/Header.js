import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Class representing Header
 * @class Header
 * @description handle Header component
 */
class Header extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Header
 */
  render() {
    return (
      <section id="nav-bar">
        <div className="container">
          <h1>Welcome <span id="user-first-name">
            {this.props.user.name}
          </span>!</h1>
          <form>
            <nav>
              <ul className="tabs">
                <li id="food-tab" className="tablinks">
                  <i className="fa fa-cutlery"></i> Foods
                </li>
                <li id="order-tab" className="tablinks">
                  <i className="fa fa-file-text"></i> Order History
                </li>
                <li id="order-tab" className="tablinks">
                  <i className="fa fa-sign-out"></i> Logout
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </section>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object

};
const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});
export default withRouter(connect(mapStateToProps)(Header));
