import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "../../../assets/css/main.css";
import Alert from "../Alert";
import Header from "./Header";
import Footer from "../home/Footer";

/**
 * Class representing Users
 * @class User
 * @description user component
 */
class User extends Component {
/**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    const { user } = props;
    if (!user.token) {
      props.history.push('/');
    }

    this.state = {};
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof User
 */
  render() {
    return (
      <div>
        <Header/>
        <h1>Welcome</h1>
        <div id="loader"></div>
        <Alert/>
        <Footer/>
      </div>
    );
  }
}
User.propTypes = {
  history: PropTypes.object

};
const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});

export default withRouter(connect(mapStateToProps)(User));
