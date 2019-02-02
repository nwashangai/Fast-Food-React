import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { request } from '../../config';
import {
  placeOrder, getOrders
} from '../../actions/orderAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.setTimeout(30000);

describe('Test order actions', () => {
  jest.spyOn(request, 'post').mockImplementation((url, data) => ({
    data: {
      status: 'success',
      data: {
        token: 'hbkaljgv;abvljkfb;najfk;ndbsabvjsavmnljadnf;',
        name: 'young'
      }
    }
  }));
  jest.spyOn(request, 'get').mockImplementation(() => ({
    data: {
      status: 'success',
      data: {
        order: 'myorder'
      }
    }
  }));
  it('should place order', async () => {
    const store = mockStore({});
    await store.dispatch(placeOrder({}));
    expect(store.getActions()).toEqual([{
      type: 'CLEAR_CAT'
    }]);
  });

  it('should login', async () => {
    const store = mockStore({});
    await store.dispatch(getOrders({}));
    expect(store.getActions()).toEqual([{
      type: 'ADD_ORDER',
      payload: { order: 'myorder' }
    }]);
  });

  it('should place order', async () => {
    jest.spyOn(request, 'post').mockImplementation(() => ({
      data: {
        status: 'error',
        data: {
          token: 'hbkaljgv;abvljkfb;najfk;ndbsabvjsavmnljadnf;',
          name: 'young'
        }
      }
    }));
    const store = mockStore({});
    await store.dispatch(placeOrder({}));
    expect(store.getActions()).toEqual([]);
  });

  it('should login', async () => {
    jest.spyOn(request, 'get').mockImplementation(() => ({
      data: {
        status: 'error',
        data: {
          order: 'myorder'
        }
      }
    }));
    const store = mockStore({});
    await store.dispatch(getOrders({}));
    expect(store.getActions()).toEqual([]);
  });
});
