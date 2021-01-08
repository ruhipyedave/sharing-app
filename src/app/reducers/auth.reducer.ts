import { Action, createReducer, on } from '@ngrx/store';
import { from } from 'rxjs';
import { User } from '../models/user';
import { logIn, loginFailure, logInSuccess, logOut } from '../store/actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};


export const reducer = createReducer(
  initialState,
  on(logIn, (state, action) => {debugger; return { ...state, user: action.user }}),
  on(logInSuccess, (state, user: User) => {debugger; return { ...state, user, isAuthenticated: true }}),
  on(loginFailure, (state, user: User) => { debugger; 
    return { 
      user, isAuthenticated: false, 
      errorMessage: "Log in failed" 
    }
  }),
  on(logOut, (state, action) => {debugger; return {
    user: null, 
    isAuthenticated: false, 
    errorMessage: ""  
  }})
);


// export function reducer(state: State | undefined, action: Action) {
//   return createReducer(
//     initialState,
//     on(AuthActionTypes.LOGIN, state => ({ ...state, }))
//   );
// }


// const scoreboardReducer = createReducer(
//   initialState,
//   on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//   on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//   on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return scoreboardReducer(state, action);
// }