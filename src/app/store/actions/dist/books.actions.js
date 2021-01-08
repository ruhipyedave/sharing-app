"use strict";
exports.__esModule = true;
exports.deleteBookFailure = exports.deleteBookSuccess = exports.deleteBook = exports.getBookFailure = exports.getBookSuccess = exports.getBook = exports.editBookFailure = exports.editBookSuccess = exports.editBook = exports.createBookFailure = exports.createBookSuccess = exports.createBook = exports.loadBooksFailure = exports.loadBooksSuccess = exports.loadBooks = exports.BookActionTypes = void 0;
var store_1 = require("@ngrx/store");
exports.BookActionTypes = {
    LOAD_BOOKS: '[Books] Load Books',
    LOAD_BOOKS_SUCCESS: '[Books] Load Books Success',
    LOAD_BOOKS_FAILURE: '[Books] Load Books Failure',
    CREATE_BOOK: '[Books] Create Book',
    CREATE_BOOK_SUCCESS: '[Books] Create Book Success',
    CREATE_BOOK_FAILURE: '[Books] Create Book Failure',
    EDIT_BOOK: '[Books] Edit Book',
    EDIT_BOOK_SUCCESS: '[Books] Edit Book Success',
    EDIT_BOOK_FAILURE: '[Books] Edit Book Failure',
    GET_BOOK: '[Books] Get Book',
    GET_BOOK_SUCCESS: '[Books] Get Book Success',
    GET_BOOK_FAILURE: '[Books] Get Book Failure',
    DELETE_BOOK: '[Books] Delete Book',
    DELETE_BOOK_SUCCESS: '[Books] Delete Book Success',
    DELETE_BOOK_FAILURE: '[Books] Delete Book Failure'
};
exports.loadBooks = store_1.createAction(exports.BookActionTypes.LOAD_BOOKS);
exports.loadBooksSuccess = store_1.createAction(exports.BookActionTypes.LOAD_BOOKS_SUCCESS, store_1.props());
exports.loadBooksFailure = store_1.createAction(exports.BookActionTypes.LOAD_BOOKS_SUCCESS, store_1.props());
exports.createBook = store_1.createAction(exports.BookActionTypes.CREATE_BOOK, store_1.props());
exports.createBookSuccess = store_1.createAction(exports.BookActionTypes.CREATE_BOOK_SUCCESS, store_1.props());
exports.createBookFailure = store_1.createAction(exports.BookActionTypes.CREATE_BOOK_FAILURE, store_1.props());
exports.editBook = store_1.createAction(exports.BookActionTypes.EDIT_BOOK, store_1.props());
exports.editBookSuccess = store_1.createAction(exports.BookActionTypes.EDIT_BOOK_SUCCESS, store_1.props());
exports.editBookFailure = store_1.createAction(exports.BookActionTypes.EDIT_BOOK_FAILURE, store_1.props());
exports.getBook = store_1.createAction(exports.BookActionTypes.GET_BOOK, store_1.props());
exports.getBookSuccess = store_1.createAction(exports.BookActionTypes.GET_BOOK_SUCCESS, store_1.props());
exports.getBookFailure = store_1.createAction(exports.BookActionTypes.GET_BOOK_FAILURE, store_1.props());
exports.deleteBook = store_1.createAction(exports.BookActionTypes.DELETE_BOOK, store_1.props());
exports.deleteBookSuccess = store_1.createAction(exports.BookActionTypes.DELETE_BOOK_SUCCESS, store_1.props());
exports.deleteBookFailure = store_1.createAction(exports.BookActionTypes.DELETE_BOOK_FAILURE, store_1.props());
