import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import SignupComponent from "./Signup";
import AlertComponent from "../Alert";

import '../../../assets/css/style.css';

// eslint-disable-next-line valid-jsdoc
/**
 * Class representing Home
 * @class Home
 * @description handle Home component
 */
export class Home extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    if (window.localStorage.getItem('token-key')) {
      console.log('yes');
      props.history.push('/user');
    }
  }

  toggleReg = (data) => {
    this.setState({ toggle: data });
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Home
 */
  render() {
    return (
      <div>
        <HeaderComponent toggleReg={this.toggleReg}/>
        <SignupComponent toggle={this.state.toggle}/>
        <AlertComponent/>
        <FooterComponent/>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object
};

export default withRouter(connect(null)(Home));
