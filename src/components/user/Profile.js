import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

/**
 * Class representing Profile
 * @class Profile
 * @description handle Profile component
 */
export class Profile extends Component {
  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Profile
   */
  render() {
    return (
      <aside id="sidebar">
        <div className="dark">
          <h2>Profile Info</h2>
          <form className="profile">
            <div>
              <label>Name</label>
              <br />
              <p id="user-name">{this.props.user.name}</p>
            </div>
            <div>
              <label>Email</label>
              <br />
              <p id="user-email">{this.props.user.email}</p>
            </div>
            <div>
              <label>Phone</label>
              <br />
              <p id="user-phone">{this.props.user.phone}</p>
            </div>
          </form>
        </div>
      </aside>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.AuthReducer.user,
});

export default connect(mapStateToProps, null)(Profile);
