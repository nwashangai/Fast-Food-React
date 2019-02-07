import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import Utilities from '../../utils';
import { register } from '../../actions/authAction';

/**
 * Class representing Signup
 * @class Signup
 * @description handle Signup component
 */
export class Signup extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
  * Handle onChange events
  * @param {Event} event - Event triggered
  * @return {null} null - returns nothing
  * @memberof Signup
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
  * @memberof Signup
 */
  async handleSubmit(event) {
    event.preventDefault();
    const validation = Utilities.formValid(this.state, 1);
    if (validation.status) {
      try {
        Utilities.loader("block");
        const response = await this.props.register(this.state);
        if (response.status === 'error') {
          Utilities.loader("none");
          toast(response.message);
        } else {
          Utilities.loader("none");
          this.props.history.push('/food');
        }
      } catch (error) {
        Utilities.loader("none");
        toast(error.message);
      }
    } else {
      toast(validation.message);
    }
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Signup
 */
  render() {
    const {
      handleSubmit,
      onChange
    } = this;
    return (
      <div id="background" className={(!this.props.toggle) ? "hide" : ""}>
        <div className="row" id="overlay">
          <div className="leftcolumn" id="home-text">
            <div className="card main-card">
              <h1>Kitchen for all</h1>
              <h5>Don't wait</h5>
              <p>Order for your meals online now</p>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card .signup">
              <p className="form_label">SIGN UP FORM</p>
              <form id="signup">
                <p>
                  <input id="sname" name="name"
                    onChange={onChange} type="text" placeholder="name"/>
                </p>
                <p>
                  <input id="semail" name="email"
                    onChange={onChange} type="email" placeholder="email"/>
                </p>
                <p>
                  <input id="sphone" name="phone"
                    onChange={onChange} type="text"
                    placeholder="phone" pattern = "[0-9]{11,}"
                    required/>
                </p>
                <p>
                  <input id="spassword" name="password"
                    onChange={onChange} type="password" placeholder="password"/>
                </p>
                <p>
                  <input id="confirmPassword" name="confirmPassword"
                    onChange={onChange}
                    type="password" placeholder="comfirm password"/>
                </p>
                <p>
                  <input id="register"
                    type="button" name="submit" value="SIGNUP"
                    onClick={handleSubmit}/>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object,
  toggle: PropTypes.bool

};
export default withRouter(connect(null, { register })(Signup));
