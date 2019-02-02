import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../components/home/Header';

describe('Test to successfully render <Header />', () => {
  const propsOgj = {
    login: jest.fn((data) => {
      'success';
    }),
    toggleReg: jest.fn()
  };
  const event = {
    target: {
      name: 'email',
      value: 'young@gmail.com'
    },
  };
  const event2 = {
    target: {
      name: 'password',
      value: '12345'
    },
  };
  let wrapper = shallow(<Header {...propsOgj}/>);
  it('renders the <Header /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#lemail').length).toBe(1);
    expect(wrapper.find('#lpassword').length).toBe(1);
    expect(wrapper.find('#login-click').length).toBe(1);
  });

  it('Should check the email input field for change', () => {
    wrapper.find('#lemail').simulate('change', event);
  });

  it('Should check the password input field for change', () => {
    wrapper.find('#lpassword').simulate('change', event2);
  });

  it('Should check for click event', () => {
    // jest.spyOn(Header.prototype, 'menuHide').mockImplementationOnce(() => ({
    //   current: {
    //     style: {}
    //   }
    // }));
    // wrapper.find('#login-toggle').simulate('click');
  });
});
