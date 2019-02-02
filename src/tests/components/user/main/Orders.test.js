import React from 'react';
import { shallow } from 'enzyme';

import { Order } from '../../../../components/user/main/Orders';

describe('Test to successfully render <Order />', () => {
  const propsOgj = {
    orders: [
      {
        id: '12345',
        date: 'Bread',
        status: 'proccessing',
        address: 'ikeja road',
        fooditems: [{
          foodId: "0e343a55-11f2-48c9-90ab-1b26cd908704",
          name: "Tapioca",
          price: 1200,
          quantity: 1,
          subTotal: 1200
        }]
      }
    ]
  };
  let wrapper = shallow(<Order {...propsOgj}/>);
  it('renders the <Order /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#table-wrap').length).toBe(1);
    expect(wrapper.find('#table-header').length).toBe(1);
    expect(wrapper.find('#no-item').length).toBe(1);
  });

  it('Should check for view item click event', () => {
    jest.spyOn(document, 'getElementById').mockImplementation(() => ({}));
    jest.spyOn(document, 'getElementById')
      .mockImplementation(() => ({ style: {} }));
    wrapper.find('.clickable').simulate('click');
  });
});
