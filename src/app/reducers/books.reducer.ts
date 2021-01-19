import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import { createBookFailure, createBookSuccess, deleteBookFailure, deleteBookSuccess, editBookFailure, editBookSuccess, getBookFailure, getBookSuccess, 
  loadBooks, loadBooksFailure, loadBooksSuccess } from '../store/actions/books.actions';


export const booksFeatureKey = 'books';

export interface State {
  books: Book[],
  book: Book;
  error: object,
}

export const initialState: State = {
  books: [],
  book: null,
  error: null
};


export const reducer = createReducer(
  initialState,
  on(loadBooks, (state, action) => { debugger; return {...state } }),
  on(loadBooksSuccess, (state, action) => { debugger; return {...state, books: action.books} }),
  on(loadBooksFailure, (state, action) => { debugger; return {...state, error: action.error} }),
  on(createBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(createBookFailure, (state, action) => { debugger; return {...state, error: action.error} }),
  on(editBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(editBookFailure, (state, action) => { debugger; return {...state, error: action.error} }),
  on(getBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(getBookFailure, (state, action) => { debugger; return {...state, error: action.error} }),
  on(deleteBookSuccess, (state, action) => { debugger; return {...state} }),
  on(deleteBookFailure, (state, action) => { debugger; return {...state, error: action.error} }),
);

