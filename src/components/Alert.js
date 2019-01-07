import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return(
      <div id="alert" className="popup">
        <div className="popup-content">
            <h2 id="title"></h2>
            <div id="msg" className="content">
                
            </div>
            <span className="alert-btn"><input type="button" value="Ok" id="close-btn" className="status accept"/></span>
        </div>
      </div>
    );
  }
}

export default Alert;