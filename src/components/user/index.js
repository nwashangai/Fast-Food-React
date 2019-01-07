import React, { Component } from 'react';

import Alert from "../Alert";

/**
 * Class representing Users
 * @class User
 * @description user component
 */
class User extends Component {
  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof User
 */
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div id="loader"></div>
        <Alert/>
      </div>
    );
  }
}

export default User;
