import * as fromAuth from './auth.actions';

describe('loadAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.loadAuths().type).toBe('[Auth] Load Auths');
  });

  it('should return login action', () => {
    expect(fromAuth.logIn.type).toBe(fromAuth.AuthActionTypes.LOGIN);
  });

  it('should return logInSuccess action', () => {
    expect(fromAuth.logInSuccess.type).toBe(fromAuth.AuthActionTypes.LOGIN_SUCESS);
  });

  it('should return loginFailure action', () => {
    expect(fromAuth.loginFailure.type).toBe(fromAuth.AuthActionTypes.LOGIN_FAILURE);
  });
  
  it('should return logOut action', () => {
    expect(fromAuth.logOut.type).toBe(fromAuth.AuthActionTypes.LOG_OUT);
  });
});
