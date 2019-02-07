import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { request } from '../../config';
import {
  login, logout, register, getUser, setUser
} from '../../actions/authAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.setTimeout(30000);

jest.mock('jwt-decode', () => ({
}));

describe('Test Authentication actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const action = {
    type: 'ADD_USER',
    payload: { name: 'young' }
  };

  jest.spyOn(request, 'post').mockImplementation((url, data) => ({
    data: {
      status: 'success',
      data: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlcklkIjoiMjY4NDhmNmEtODFmYi00MGFhLWExYWMtZWFhMjUwMzAyNjQzIiwiZW1haWwiOiJ5b3VuZ0BnbWFpbC5jb20iLCJpYXQiOjE1NDk0Njg3NTl9.CEspQ9AZPOSq_rBOozBNGWDUV9KwqOJ5CGxGY_E2jeE',
        name: 'young'
      }
    }
  }));
  jest.spyOn(request, 'get').mockImplementation(() => ({
    data: {
      status: 'success',
      data: {
        token: 'hbkaljgv;abvljkfb;najfk;ndbsabvjsavmnljadnf;',
        name: 'young'
      }
    }
  }));

  it('should add user', async () => {
    expect(setUser({ name: 'young' })).toEqual(action);
  });

  it('should register user', async () => {
    const store = mockStore({});
    await store.dispatch(register({}));
    expect(store.getActions()).toEqual([]);
  });

  it('should login', async () => {
    const store = mockStore({});
    await store.dispatch(login({}));
    expect(store.getActions()).toEqual([]);
  });

  it('should get user', async () => {
    const store = mockStore({});
    await store.dispatch(getUser());
    expect(store.getActions()).toEqual([
      {
        payload: {
          name: "young",
          token: "hbkaljgv;abvljkfb;najfk;ndbsabvjsavmnljadnf;",
        },
        type: "ADD_USER",
      },
    ]);
  });

  it('should logout user', async () => {
    const store = mockStore({});
    await store.dispatch(logout());
    expect(store.getActions()).toEqual([{ type: "LOGOUT", }]);
  });
});
