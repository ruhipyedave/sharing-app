import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book';

export const BookActionTypes = {
  LOAD_BOOKS: '[Books] Load Books',
  LOAD_BOOKS_SUCCESS:  '[Books] Load Books Success',
  LOAD_BOOKS_FAILURE:  '[Books] Load Books Failure',
  CREATE_BOOK: '[Books] Create Book',
  CREATE_BOOK_SUCCESS:  '[Books] Create Book Success',
  CREATE_BOOK_FAILURE:  '[Books] Create Book Failure',
  EDIT_BOOK: '[Books] Edit Book',
  EDIT_BOOK_SUCCESS:  '[Books] Edit Book Success',
  EDIT_BOOK_FAILURE:  '[Books] Edit Book Failure',
  GET_BOOK: '[Books] Get Book',
  GET_BOOK_SUCCESS:  '[Books] Get Book Success',
  GET_BOOK_FAILURE:  '[Books] Get Book Failure',
  DELETE_BOOK: '[Books] Delete Book',
  DELETE_BOOK_SUCCESS:  '[Books] Delete Book Success',
  DELETE_BOOK_FAILURE:  '[Books] Delete Book Failure',
}

export const loadBooks = createAction(
  BookActionTypes.LOAD_BOOKS
);

export const loadBooksSuccess = createAction(
  BookActionTypes.LOAD_BOOKS_SUCCESS,
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  BookActionTypes.LOAD_BOOKS_FAILURE,
  props<{ error: any }>()
);

export const createBook = createAction(
  BookActionTypes.CREATE_BOOK,
  props<{ data: Book }>()
);

export const createBookSuccess = createAction(
  BookActionTypes.CREATE_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const createBookFailure = createAction(
  BookActionTypes.CREATE_BOOK_FAILURE,
  props<{ error: any }>()
);

export const editBook = createAction(
  BookActionTypes.EDIT_BOOK,
  props<{ id: number, body: Book }>()
);

export const editBookSuccess = createAction(
  BookActionTypes.EDIT_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const editBookFailure = createAction(
  BookActionTypes.EDIT_BOOK_FAILURE,
  props<{ error: any }>()
);

export const getBook = createAction(
  BookActionTypes.GET_BOOK,
  props<{ id: number }>()
);

export const getBookSuccess = createAction(
  BookActionTypes.GET_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const getBookFailure = createAction(
  BookActionTypes.GET_BOOK_FAILURE,
  props<{ error: any }>()
);

export const deleteBook = createAction(
  BookActionTypes.DELETE_BOOK,
  props<{ id: number }>()
);

export const deleteBookSuccess = createAction(
  BookActionTypes.DELETE_BOOK_SUCCESS,
  props<{ book: Book }>()
);

export const deleteBookFailure = createAction(
  BookActionTypes.DELETE_BOOK_FAILURE,
  props<{ error: any }>()
);