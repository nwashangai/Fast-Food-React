import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { PlaceOrder } from '../../../components/user/PlaceOrder';
import UtilityClass from "../../../utils";

describe('Test to successfully render <PlaceOrder />', () => {
  const propsOgj = {
    user: {
      name: 'Young',
      phone: '08036876474'
    },
    cat: [],
    placeOrder: jest.fn((data) => true)
  };
  const event = {
    target: {
      name: 'address',
      value: '58 ikeja road'
    },
  };
  let wrapper = shallow(<PlaceOrder {...propsOgj}/>);
  it('renders the <PlaceOrder /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#order-food').length).toBe(1);
    expect(wrapper.find('#cart-data').length).toBe(1);
    expect(wrapper.find('#user-name').length).toBe(1);
  });

  it('Should check the address input field for change', () => {
    wrapper.find('#address').simulate('change', event);
  });

  it('Should check for click event', () => {
    sinon.stub(UtilityClass, 'loader').returns(null);
    sinon.stub(UtilityClass, 'closeOrder').returns(null);
    sinon.stub(UtilityClass, 'alert').returns(null);
    wrapper.find('#send-order').simulate('click');
    wrapper.find('.close').at(0).simulate('click');
  });
});
