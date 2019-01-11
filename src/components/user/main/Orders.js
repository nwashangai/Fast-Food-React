import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ViewOrder from "./ViewOrder";
/**
 * Class representing Order
 * @class Order
 * @description handle Order component
 */
class Order extends Component {
  /**
   * Class Constructor
   * @param {Object} props - Props Object
   * @return {null} null - returns nothing
   */
  constructor(props) {
    super(props);
    this.state = {
      list: null
    };

    this.viewFoodItems = this.viewFoodItems.bind(this);
  }

  /**
   * Find item in food array
   * @param {String} id
   * @return {Array} food item
   * @memberof Menu
   */
  findItem = id => this.props.orders.find(item => item.id === id);

  /**
   * view food items
   * @param {String} id
   * @return {null} No return
   * @memberof Menu
   */
  viewFoodItems = id => {
    const total = this.findItem(id).fooditems.reduce(
      (accumulator, current) => (
        parseFloat(accumulator) + parseFloat(current.subTotal)
      ),
      0
    );
    this.setState({ list: this.findItem(id).fooditems });
    document.getElementById("total-price").innerHTML = total;
    document.getElementById("view-food").style.display = "block";
  };

  /**
   * Render component
   * @return {Object} component - returns a component
   * @memberof Order
   */
  render() {
    /* eslint-disable no-nested-ternary */
    return (
      <div className="tab-contents" id="order-content">
        <div id="table-wrap">
          <div id="table-caption">My Orders</div>
          <div id="table-header">
            <div className="table-header-cell cell-1">#</div>
            <div className="table-header-cell cell-2">Date</div>
            <div className="table-header-cell cell-3">Address</div>
            <div className="table-header-cell cell-4">Food</div>
            <div className="table-header-cell cell-5">Status</div>
          </div>
          <div id="table-body">
            {this.props.orders.map((element, index) => (
              <div key={element.id} className="table-row">
                <div className="table-body-cell  cell-11">
                  <span className="small-display">#id :</span>{" "}
                  <span className="data">${index}</span>
                </div>
                <div className="table-body-cell cell-12">
                  <span className="small-display"> Name: </span>
                  <span className="data">
                    ${new Date(element.date).toLocaleString()}
                  </span>
                </div>
                <div className="table-body-cell cell-13">
                  <span className="small-display"> Address: </span>
                  <span className="data">${element.address}</span>
                </div>
                <div className="table-body-cell cell-14">
                  <span className="small-display"> Food: </span>
                  <span
                    className="data clickable"
                    onClick={() => this.viewFoodItems(element.id)}
                  >
                    View items
                  </span>
                </div>
                <div className="table-body-cell cell-15">
                  {element.status === "proccessing" ? (
                    <span className="waiting">Proccessing..</span>
                  ) : element.status === "new" ? (
                    <span className="waiting">Waiting..</span>
                  ) : element.status === "cancelled" ? (
                    <span className="declined">Declined</span>
                  ) : (
                    <span className="completed">Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <span id="no-item" />
        <ViewOrder item={this.state.list || []} />
      </div>
    );
    /* eslint-enable no-nested-ternary */
  }
}
Order.propTypes = {
  orders: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  orders: state.OrderReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Order)
);
