import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../components/user/Header';

describe('Test to successfully render <Header />', () => {
  const propsOgj = {
    logout: jest.fn(),
    user: {
      name: 'Young'
    },
    history: {
      push: jest.fn()
    }
  };
  let wrapper = shallow(<Header {...propsOgj}/>);
  it('renders the <Header /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#nav-bar').length).toBe(1);
    expect(wrapper.find('.tabs').length).toBe(1);
    expect(wrapper.find('.tablinks').length).toBe(3);
    expect(wrapper.find('#user-first-name').length).toBe(1);
  });

  it('Should check for logout click event', () => {
    wrapper.find('#order-tab').at(0).simulate('click');
  });

  it('Should check for food tab click event', () => {
    wrapper.find('#food-tab').simulate('click');
  });
});
