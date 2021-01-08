import { Action, createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const loadAuths = createAction(
  '[Auth] Load Auths'
);

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);

// export const LOGIN = createAction(
//   '[Auth] Log in',
//   (response: Response) => response
// );

export enum AuthActionTypes {
  LOGIN = '[Auth] Log in',
  LOGIN_SUCESS = '[Auth] Log in sucess',
  LOGIN_FAILURE = '[Auth] Log in failure',
  LOG_OUT = '[Auth] Log Out',
}

// export const LOGIN = createAction('[Auth] Log in');


export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export const logIn = createAction(
  AuthActionTypes.LOGIN,
  props<{user:User}>() 
  // (response: Response) => {debugger; return response}
);

export const logInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCESS,
  props<User>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<User>()
);

export const logOut = createAction(
  AuthActionTypes.LOG_OUT,
  // props<User>()
);

export type All =
  | LogIn;
