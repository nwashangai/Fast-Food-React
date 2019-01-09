import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { menu } from '../../../actions/foodAction';

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
  * Render component
  * @return {Object} component - returns a component
  * @memberof Menu
 */
  render() {
    return (
      <ul id="food">
        {
          this.props.menuList.map(food => (
            <li key={food.id}>
              <span className="my-food">
                <img src = {food.image} alt={food.category}/>
              </span>
              <span className="in-text"><h3>{food.name}</h3>
                <p>{food.description}</p>
                <p className="price">
                  <span className="big">Price:</span> ₦ {food.price}
                  <span>
                    <input type="button" className="order animate" value="Add"/>
                  </span></p>
              </span>
            </li>))
        }
      </ul>
    );
  }
}
Menu.propTypes = {
  menu: PropTypes.func.isRequired,
  menuList: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(connect(null, { menu })(Menu));
