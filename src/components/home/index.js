import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";
import Alert from "../Alert";

class Home extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Signup/>
        <div id="loader"></div>
        <Alert/>
        <Footer/>
      </div>
    );
  }
}

export default Home;