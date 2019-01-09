import React, { Component } from 'react';

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

export default Home;
