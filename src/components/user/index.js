import React, { Component } from 'react';

import Alert from "../Alert";

class User extends Component {
  render() {
    return(
      <div>
        <h1>Welcome</h1>
        <div id="loader"></div>
        <Alert/>
      </div>
    );
  }
}

export default User;