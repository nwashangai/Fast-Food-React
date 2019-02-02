import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { request } from '../../config';
import {
  menu
} from '../../actions/foodAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.setTimeout(30000);

describe('Test Authentication actions', () => {
  jest.spyOn(request, 'get').mockImplementation(() => ({
    data: {
      status: 'success',
      data: {
        food: 'myfood'
      }
    }
  }));

  it('should get food', async () => {
    const store = mockStore({});
    await store.dispatch(menu());
    expect(store.getActions()).toEqual([{
      type: 'ADD_MENU',
      payload: { food: 'myfood' }
    }]);
  });

  it('should get food', async () => {
    jest.spyOn(request, 'get').mockImplementation(() => ({
      data: {
        status: 'error',
        data: {
          food: 'myfood'
        }
      }
    }));
    const store = mockStore({});
    await store.dispatch(menu());
    expect(store.getActions()).toEqual([]);
  });
});
