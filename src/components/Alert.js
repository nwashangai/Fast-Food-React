import React, { Component } from 'react';

/**
 * Class representing Alert
 * @class Alert
 * @description handle Alert component
 */
class Alert extends Component {
  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Alert
 */
  render() {
    return (
      <div id="alert" className="popup">
        <div className="popup-content">
          <h2 id="title"></h2>
          <div id="msg" className="content">

          </div>
          <span className="alert-btn">
            <input type="button" value="Ok"
              id="close-btn" className="status accept"/>
          </span>
        </div>
      </div>
    );
  }
}

export default Alert;
