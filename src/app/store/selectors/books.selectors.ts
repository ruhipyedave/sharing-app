import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, booksFeatureKey } from '../../reducers/books.reducer';

export const getBookState = createFeatureSelector<State>(booksFeatureKey);

export const booksSelector = createSelector(
    getBookState,
  (state: State) => {debugger; return state.books}
);


export const bookSelector = createSelector(
  getBookState,
(state: State) => {debugger; return state.book}
);
