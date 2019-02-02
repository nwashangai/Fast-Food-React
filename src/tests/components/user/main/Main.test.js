import React from 'react';
import { shallow } from 'enzyme';

import { Main } from '../../../../components/user/main';

describe('Test to successfully render <Main />', () => {
  const propsOgj = {
    menuItem: [
      {
        id: '0e343a55-11f2-48c9-90ab-1b26cd908704',
        image: null,
        category: 'vegetable',
        name: 'Rice',
        description: 'good rice',
        price: 2000
      }
    ],
    menu: jest.fn()
  };
  let wrapper = shallow(<Main {...propsOgj}/>);
  it('renders the <Menu /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#main-col').length).toBe(1);
    expect(wrapper.find('#new').at(0).length).toBe(1);
  });

  it('Should check the filter changed input field for change', () => {
    jest.spyOn(document, 'getElementById').mockImplementation(() => ({
      value: 'vegetable'
    }));
    wrapper.find('#category-selected').simulate('change');
  });
});
