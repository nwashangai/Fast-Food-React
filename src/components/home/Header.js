import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/authAction';
import Utilities from '../../utils';

/**
 * Class representing Footer
 * @class Footer
 * @description handle Footer component
 */
class Header extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
  * Handle onChange events
  * @param {Event} event - Event triggered
  * @return {null} null - returns nothing
  * @memberof Header
 */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
  * Handle onSubmit event
  * @param {Event} event - Event triggered
  * @return {null} null - returns nothing
  * @memberof Header
 */
  async handleSubmit(event) {
    event.preventDefault();
    if (Utilities.formValid(this.state, 2)) {
      const response = await this.props.login(this.state);
      if (response.status === 'error') {
        Utilities.alert('Error', response.message);
      } else {
        this.props.history.push('/user');
      }
    }
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Header
 */
  render() {
    const {
      handleSubmit,
      onChange
    } = this;
    return (
      <div className="topnav">
        <h1><img src="./assets/images/emblem.png" alt="Snow" id="logo"/>
        Fast Food Fast
        </h1>
        <form className="login" id="login-form">
          <span className="my-login small">
            <input id="lemail" name="email"
              onChange={onChange} type="email" placeholder="email"
              required/>
          </span>
          <span className="my-login small">
            <input id="lpassword" name="password"
              onChange={onChange} type="password" placeholder="password"/>
          </span>
          <span className="small">
            <input id="login-click" type="button" value="LOGIN"
              onClick={handleSubmit}/>
          </span>
        </form>
      </div>
    );
  }
}

Header.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object

};

export default withRouter(connect(null, { login })(Header));
