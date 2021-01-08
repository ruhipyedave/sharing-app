import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as auth from './auth.reducer';
import * as book from './books.reducer'

export interface State {
  [auth.authFeatureKey]: auth.State;
  [book.booksFeatureKey]: book.State;
}

export const reducers: ActionReducerMap<State> = {
  [auth.authFeatureKey]: auth.reducer,
  [book.booksFeatureKey]: book.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


