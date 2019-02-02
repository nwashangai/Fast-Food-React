import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "../../../assets/css/style.css";
import "../../../assets/css/main.css";
import { logout, getUser } from "../../actions/authAction";
import AlertComponent from "../Alert";
import HeaderComponent from "./Header";
import PlaceOrderComponent from "./PlaceOrder";
import FooterComponent from "../home/Footer";
import CatComponent from "./Cat";
import ProfileComponent from "./Profile";
import Main from "./main";
import Utilities from "../../utils";

/**
 * Class representing Users
 * @class User
 * @description user component
 */
export class User extends Component {
/**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    if (!window.localStorage.getItem('token-key')) {
      props.history.push('/');
    } else {
      try {
        jwtDecode(window.localStorage.getItem('token-key'));
        this.props.getUser();
      } catch (error) {
        props.logout();
        props.history.push('/');
      }
    }
    this.state = {
      init: false,
      page: this.props.location.pathname
    };
  }

  /**
  * execute after load
  * @return {Object} null - returns notthing
  * @memberof User
 */
  componentDidMount() {
    const path = this.props.location.pathname;
    if (path === '/orders') {
      Utilities.selectTab('order-content');
      document.getElementById('order-content').style.display = 'block';
      document.getElementById('order-tab').className += ' active';
      this.setState({ init: true });
    } else {
      Utilities.selectTab('food-tab');
      document.getElementById('food-content').style.display = 'block';
      document.getElementById('food-tab').className += ' active';
      this.setState({ init: true });
    }
    if (path !== this.state.page) {
      this.setState({ page: path }, this.forceUpdate());
    }
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof User
 */
  render() {
    return (
      <div>
        <HeaderComponent/>
        <section id="main">
          <div className="container">
            {(this.props.user.isAdmin) ? <ProfileComponent/> : <CatComponent/>}
            <Main/>
          </div>
        </section>
        <PlaceOrderComponent/>
        <div id="loader"></div>
        <AlertComponent/>
        <FooterComponent/>
      </div>
    );
  }
}
User.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  history: PropTypes.object,
  location: PropTypes.object
};
const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});

export default withRouter(connect(mapStateToProps, { logout, getUser })(User));
