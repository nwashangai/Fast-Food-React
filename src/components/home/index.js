import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";
import Alert from "../Alert";

import '../../../assets/css/style.css';
/**
 * Class representing Home
 * @class Home
 * @description handle Home component
 */
class Home extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
    };
    if (window.localStorage.getItem('token-key')) {
      props.history.push('/user');
    }
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Home
 */
  render() {
    return (
      <div>
        <Header/>
        <Signup/>
        <Alert/>
        <Footer/>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object
};

export default withRouter(connect(null)(Home));
