import React from 'react';
import { shallow } from 'enzyme';

import { Cat } from '../../../components/user/Cat';

describe('Test to successfully render <Cat />', () => {
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
    clearCat: jest.fn(),
    update: jest.fn()
  };
  let wrapper = shallow(<Cat {...propsOgj}/>);
  it('renders the <Cat /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#cart-control').length).toBe(1);
    expect(wrapper.find('#sidebar').length).toBe(1);
  });

  it('Should check for clear click event', () => {
    wrapper.find('#clear').simulate('click');
  });

  it('Should check for make order click event', () => {
    wrapper.instance().makeOrder = jest.fn();
    wrapper.find('#make-order').simulate('click');
  });

  it('Should check for update click event', () => {
    wrapper.find('.ctr').at(0).simulate('click');
  });

  it('Should check for update click event', () => {
    wrapper.find('.ctr').at(1).simulate('click');
  });
});
