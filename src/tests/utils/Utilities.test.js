import React from 'react';

import utils from '../../utils';

const data = {
  name: '',
  email: 'exa',
  phone: '0803',
  password: '123',
  confirmPassword: '123456'
};
const data3 = '';

const event = {
  currentTarget: {
    className: ''
  }
};

jest.spyOn(document, 'getElementById').mockImplementation(() => ({}));
jest.spyOn(document, 'getElementById')
  .mockImplementation(() => ({ style: {} }));
jest.spyOn(document, 'getElementsByClassName')
  .mockImplementation(() => ([
    {
      className: ' active',
      style: {}
    }
  ]));

describe('Test to utilities', () => {
  it('should test for user signup input', () => {
    utils.formValid(data, 1);
    data.name = 'john';
    utils.formValid(data, 1);
    data.email = 'example@gmail.com';
    utils.formValid(data, 1);
    data.phone = '08035729845';
    utils.formValid(data, 1);
    data.password = '12345';
    utils.formValid(data, 1);
    data.confirmPassword = '12345';
  });
  it('should test for user login input', () => {
    data.email = 'john';
    data.password = '';
    utils.formValid(data, 2);
    data.email = 'example@gmail.com';
    utils.formValid(data, 2);
    data.password = '1234';
    utils.formValid(data, 2);
  });
  it('should test for user input', () => {
    utils.formValid(data3, 3);
    utils.formValid(data3, 4);
  });
  it('should test for alerts', () => {
    utils.alert('error', 'message');
    utils.loader('none');
    utils.closeOrder();
    utils.closeView();
    utils.noEntry();
    utils.openTab(event, 'tab-contents');
    utils.selectTab('tab-contents');
  });
});
