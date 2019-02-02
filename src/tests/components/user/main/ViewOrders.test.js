import React from 'react';
import { shallow } from 'enzyme';

import { ViewOrder } from '../../../../components/user/main/ViewOrder';

describe('Test to successfully render <ViewOrder />', () => {
  const propsOgj = {
    item: [
      {
        foodId: '12345',
        name: 'Bread',
        quantity: 3,
        subTotal: 200
      }
    ]
  };
  let wrapper = shallow(<ViewOrder {...propsOgj}/>);
  it('renders the <ViewOrder /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#view-food').length).toBe(1);
    expect(wrapper.find('#cart-items').length).toBe(1);
    expect(wrapper.find('#total-price').length).toBe(1);
  });
});
