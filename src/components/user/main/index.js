import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Utilities from '../../../utils';
import { menu } from '../../../actions/foodAction';
import Menu from "./Menu";

/**
 * Class representing Main
 * @class Main
 * @description handle Main component
 */
class Main extends Component {
  /**
  * Class Constructor
  * @param {Object} props - Props Object
  * @return {null} null - returns nothing
 */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
    this.setCategory = this.setCategory.bind(this);
  }

  /**
  * Handle load food menu
  * @return {null} null - returns nothing
  * @memberof Main
  */
  async componentWillMount() {
    Utilities.loader("block");
    const response = await this.props.menu();
    if (response.status === 'error') {
      Utilities.loader("none");
      this.props.history.push('/');
    } else {
      Utilities.loader("none");
      this.setState({ loading: false, list: this.filterMenu() });
    }
  }

  /**
* Handle filter food menu
* @param {String} foodCategory food data
* @return {null} null - returns nothing
* @memberof Main
*/
  filterMenu(foodCategory = this.props.menuItem[0].category) {
    document.getElementById("category-selected").value = foodCategory;
    return this.props.menuItem.filter(item => item.category === foodCategory);
  }

  /**
* Handle filter food menu
* @return {null} null - returns nothing
* @memberof Main
*/
  setCategory() {
    const data = this.props.menuItem.filter(item => (
      item.category === document.getElementById("category-selected").value));
    this.setState({ loading: false, list: data });
  }

  /**
  * Handle load food menu
  * @return {null} null - returns nothing
  * @memberof Main
  */
 distintOptions = () => {
   const check = {};
   let result = [];
   this.props.menuItem.forEach(element => {
     let distint = element.category;

     if (!(distint in check)) {
       check[distint] = 1;
       result.push(distint);
     }
   });
   return result;
 }

 /**
  * Render component
  * @return {Object} component - returns a component
  * @memberof Main
 */
 render() {
   return (
     <article id="main-col">
       <div className="tab-contents" id="food-content">
         <h1 className="page-title">
           <span id="new">Tasty Foods</span>
           <div className="food-category right">
             <select id="category-selected" onChange={this.setCategory}>
               {this.distintOptions()
                 .map((catrgory) => (
                   <option key={catrgory} value={catrgory}>{catrgory}</option>
                 ))}
             </select>
             <i className="fa fa-angle-right right"></i>
           </div>
         </h1>
         <Menu menuList={this.state.list || []}/>
       </div>
     </article>
   );
 }
}
Main.propTypes = {
  menu: PropTypes.func.isRequired,
  menuItem: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = (state) => ({
  menuItem: state.FoodReducer,
});

export default withRouter(connect(mapStateToProps, { menu })(Main));
