import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../../../components/home/Footer';

describe('Test to successfully render <Header />', () => {
  let wrapper = shallow(<Footer/>);
  it('renders the <Header /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.footer').length).toBe(1);
  });
});
