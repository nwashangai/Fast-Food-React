import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Utilities from "../../../utils";

/**
 * Class representing ViewOrder
 * @class ViewOrder
 * @description handle Header component
 */
export class ViewOrder extends Component {
  /**
   * Class Constructor
   * @param {Object} props - Props Object
   * @return {null} null - returns nothing
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof ViewOrder
   */
  render() {
    return (
      <div id="view-food" className="food-modal">
        <div className="modal-content">
          <span className="close" onClick={() => Utilities.closeView()}>
            &times;
          </span>
          <h1>Food Items</h1>
          <div className="item-body">
            <div className="item-head">
              <div className="item-name">Food</div>
              <div className="item-price right" />
              <div className="item-qty right">Qty</div>
              <div className="item-sub right">
                <i className="fa fa-shopping-cart" />
              </div>
            </div>
            <br />
            <span id="cart-items">
              {this.props.item.map(element => (
                <div className="item-row" key={element.foodId}>
                  <div className="item-name">{element.name}</div>
                  <div className="item-price right" />
                  <div className="item-qty right">{element.quantity}</div>
                  <div className="item-sub right">₦ {element.subTotal}</div>
                </div>
              ))}
            </span>
            <hr className="line" />
            <pre>
              <div className="total right">
                Total: ₦ <span id="total-price">0</span>
              </div>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
ViewOrder.propTypes = {
  item: PropTypes.array,
  history: PropTypes.object
};
export default withRouter(connect(null)(ViewOrder));
