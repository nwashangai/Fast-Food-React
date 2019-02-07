import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ViewOrders } from '../../../components/user/ViewOrders';

describe('Test to successfully render <User />', () => {
  localStorage.setItem('token-key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlcklkIjoiMjY4NDhmNmEtODFmYi00MGFhLWExYWMtZWFhMjUwMzAyNjQzIiwiZW1haWwiOiJ5b3VuZ0BnbWFpbC5jb20iLCJpYXQiOjE1NDk0Njg3NTl9.CEspQ9AZPOSq_rBOozBNGWDUV9KwqOJ5CGxGY_E2jeE');
  const propsOgj = {
    logout: jest.fn(),
    getUser: jest.fn(),
    user: {
      name: 'Young',
      isAdmin: true
    },
    history: {
      push: jest.fn()
    },
    location: {
      pathname: '/menu'
    }
  };
  sinon.stub(document, 'getElementById').returns({
    style: {
      display: 'none'
    }
  });
  jest.spyOn(document, 'getElementById').mockImplementation(() => ({}));
  jest.spyOn(document, 'getElementById')
    .mockImplementation(() => ({
      classList: {
        add: jest.fn(),
        remove: jest.fn()
      },
      style: {}
    }));
  let wrapper = shallow(<ViewOrders {...propsOgj}/>);
  it('renders the <ViewOrders /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#main').length).toBe(1);
    expect(wrapper.find('.container').at(0).length).toBe(1);
    expect(wrapper.find('#loader').length).toBe(1);
  });

  it('renders the <ViewOrders /> components', () => {
    localStorage.setItem('token-key', 'fake');
    let newwrapper = shallow(<ViewOrders {...propsOgj}/>);
    expect(newwrapper.length).toBe(1);
  });
});
