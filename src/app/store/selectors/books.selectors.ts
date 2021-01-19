import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, booksFeatureKey } from '../../reducers/books.reducer';

export const getBookState = createFeatureSelector<State>(booksFeatureKey);

export const booksSelector = createSelector(
    getBookState,
  (state: State) => state.books
);

export const bookSelector = createSelector(
  getBookState,
(state: State) => state.book
);
