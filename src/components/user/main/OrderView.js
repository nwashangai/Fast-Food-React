import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Utilities from '../../../utils';
import { getOrders } from '../../../actions/orderAction';
import Orders from "./Orders";

/**
 * Class representing Main
 * @class Main
 * @description handle Main component
 */
export class OrderView extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: jwtDecode(localStorage.getItem('token-key'))
    };
  }

  /**
  * Handle load food menu
  * @return {null} null - returns nothing
  * @memberof Main
  */
  async componentWillMount() {
    Utilities.loader("block");
    const response = await this.props.getOrders(this.state.user.userId);
    if (response.status === 'error') {
      Utilities.loader("none");
      this.props.history.push('/');
    } else {
      Utilities.loader("none");
    }
  }

  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Main
 */
  render() {
    return (
      <article id="main-col">
        <Orders/>
      </article>
    );
  }
}
OrderView.propTypes = {
  getOrders: PropTypes.func.isRequired,
  menuItem: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = (state) => ({
  menuItem: state.FoodReducer,
});

export default withRouter(connect(mapStateToProps, { getOrders })(OrderView));
