import React from 'react';
import { shallow } from 'enzyme';

import { Alert } from '../../../components/Alert';

describe('Test to successfully render <Alert />', () => {
  let wrapper = shallow(<Alert/>);
  it('renders the <Alert /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#alert').length).toBe(1);
    expect(wrapper.find('.popup-content').length).toBe(1);
    expect(wrapper.find('#title').length).toBe(1);
    expect(wrapper.find('#close-btn').length).toBe(1);
  });
});
