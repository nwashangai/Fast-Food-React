import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../../../components/home';

describe('Test to successfully render <Home />', () => {
  const propsOgj = {
    history: {
      push: jest.fn()
    }
  };
  let wrapper = shallow(<Home {...propsOgj}/>);
  it('renders the <Home /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});
