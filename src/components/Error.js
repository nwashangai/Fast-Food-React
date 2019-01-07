import React, { Component } from 'react';

/**
 * Class representing ErrorPage
 * @class ErrorPage
 * @description handle ErrorPage component
 */
class ErrorPage extends Component {
  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof ErrorPage
 */
  render() {
    return (
      <div id="error">
        <div className="not-found">
          <h1>Error 404</h1>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
