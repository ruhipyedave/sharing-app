import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import { createBookSuccess, deleteBookSuccess, editBookSuccess, getBookSuccess, 
  loadBooks, loadBooksSuccess } from '../store/actions/books.actions';


export const booksFeatureKey = 'books';

export interface State {
  books: Book[],
  book: Book;
  error: string,
}

export const initialState: State = {
  books: [],
  book: null,
  error: ""
};


export const reducer = createReducer(
  initialState,
  on(loadBooks, (state, action) => { debugger; return {...state } }),
  on(loadBooksSuccess, (state, action) => { debugger; return {...state, books: action.books} }),
  on(createBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(editBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(getBookSuccess, (state, action) => { debugger; return {...state, book: action.book} }),
  on(deleteBookSuccess, (state, action) => { debugger; return {...state} })
);

