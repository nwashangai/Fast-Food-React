import React from 'react';
import { shallow } from 'enzyme';

import { ErrorPage } from '../../../components/Error';

describe('Test to successfully render <ErrorPage />', () => {
  let wrapper = shallow(<ErrorPage/>);
  it('renders the <ErrorPage /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#error').length).toBe(1);
    expect(wrapper.find('.not-found').length).toBe(1);
  });
});
