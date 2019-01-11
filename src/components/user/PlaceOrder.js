import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Utilities from "../../utils";
import { placeOrder } from "../../actions/orderAction";
/**
 * Class representing PlaceOrder
 * @class PlaceOrder
 * @description handle PlaceOrder component
 */
class PlaceOrder extends Component {
  /**
   * Class Constructor
   * @param {Object} props - Props Object
   * @return {null} null - returns nothing
   */
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Handle onChange events
   * @param {Event} event - Event triggered
   * @return {null} null - returns nothing
   * @memberof PlaceOrder
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Place order
   * @param {Object} props - Props Object
   * @return {null} null - returns nothing
   */
  sendOrder = async () => {
    if (Utilities.formValid(this.state.address, 3)) {
      const myOrder = {
        address: this.state.address,
        foodItems: this.props.cat
      };
      try {
        Utilities.loader("block");
        const response = await this.props.placeOrder(myOrder);
        if (response.status === "error") {
          Utilities.loader("none");
          Utilities.alert("Error", response.message);
        } else {
          Utilities.loader("none");
          Utilities.alert("Success", response.message);
          document.getElementById('order-food').style.display = 'none';
        }
      } catch (error) {
        Utilities.loader("none");
        Utilities.alert("Error", error.message);
      }
    }
  };

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Cat
   */
  render() {
    const { name, phone } = this.props.user,
      { onChange } = this;
    return (
      <div id="order-food" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => Utilities.closeOrder()}>
            &times;
          </span>
          <h1>Order Food</h1>
          <form id="cart-data">
            <span>
              <div id="table-body">
                <div className="table-row">
                  <div className="order-cell">
                    <span className="order-display">Name :</span>
                    <span className="order-data" id="user-name">
                      {name}
                    </span>
                  </div>
                  <div className="order-cell">
                    <span className="order-display">Phone :</span>
                    <span className="order-data" id="user-phone">
                      {phone}
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <br />
            <br />
            <span>
              <label htmlFor="address">
                <b>Address to be delivered</b>
              </label>
              <textarea
                placeholder="Address"
                name="address"
                id="address"
                onChange={onChange}
                required
              />
            </span>
            <br />
            <br />
            <span>
              <input
                type="button"
                onClick={() => this.sendOrder()}
                value="PLACE ORDER"
              />
            </span>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}
PlaceOrder.propTypes = {
  cat: PropTypes.array,
  user: PropTypes.object,
  placeOrder: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  cat: state.CatReducer,
  user: state.AuthReducer.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { placeOrder }
  )(PlaceOrder)
);
