"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.reducer = exports.initialState = exports.booksFeatureKey = void 0;
var store_1 = require("@ngrx/store");
var books_actions_1 = require("../store/actions/books.actions");
exports.booksFeatureKey = 'books';
exports.initialState = {
    books: [],
    book: null,
    error: ""
};
exports.reducer = store_1.createReducer(exports.initialState, store_1.on(books_actions_1.loadBooks, function (state, action) { debugger; return __assign({}, state); }), store_1.on(books_actions_1.loadBooksSuccess, function (state, action) { debugger; return __assign(__assign({}, state), { books: action.books }); }), store_1.on(books_actions_1.createBookSuccess, function (state, action) { debugger; return __assign(__assign({}, state), { book: action.book }); }), store_1.on(books_actions_1.editBookSuccess, function (state, action) { debugger; return __assign(__assign({}, state), { book: action.book }); }), store_1.on(books_actions_1.getBookSuccess, function (state, action) { debugger; return __assign(__assign({}, state), { book: action.book }); }), store_1.on(books_actions_1.deleteBookSuccess, function (state, action) { debugger; return __assign({}, state); }));
