import React from 'react';
import { shallow } from 'enzyme';

import { Profile } from '../../../components/user/Profile';

describe('Test to successfully render <Profile />', () => {
  let wrapper = shallow(<Profile/>);
  it('renders the <Profile /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#sidebar').length).toBe(1);
    expect(wrapper.find('#user-name').length).toBe(1);
    expect(wrapper.find('#user-email').length).toBe(1);
    expect(wrapper.find('#user-phone').length).toBe(1);
  });
});
