import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Utilities from "../../utils";
import { update, clearCat } from "../../actions/catAction";
/**
 * Class representing Cat
 * @class Cat
 * @description handle Cat component
 */
class Cat extends Component {
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
   * Displays modal to add address and place order
   * @return {null} null - returns nothing
   */
  makeOrder = () => {
    if (this.props.cat.length > 0) {
      document.getElementById('order-food').style.display = 'block';
    } else {
      Utilities.popup("Error", "please select a food item");
    }
  };

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Cat
   */
  render() {
    const { update, clearCat } = this.props;
    return (
      <aside id="sidebar">
        <div className="dark" id="user-cart">
          <h2>
            Food cart
            <span id="cart-control">
              <input
                type="button"
                className="order"
                onClick={() => clearCat()}
                id="clear"
                value="Clear"
              />
              <input
                type="button"
                onClick={() => this.makeOrder()}
                className="order"
                value="Order"
              />
            </span>
          </h2>
          <h4>
            Foods
            <span className="cart-price">
              <span className="digit">
                <i className="fa fa-shopping-cart" />
              </span>
            </span>
            <span className="qty">Qty</span>
          </h4>
          <span id="cart-content">
            {this.props.cat.map(element => (
              <p key={element.foodId}>
                <span>{element.name}</span>
                <span className="cart-price">
                  <span className="cart-currency"> ₦</span>
                  <span className="digit">{element.subTotal.toString()}</span>
                </span>
                <span className="qty">
                  <span
                    className="ctr"
                    onClick={() => update(element.foodId, "-")}
                  >
                    -{" "}
                  </span>
                  {element.quantity}
                  <span
                    className="ctr"
                    onClick={() => update(element.foodId, "+")}
                  >
                    {" "}
                    +
                  </span>
                </span>
              </p>
            ))}
          </span>
          <hr />
          <p>
            Total
            <span className="cart-price">
              <span className="cart-currency">₦</span>
              <span className="digit" id="total">
                {this.props.cat.reduce(
                  (accumulator, current) => accumulator + current.subTotal,
                  0
                )}
              </span>
            </span>
            <span className="qty" />
          </p>
        </div>
      </aside>
    );
  }
}
Cat.propTypes = {
  cat: PropTypes.array,
  clearCat: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  cat: state.CatReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    { update, clearCat }
  )(Cat)
);
