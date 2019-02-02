import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { User } from '../../../components/user';
import UtilityClass from "../../../utils";

describe('Test to successfully render <User />', () => {
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
      pathname: '/user'
    }
  };
  sinon.stub(document, 'getElementById').returns({
    style: {
      display: 'none'
    }
  });
  let wrapper = shallow(<User {...propsOgj}/>);
  it('renders the <User /> components', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('#main').length).toBe(1);
    expect(wrapper.find('.container').at(0).length).toBe(1);
    expect(wrapper.find('#loader').length).toBe(1);
  });

  it('Should check for click event', () => {
    sinon.stub(UtilityClass, 'loader').returns(null);
    sinon.stub(UtilityClass, 'selectTab').returns(null);
    sinon.stub(UtilityClass, 'alert').returns(null);
    // expect(UtilityClass.selectTab.calls.length).toBe(1);
  });
});
