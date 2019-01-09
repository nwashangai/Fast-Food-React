import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "../../../assets/css/style.css";
import "../../../assets/css/main.css";
import Alert from "../Alert";
import Header from "./Header";
import Footer from "../home/Footer";
import Cat from "./Cat";
import Profile from "./Profile";
import Main from "./main";

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

    this.state = {
      init: false,
    };
  }

  /**
  * execute after load
  * @return {Object} null - returns notthing
  * @memberof User
 */
  componentDidMount() {
    document.getElementById('food-content').style.display = 'block';
    document.getElementById('food-tab').className += ' active';
    this.setState({ init: true });
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
        <section id="main">
          <div className="container">
            {(this.props.user.isAdmin) ? <Profile/> : <Cat/>}
            <Main/>
          </div>
        </section>
        <div id="loader"></div>
        <Alert/>
        <Footer/>
      </div>
    );
  }
}
User.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object

};
const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});

export default withRouter(connect(mapStateToProps)(User));
