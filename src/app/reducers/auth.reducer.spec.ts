import { reducer, initialState } from './auth.reducer';
import { AuthActionTypes, logIn, logInSuccess, logOut } from '../store/actions/auth.actions';
import { User } from '../models/user';

describe('Auth Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

describe('Login', () => {
  describe(AuthActionTypes.LOGIN, () => {
    it('should toggle loading state', () => {
      const user = new User({email: "ruhi@gmail.com", password: "test"});
      const action = logIn({user});
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        user: user
      });
    });
  });
});

describe('Login Sucess', () => {
  describe(AuthActionTypes.LOGIN_SUCESS, () => {
    it('should toggle loading state', () => {
      const user = new User({email: "ruhi@gmail.com", password: "test", token: "token"});
      const action = logInSuccess(user);
      const result = reducer(initialState, action);
      expect(result).toBeDefined();
      expect(result).toHaveProperty("user");
      expect(result.user).toHaveProperty("token");
      expect(result.user.token).toBeTruthy();
    });
  });
});

describe('Logout', () => {
  describe(AuthActionTypes.LOG_OUT, () => {
    it('should toggle loading state', () => {
      const action = logOut();
      const result = reducer(initialState, action);
      expect(result).toEqual({
        user: null,
        isAuthenticated: false,
        errorMessage: ""
      });
    });
  });
});

