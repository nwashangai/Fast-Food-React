import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from '../../../components/home/Signup';

describe('Test to successfully render <Signup />', () => {
  const propsOgj = {
    register: jest.fn((data) => {
      'success';
    })
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
  const event3 = {
    preventDefault: jest.fn(),
  };
  let wrapper = shallow(<Signup {...propsOgj}/>);
  it('renders the <Signup /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#semail').length).toBe(1);
    expect(wrapper.find('#spassword').length).toBe(1);
    expect(wrapper.find('#sname').length).toBe(1);
    expect(wrapper.find('#sphone').length).toBe(1);
    expect(wrapper.find('#confirmPassword').length).toBe(1);
    expect(wrapper.find('#register').length).toBe(1);
  });

  it('Should check the email input field for change', () => {
    wrapper.find('#semail').simulate('change', event);
  });

  it('Should check the password input field for change', () => {
    wrapper.find('#spassword').simulate('change', event2);
  });

  it('Should check for click event', () => {
    wrapper.find('#register').simulate('click', event3);
    wrapper.instance().handleSubmit(event3);
    expect(event3.preventDefault).toHaveBeenCalled();
  });
});
