import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem, update } from "../../../actions/catAction";

/**
 * Class representing Menu
 * @class Menu
 * @description handle Menu component
 */
class Menu extends Component {
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
   * Find item in food array
   * @param {String} id
   * @return {Array} food item
   * @memberof Menu
   */
  findItem = id => this.props.menuList.find(item => item.id === id);

  /**
   * Add to cat item
   * @param {Object} id - item id
   * @param {Object} price - item price
   * @return {null} null - returns nothing
   * @memberof Menu
   */
  pushOrder = (id, price) => {
    let track = 0;
    this.props.cat.forEach(item => {
      if (item.foodId === id) {
        const food = this.findItem(id);
        this.props.update(food.id, '+');
        // item.subTotal = parseFloat(food.price) * parseInt(item.quantity, 10);
        track = 1;
      }
    });
    if (track === 0) {
      const food = this.findItem(id);
      const newCart = {
        foodId: food.id,
        quantity: 1,
        name: food.name,
        price: parseFloat(food.price),
        subTotal: parseFloat(food.price)
      };
      this.props.addItem(newCart);
    }
  };

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Menu
   */
  render() {
    return (
      <ul id="food">
        {this.props.menuList.map(food => (
          <li key={food.id}>
            <span className="my-food">
              <img src={food.image} alt={food.category} />
            </span>
            <span className="in-text">
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p className="price">
                <span className="big">Price:</span> ₦ {food.price}
                <span>
                  <input
                    type="button"
                    className="order animate"
                    onClick={() => this.pushOrder(food.id)}
                    value="Add"
                  />
                </span>
              </p>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
Menu.propTypes = {
  cat: PropTypes.array,
  addItem: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  menuList: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  cat: state.CatReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    { addItem, update }
  )(Menu)
);
