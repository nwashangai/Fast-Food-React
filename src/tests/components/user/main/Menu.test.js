import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from '../../../../components/user/main/Menu';

describe('Test to successfully render <Menu />', () => {
  const propsOgj = {
    cat: [
      {
        foodId: "0e343a55-11f2-48c9-90ab-1b26cd908704",
        name: "Tapioca",
        price: 1200,
        quantity: 1,
        subTotal: 1200
      }
    ],
    orders: [
      {
        id: '12345',
        date: 'Bread',
        status: 'proccessing',
        address: 'ikeja road',
        fooditems: [{
          foodId: "0e343a55-11f2-48c9-90ab-1b26cd908704",
          name: "Tapioca",
          price: 1200,
          quantity: 1,
          subTotal: 1200
        }]
      }
    ],
    menuList: [
      {
        id: '0e343a55-11f2-48c9-90ab-1b26cd908704',
        image: null,
        category: 'vegetable',
        name: 'Rice',
        description: 'good rice',
        price: 2000
      }
    ],
    addItem: jest.fn((cat) => null),
    update: jest.fn((id, val) => null),
  };
  let wrapper = shallow(<Menu {...propsOgj}/>);
  it('renders the <Menu /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#food').length).toBe(1);
    expect(wrapper.find('.my-food').at(0).length).toBe(1);
  });

  it('Should check for view item click event', () => {
    wrapper.find('.order').at(0).simulate('click');
  });
});
