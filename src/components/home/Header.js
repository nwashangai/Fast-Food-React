import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/authAction';
import Utilities from '../../utils';

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
    this.state = {
      email: '',
      password: '',
    };
    this.menuHide = React.createRef();
    this.hideLogin = React.createRef();

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

  toggleBar = () => {
    if (this.menuHide.current.style.display === "none") {
      this.menuHide.current.style.display = "block";
    } else {
      this.menuHide.current.style.display = "none";
    }
  }

  loginUser = () => {
    this.menuHide.current.style.display = "none";
    this.props.toggleReg(false);
    this.hideLogin.current.style.display = "block";
  }

  signup = () => {
    this.menuHide.current.style.display = "none";
    this.hideLogin.current.style.display = "none";
    this.props.toggleReg(true);
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
      try {
        Utilities.loader("block");
        const response = await this.props.login(this.state);
        if (response.status === 'error') {
          Utilities.loader("none");
          Utilities.alert('Error', response.message);
        } else {
          Utilities.loader("none");
          this.props.history.push('/user');
        }
      } catch (error) {
        Utilities.loader("none");
        Utilities.alert('Error', error.message);
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
        <h1>
          <i onClick={() => this.toggleBar()} id="bar" className="fa fa-bars"></i>
          {' '}Fast Food Fast
        </h1>
        <ul className="menu-data" ref={this.menuHide}>
          <li className="selected" id="login-toggle" onClick={() => this.loginUser()}>LOGIN</li>
          <li className="selected" id="signup-toggle" onClick={() => this.signup()}>SIGNUP</li>
        </ul>
        <form className="login" id="login-form" ref={this.hideLogin}>
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
  toggleReg: PropTypes.func.isRequired,
  login: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(connect(null, { login })(Header));
