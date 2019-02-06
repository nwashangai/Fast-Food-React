import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import "../../../assets/css/style.css";
import "../../../assets/css/main.css";
import { logout } from "../../actions/authAction";
import AlertComponent from "../Alert";
import HeaderComponent from "./Header";
import PlaceOrderComponent from "./PlaceOrder";
import FooterComponent from "../home/Footer";
import CatComponent from "./Cat";
import ProfileComponent from "./Profile";
import MenuComponent from "./main/MenuView";

/**
 * Class representing Users
 * @class User
 * @description user component
 */
export class ViewMenu extends Component {
/**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    if (!localStorage.getItem('token-key')) {
      props.history.push('/');
    } else {
      try {
        jwtDecode(window.localStorage.getItem('token-key'));
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
  componentDidMount = () => {
    document.getElementById('food-content').style.display = 'block';
    document.getElementById('food-tab').classList.add('active');
    document.getElementById('order-tab').classList.remove('active');
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
            <MenuComponent/>
          </div>
        </section>
        <PlaceOrderComponent/>
        <div id="loader"></div>
        <AlertComponent/>
        <FooterComponent/>
        <ToastContainer/>
      </div>
    );
  }
}
ViewMenu.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object,
  location: PropTypes.object
};
const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});

export default withRouter(connect(mapStateToProps, { logout })(ViewMenu));
