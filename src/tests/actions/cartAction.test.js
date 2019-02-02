import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addItem, update, clearCat
} from '../../actions/catAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Authentication actions', () => {
  it('should add item', async () => {
    const store = mockStore({});
    await store.dispatch(addItem({}));
    expect(store.getActions()).toEqual([{
      type: 'ADD_ITEM',
      payload: {}
    }]);
  });

  it('should update item', async () => {
    const store = mockStore({});
    await store.dispatch(update('mydata', 'food'));
    expect(store.getActions()).toEqual([{
      type: 'UPDATE_ITEM',
      payload: { id: 'mydata', action: 'food' }
    }]);
  });

  it('should get user', async () => {
    const store = mockStore({});
    await store.dispatch(clearCat());
    expect(store.getActions()).toEqual([{
      type: 'CLEAR_CAT'
    }]);
  });
});
