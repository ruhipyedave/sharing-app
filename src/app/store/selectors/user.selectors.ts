import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, authFeatureKey } from '../../reducers/auth.reducer';

export const getAuthState = createFeatureSelector<State>(authFeatureKey);

export const getLoggedInUser = createSelector(
    getAuthState,
  (state: State) => {debugger; return state.user}
);
