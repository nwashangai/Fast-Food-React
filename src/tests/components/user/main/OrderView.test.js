import React from 'react';
import { shallow } from 'enzyme';

import { OrderView } from '../../../../components/user/main/OrderView';

describe('Test to successfully render <Main />', () => {
  localStorage.setItem('token-key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlcklkIjoiMjY4NDhmNmEtODFmYi00MGFhLWExYWMtZWFhMjUwMzAyNjQzIiwiZW1haWwiOiJ5b3VuZ0BnbWFpbC5jb20iLCJpYXQiOjE1NDk0Njg3NTl9.CEspQ9AZPOSq_rBOozBNGWDUV9KwqOJ5CGxGY_E2jeE');
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
  let wrapper = shallow(<OrderView {...propsOgj}/>);
  it('renders the <OrderView /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#main-col').length).toBe(1);
  });
});
