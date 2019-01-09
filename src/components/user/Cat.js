import React, { Component } from 'react';

/**
 * Class representing Cat
 * @class Cat
 * @description handle Cat component
 */
class Cat extends Component {
  /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Cat
 */
  render() {
    return (
      <aside id="sidebar">
        <div className="dark" id="user-cart">
          <h2>Food cart
            <span id="cart-control">
              <input type="button" className="order" id="clear" value="Clear"/>
              <input type="button" className="order" value="Order"/>
            </span>
          </h2>
          <h4>Foods
            <span className="cart-price">
              <span className="digit">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </span>
            <span className="qty">Qty</span>
          </h4>
          <span id="cart-content">

          </span>
          <hr/>
          <p>Total
            <span className="cart-price">
              <span className="cart-currency">₦</span>
              <span className="digit" id="total">0</span>
            </span>
            <span className="qty"></span>
          </p>
        </div>
      </aside>
    );
  }
}

export default Cat;
